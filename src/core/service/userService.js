import { getUserInfoEndpoint } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";

class UserService {

    constructor() {
        this.restClientInfo = new BaseAPI(getUserInfoEndpoint);
    }

    async getInfo(token){
        return await this.restClientInfo.get(null, token);
    }

    
}

export default new UserService();