import axios from 'axios';

const token = localStorage.getItem('jwtToken');

export const baseUserUrl = 'http://localhost:8081/api';

export const userServiceClient = axios.create({
    proxy: {
        port: 8081,
        host: 'http://localhost',
    },
    headers: {
        Authorization: token && `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
});
