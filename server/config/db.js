const mongoose = require('mongoose');


const connect = () => {
  if(process.env.NODE_ENV !== 'production') {
    mongoose.set('debug',true);
  }
  mongoose.connect(process.env.MONGO_DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
  },(error) => {
    if(error) {
      console.log('몽고디비 연결 에러',error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });

}

module.exports = connect;