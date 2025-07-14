import axios from 'axios'

export const getGamerForId = (id) => {
    return axios.get(`${import.meta.env.VITE_API_URL}${id}/`);
};
