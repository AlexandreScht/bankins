import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import http from 'http';
import morgan from 'morgan';
import 'reflect-metadata';
import config from './config/index.js';
import ErrorMiddleware from './middlewares/error.js';
import ApiRouter from './routes/index.js';
import { logger,stream } from './utils/logger.js';
const { log } = config;

export default class App extends ApiRouter {
  constructor() {
    super();
    this.app = express();
    this.env = config.NODE_ENV || 'development';
    this.port = config.PORT || 3005;
    this.server = http.createServer(this.app);

    this.initializeMiddlewares();
    this.initializeErrorHandling();
    this.initializeAppRoutes();
    this.defaultError();
  }

  listen() {
    this.server.listen(this.port, () => {
      logger.info(`======= Version: ${this.env} =======
        🚀 server listening port: ${this.port} 🚀`);
    });
    return this.server;
  }

  getServer() {
    return this.app;
  }

  initializeMiddlewares() {
    this.app.use(morgan(log.FORMAT, { stream }));
    this.app.use(
      cors({
        origin: config.ORIGIN,
        credentials: config.CREDENTIALS,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
      }),
    );
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeBodyContent() {
    this.app.use((req, res, next) => {
      express.json()(req, res, next);
    });
  }


  initializeAppRoutes() {
    super.initializeRoutes();
    this.app.use('/api', this.router);
  }

  initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }

  defaultError() {
    this.app.use((req, res) => {
      res
        .status(404)
        .setHeader('Content-Type', 'application/json; charset=utf-8')
        .send({ error: `Cannot find or << ${req.method} >> is incorrect method at ${req.url}` });
    });
  }
}
