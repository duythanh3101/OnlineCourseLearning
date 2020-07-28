import BaseService from "./baseService";
import { registerEndpoint } from '../apis/endpoint'

class RegisterService extends BaseService {

    constructor() {
        super(registerEndpoint);
    }

    async register(username, email, phone, password) {
        console.log('aaaaaaaaaaaaaaa');
        return await this.create({ username, email, phone, password });
    }

    
}

export default new RegisterService();