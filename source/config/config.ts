import dotenv from 'dotenv';

dotenv.config();

// MONGO CONFIGURATIONS
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;

const MONGO = {
    host: MONGO_HOSTNAME,
    username: 'admin',
    password: 'admin',
    port: MONGO_PORT,
    url: 'mongodb://127.0.0.1/auth'
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
