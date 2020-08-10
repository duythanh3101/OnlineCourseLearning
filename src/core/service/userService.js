import { getUserInfoEndpoint, sendEmailForgotPassword, sendActiveEmail } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";
import Axios from 'axios';

class UserService {

    constructor() {
        this.restClientInfo = new BaseAPI(getUserInfoEndpoint);
        this.restClientEmailForgotPassword = new BaseAPI(sendEmailForgotPassword);
        this.restClientActiveEmail = new BaseAPI(sendActiveEmail);
    }

    async getInfo(token) {
        return await this.restClientInfo.get(null, token);
    }

    async sendEmailForgotPassword(email) {
        return await this.restClientEmailForgotPassword.post({
            email: email,
        })
    }

    async sendActiveEmail(email) {
        //console.log('email 2:', email)
        return await this.restClientActiveEmail.post({
            email: email,
        })
        // return await Axios.post(sendActiveEmail,
        //     {
        //         email: email
        //     }
        // );
    }
}

export default new UserService();