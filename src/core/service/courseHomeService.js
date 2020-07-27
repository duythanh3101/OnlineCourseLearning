import { topSellEndpoint, topNewEndpoint,
     topRateEndpoint, searchEndpoint,
     getCourseDetailEndpoint, getAllCategoryEndpoint,
      getCourseInfoEndpoint, likeCourseEndpoint, 
      getFreeCourseEndpoint, getFavoriteCourseEndpoint } from "../apis/endpoint";
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
        this.resClientLikeCourse= new BaseAPI(likeCourseEndpoint);
        this.resClientFreeCourse= new BaseAPI(getFreeCourseEndpoint);
        this.resClientFavoriteCourse= new BaseAPI(getFavoriteCourseEndpoint);
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
        //console.log(`${getCourseDetailEndpoint}/${id}/${null}`)

        return await Axios.get(`${getCourseDetailEndpoint}/${id}/${null}`);
    }
  
    
    async likeCourse(id, token){
        console.log('ddd: ', id, likeCourseEndpoint)
        
        return await this.resClientLikeCourse.post({
            courseId: id
        }, token);
    }

    async getFreeCourse(id, token){
        console.log('eeee: ', id, getFreeCourseEndpoint)

        return await this.resClientFreeCourse.post({
            courseId: id
        }, token);
    }

    async getFavoriteCourses(token){
        return await this.resClientFavoriteCourse.getByToken(token);
    }
}

export default new CourseHomeService();