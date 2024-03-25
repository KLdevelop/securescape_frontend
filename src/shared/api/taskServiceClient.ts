import axios from 'axios';

const token = localStorage.getItem('jwtToken');

export const baseTaskUrl = 'http://localhost:8082/api';

export const taskServiceClient = axios.create({
    proxy: {
        port: 8082,
        host: 'http://localhost',
    },
    headers: {
        Authorization: token && `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
});
