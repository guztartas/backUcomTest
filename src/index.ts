import app from './app';
import config from './config/config';

let server:any;

server = app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
