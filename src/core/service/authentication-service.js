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

        return await this.create({ email, password });
    }

    
}

export default new AuthenticationService();