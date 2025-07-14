import axios from 'axios'

export const createUser = (user) => {
    return axios.post(`${import.meta.env.VITE_API_URL}user/`, user);
};

export const getAllProfiles = () => {
    return axios.get(`${import.meta.env.VITE_API_URL}profile/`);
};

export const getProfile = (id) => { 
    return axios.get(`${import.meta.env.VITE_API_URL}profile/${id}/`);
};


export const updateProfile = (id, profile) => {
    return axios.put(`${import.meta.env.VITE_API_URL}profile/${id}/`, profile)
};

