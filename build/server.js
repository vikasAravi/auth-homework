"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const sample_1 = __importDefault(require("./routes/sample"));
const user_1 = __importDefault(require("./routes/user"));
const classroom_1 = __importDefault(require("./routes/classroom"));
const school_1 = __importDefault(require("./routes/school"));
const roles_1 = __importDefault(require("./routes/roles"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_2 = __importDefault(require("express"));
const NAMESPACE = 'SERVER';
const router = (0, express_1.default)();
/** Connect To MongoDB */
mongoose_1.default
    .connect(config_1.default.mongo.url)
    .then((result) => {
    logging_1.default.info(NAMESPACE, 'Connected to DB');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, 'Error Connected to DB', error);
});
/** Logging the request */
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
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
router.use(express_2.default.urlencoded({ extended: true }));
router.use(express_2.default.json());
/** Routes go here */
router.use('/sample', sample_1.default);
router.use('/api/v0/user', user_1.default);
router.use('/api/v0/classroom', classroom_1.default);
router.use('/api/v0/school', school_1.default);
router.use('/api/v0/roles', roles_1.default);
/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server is running ${config_1.default.server.hostname}:${config_1.default.server.port}`));
// 1. Added Proper Documentation for each API
// 2. Proper Logging for every API
// 3. ClassRoom Auth
