import { getUserInfoEndpoint, sendEmailForgotPassword, sendActiveEmail, updateProfileEndpoint, changePasswordEndpoint } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";
import Axios from 'axios';

class UserService {

    constructor() {
        this.restClientInfo = new BaseAPI(getUserInfoEndpoint);
        this.restClientEmailForgotPassword = new BaseAPI(sendEmailForgotPassword);
        this.restClientActiveEmail = new BaseAPI(sendActiveEmail);
        this.restClientUserInfo = new BaseAPI(getUserInfoEndpoint);
        this.restClientUpdateUserInfo = new BaseAPI(updateProfileEndpoint);
        this.restClientChangePassword = new BaseAPI(changePasswordEndpoint);


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

    }

    async getUserInfo(token) {
        return await this.restClientUserInfo.getByToken(token);
    }

    async updateUserInfo(name, phone, avatar, token) {
        return await this.restClientUpdateUserInfo.put(
            {
                name: name,
                avatar: avatar,
                phone: phone
            }
            , token);
    }

    async changePassword(id, oldPass, newPass, token) {
        //console.log('email 2:', email)
        return await this.restClientChangePassword.post({
            id: id,
            oldPass: oldPass,
            newPass: newPass
        }, token)
    }
}

export default new UserService();