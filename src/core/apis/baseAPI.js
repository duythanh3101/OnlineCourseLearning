import Axios from 'axios'

export default class BaseAPI {
    
    constructor(endpoint) {
        console.log(endpoint)
        this.endpoint = endpoint;
        
    }

    async getAll() {
        return await Axios.get(this.endpoint);
    }

    /**
     * @param {string} id 
     */
    async getById(id) {
        return await Axios.get(`${this.endpoint}/${id}`);
    }

    async get(queryParams) {
        return await Axios.get(this.endpoint, { params: queryParams });
    }

    async get(queryParams, config) {
        return await Axios.get(this.endpoint, { params: queryParams }, config);
    }

    async post(entity) {
        return await Axios.post(this.endpoint, entity);
    }

    async post(entity, config){
        return await Axios.post(this.endpoint, entity, config);
    }

    async put(entity) {
        return await Axios.put(`${this.endpoint}/${entity.id}`, entity);
    }

    /**
     * @param {string} id 
     */
    async delete(id) {
        return await Axios.delete(`${this.endpoint}/${id}`);
    }
}