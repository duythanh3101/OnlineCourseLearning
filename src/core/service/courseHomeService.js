import { topSellEndpoint, topNewEndpoint, topRateEndpoint } from "../apis/endpoint";
import BaseAPI from "../apis/baseAPI";

class CourseHomeService {

    constructor() {
        this.restClientSell = new BaseAPI(topSellEndpoint);
        this.restClientNew = new BaseAPI(topNewEndpoint);
        this.restClientRate = new BaseAPI(topRateEndpoint);
    }

    // async login(email, password) {
    //     const config = {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }

    //     return await this.create({ email, password });
    // }

    async getTopSellCourses(limit, page){
        console.log('limit: ', limit, page)
        return await this.restClientSell.post({
            limit: limit,
            page: page
          })
    }

    async getTopNewCourses(limit, page){
        return await this.restClientNew.post({
            limit: limit,
            page: page
          })
    }

    async getTopRateCourses(limit, page){
        return await this.restClientRate.post({
            limit: limit,
            page: page
          })
    }
    
}

export default new CourseHomeService();