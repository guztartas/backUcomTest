const express = require('express');
const compression = require('compression');
const xss = require('xss-clean');
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/v1';

const app = express();

// Set Security HTTP Headers
app.use(helmet());

// Parse JSON Req Body
app.use(express.json());

// Parse URL Encoded Req Body
app.use(express.urlencoded({ extended: true }));

// Sanitize Req Data
app.use(xss());

// GZip
app.use(compression());

// Enable CORS
app.use(cors());
app.options('*', cors());

// API Routes
app.use('/v1', routes);

export default app;
