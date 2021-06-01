const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connect = require('./config/db');
const indexRouter = require('./routes');
const adminRouter = require('./routes/admin');
const cors = require('cors');
const path = require('path');


dotenv.config();
connect();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.use('/api', indexRouter);
app.use('/api/admin', adminRouter);

app.listen(app.get('port'),()=>{
  console.log(app.get('port'),'번 포트에서 대기중');
});

