import { getInstructorDetailEndpoint, getAllInstructorEndpoint } from '../apis/endpoint'
import BaseAPI from "../apis/baseAPI";

class InstructorService {

    constructor() {
        this.restClientInstructorDetail = new BaseAPI(getInstructorDetailEndpoint);
        this.restClientGetAll = new BaseAPI(getAllInstructorEndpoint);
    }

    async getDetail(id){
        return await this.restClientInstructorDetail.getById(id);
    }

    async getAll(){
        return await this.restClientGetAll.getAll();
    }
    
}

export default new InstructorService();