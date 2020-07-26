import { getInstructorDetailEndpoint } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";

class InstructorService {

    constructor() {
        this.restClientInstructorDetail = new BaseAPI(getInstructorDetailEndpoint);
    }

    async getDetail(id){
        return await this.restClientInstructorDetail.getById(id);
    }

    
}

export default new InstructorService();