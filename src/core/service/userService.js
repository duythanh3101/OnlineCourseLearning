import { getUserInfoEndpoint, sendEmailForgotPassword } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";

class UserService {

    constructor() {
        this.restClientInfo = new BaseAPI(getUserInfoEndpoint);
        this.restClientEmailForgotPassword = new BaseAPI(sendEmailForgotPassword);
    }

    async getInfo(token){
        return await this.restClientInfo.get(null, token);
    }

    async sendEmailForgotPassword(email) {
        return await this.restClientEmailForgotPassword.post({
            email: email,
        })
    }
}

export default new UserService();