import { topSellEndpoint, topNewEndpoint, topRateEndpoint, searchEndpoint, getAllCategoryEndpoint } from "../apis/endpoint";
import BaseAPI from "../apis/baseAPI";

class CourseHomeService {

    constructor() {
        this.restClientSell = new BaseAPI(topSellEndpoint);
        this.restClientNew = new BaseAPI(topNewEndpoint);
        this.restClientRate = new BaseAPI(topRateEndpoint);
        this.restClientSearch = new BaseAPI(searchEndpoint);
        this.resClientAllCategory = new BaseAPI(getAllCategoryEndpoint);
    }

    // async login(email, password) {
    //     const config = {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }

    //     return await this.create({ email, password });
    // }

    async getTopSellCourses(limit, page){
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

    async getCoursesByCategoryId(categoryId, limit = 10, offset = 1){
        return await this.restClientSearch.post({
            keyword: "",
            opt: {
            category: [
                categoryId
            ]
        },
        limit: limit,
        offset: offset
        })
    }

    async getAllCategory(){
        return await this.resClientAllCategory.get();
    }
    
}

export default new CourseHomeService();