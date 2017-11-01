import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:kHooCJJTJfIr4GM4@arezzo-shard-00-00-ewv9s.mongodb.net:27017,arezzo-shard-00-01-ewv9s.mongodb.net:27017,arezzo-shard-00-02-ewv9s.mongodb.net:27017/test?ssl=true&replicaSet=Arezzo-shard-0&authSource=admin', {
  useMongoClient: true,
});

const app = express();

app.set('port', (process.env.PORT || 5000));
// Allow Cross Origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(router);


const server = app.listen(app.get('port'), () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
