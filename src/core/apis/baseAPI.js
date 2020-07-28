import Axios from 'axios'

export default class BaseAPI {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        
    }

    async getAll() {
        return await Axios.get(this.endpoint);
    }

    /**
     * @param {string} id 
     */
    async getById(id) {
        //console.log(`${this.endpoint}/${id}`)

        return await Axios.get(`${this.endpoint}/${id}`);
    }

    async get(queryParams) {
        return await Axios.get(this.endpoint, { params: queryParams });
    }

    async getByToken(token) {
        return await Axios.get(this.endpoint, 
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async get(queryParams, authorizationToken) {
        const headers = authorizationToken ? 
        {
            Authorization: `Bearer ${authorizationToken}`
        }
        : 
        null
        console.log('get: ', queryParams, authorizationToken)

        return await Axios.get(this.endpoint, { params: queryParams },
            {
            headers: {
                'Authorization': `Bearer ${authorizationToken}`
            }
        });
    }

    async post(entity) {
        const config = {
            'Content-type': 'application/json; charset=UTF-8'
        }
        return await Axios.post(this.endpoint, entity, config);
    }

    async post(entity, authorizationToken){
        const config = {
            'Content-type': 'application/json'
        }

        // const headers = authorizationToken ? 
        // {
        //     'Authorization': `Bearer ${authorizationToken}`
        // }
        // : 
        // null

        //console.log('post ', entity, headers)


        return await Axios.post(this.endpoint, entity, 
            {
                headers: {
                    'Authorization': `Bearer ${authorizationToken}`
                }
            });
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