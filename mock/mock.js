const jsonServer = require('json-server')
const fs = require('fs')
const { time } = require('console')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const router = jsonServer.router('./mock/bank.json')

server.use(middlewares)
server.use(jsonServer.bodyParser)


server.post('/login', (req, res, next) => {
  fs.readFile('./mock/bank.json', (err, data) => {
    const db = JSON.parse(data)
    const users = db.users;
    let isLogin = false;
    let username;
    let role;
    let id;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === req.body.email && users[i].password === req.body.password) {
        isLogin = true;
        username = users[i].username;
        role = users[i].role;
        id = users[i].id;

      }
    }
    if (isLogin) {
      res.send({ code: 0, username, role, token: '6666', id })
    }
    else {
      res.send({ code: -1 })
    }
  })
})

server.use('/token', (req, res, next) => {
  if (req.headers.token === '6666') {
    next()
  } else {
    // res.sendStatus(401)
    res.send({ code: -1 })
  }
})
server.get('/token', (req, res, next) => {
  res.send({ code: 0 })
})
server.get('/userlist', (req, res, next) => {
  fs.readFile('./mock/bank.json', (err, data) => {
    const db = JSON.parse(data)
    let users = db.users;
    users = users.map((v) => {
      delete v.password;
      v.key = v.id;
      return v;
    })
    res.send({ code: 0, users });
  })
})

server.put('/timesign', (req, res, next)=>{
  const userid = req.body.userid;
  const dates = new Date();
  const month = dates.getMonth() + 1;
  const date = dates.getDate();
  const h = dates.getHours();
  const m = dates.getMinutes();
  const s = dates.getSeconds();

  fs.readFile('./mock/bank.json', (err, data)=>{
    const db = JSON.parse(data)
    let times = db.times;

    const now = times.find((v)=> v.userid === userid);

    if(now && now.dates){
      if( now.dates[month][date] ){   //存在走if
        now.dates[month][date][1] = `${h}:${m}:${s}`;
      }
      else{  // 不存在走else
        now.dates[month][date] = [];
        now.dates[month][date][0] = `${h}:${m}:${s}`;
      }
    }

    fs.writeFile('./mock/bank.json', JSON.stringify(db, null, 2), (err)=>{
      res.send({ code: 0,dates:now.dates })
    })

  })


})

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})