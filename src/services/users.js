import axios from 'axios';

export function getID(id) {
    return axios.get(`/id`);
}