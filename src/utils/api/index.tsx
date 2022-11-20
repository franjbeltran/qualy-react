import axios from 'axios';
import { Config } from '../../config/development';
import { ApiParams } from './api.type';

// TODO use composed functions when refactor this file
const get = async ({ endpoint, params, apiUrl = Config.API }: ApiParams) => axios.get(`${apiUrl}${endpoint}`, { params });

const post = async ({ endpoint, params, apiUrl = Config.API }: ApiParams) => axios.post(`${apiUrl}${endpoint}`, { params });

const put = async ({ endpoint, params, apiUrl = Config.API }: ApiParams) => axios.put(`${apiUrl}${endpoint}`, { params });

const patch = async ({ endpoint, params, apiUrl = Config.API }: ApiParams) => axios.patch(`${apiUrl}${endpoint}`, { params });

const deleteAxios = async ({ endpoint, params, apiUrl = Config.API }: ApiParams) => axios.delete(`${apiUrl}${endpoint}`, { params });

export const Api = {
    get,
    post,
    put,
    patch,
    delete: deleteAxios
}
