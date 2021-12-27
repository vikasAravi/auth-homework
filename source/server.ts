import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';
import userRoutes from './routes/user';
import classroomRoutes from './routes/classroom';
import schoolRoutes from './routes/school';
import userRoles from './routes/roles';
import mongoose from 'mongoose';
import bodyParser from 'express';

const NAMESPACE = 'SERVER';
const router = express();

/** Connect To MongoDB */
mongoose
    .connect(config.mongo.url)
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to DB');
    })
    .catch((error) => {
        logging.error(NAMESPACE, 'Error Connected to DB', error);
    });

/** Logging the request */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

// Parse the Body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Routes go here */
router.use('/sample', sampleRoutes);
router.use('/api/v0/user', userRoutes);
router.use('/api/v0/classroom', classroomRoutes);
router.use('/api/v0/school', schoolRoutes);
router.use('/api/v0/roles', userRoles);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));

// 1. Added Proper Documentation for each API
// 2. Proper Logging for every API
// 3. ClassRoom Auth
