import Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import { unitGet } from './api/unit/route';
import { DEBUG, HOST, PORT } from './constants';

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'This is demo API example',
    version: '0.1',
  },
};

const plugins = [
  { plugin: Inert },
  { plugin: Vision },
  { plugin: HapiSwagger, options: swaggerOptions },
];

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST,
    debug: { log: DEBUG ? ['*'] : false },
  });

  await server.register(plugins);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
  }

  server.route([unitGet]);
};

process.on('uncaughtException', (err) => {
  console.log(err);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
