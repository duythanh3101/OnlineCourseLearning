import { topSellEndpoint, topNewEndpoint,
     topRateEndpoint, searchEndpoint,
     getCourseDetailEndpoint, getAllCategoryEndpoint, getCourseInfoEndpoint } from "../apis/endpoint";
import BaseAPI from "../apis/baseAPI";
import Axios from "axios";

class CourseHomeService {

    constructor() {
        this.restClientSell = new BaseAPI(topSellEndpoint);
        this.restClientNew = new BaseAPI(topNewEndpoint);
        this.restClientRate = new BaseAPI(topRateEndpoint);
        this.restClientSearch = new BaseAPI(searchEndpoint);
        this.resClientAllCategory = new BaseAPI(getAllCategoryEndpoint);
        this.resClientCourseDetail = new BaseAPI(getCourseDetailEndpoint);
        this.resClientCourseInfo= new BaseAPI(getCourseInfoEndpoint);
    }

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

    async getCourseDetail(id){

        const config = {
            'Content-type': 'application/json'
        }
        console.log(`${getCourseDetailEndpoint}/${id}/${null}`)

        return await Axios.get(`${getCourseDetailEndpoint}/${id}/${null}`);
        //return await Axios.get('https://api.itedu.me/course/get-course-detail/9f3d46fa-61d2-4d4c-a392-a8e79ca7f335/null', config);

        // return await this.resClientCourseDetail.get({
        //     id: id,
        //     userId: null
        // });
    }
    
}

export default new CourseHomeService();