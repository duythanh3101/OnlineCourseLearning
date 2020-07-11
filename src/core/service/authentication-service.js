import BaseService from "./baseService";
import { loginEndpoint } from '../apis/endpoint'

class AuthenticationService extends BaseService {

    constructor() {
        super(loginEndpoint);
    }

    async login(email, password) {
        const config = {
            'Content-type': 'application/json; charset=UTF-8'
        }

        const result = await this.create({ email, password }, config);
       
        return result;
    }

    
}

export default new AuthenticationService();