const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connect = require('./config/db');
const indexRouter = require('./routes');
const cors = require('cors');
const path = require('path');

dotenv.config();
app.set('port', process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
// });

if (process.env.NODE_ENV === "production") {
  //"client/build"는 react의 build파일 경로이다
    app.use(express.static("client/build"));
  
  //"..client"는 react 프로젝트의 파일 경로, "build"는 react프로젝트 내의 build폴더이다
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }

app.use(cors());
connect();

app.use('/api', indexRouter);

app.listen(app.get('port'),()=>{
  console.log(app.get('port'),'번 포트에서 대기중');
});

