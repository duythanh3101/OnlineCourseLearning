import {
    topSellEndpoint, topNewEndpoint,
    topRateEndpoint, searchEndpoint,
    getCourseDetailEndpoint, getAllCategoryEndpoint,
    getCourseInfoEndpoint, likeCourseEndpoint,
    getFreeCourseEndpoint, getFavoriteCourseEndpoint,
    payCourseEndpoint, getProcessCoursesEndpoint,
    getDeatailWithLessonEndpoint,
    getlikeCourseStatusEndpoint,
    checkOwnCourse,
    getLessonURL,
    getDocumentResource
} from "../apis/endpoint";
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
        this.resClientCourseInfo = new BaseAPI(getCourseInfoEndpoint);
        this.resClientLikeCourse = new BaseAPI(likeCourseEndpoint);
        this.resClientFreeCourse = new BaseAPI(getFreeCourseEndpoint);
        this.resClientFavoriteCourse = new BaseAPI(getFavoriteCourseEndpoint);
        this.resClientMyCourse = new BaseAPI(getProcessCoursesEndpoint);
        this.resClientDetailWithLesson = new BaseAPI(getDeatailWithLessonEndpoint);
    }

    async getTopSellCourses(limit, page) {
        return await this.restClientSell.post({
            limit: limit,
            page: page
        })
    }

    async getTopNewCourses(limit, page) {
        return await this.restClientNew.post({
            limit: limit,
            page: page
        })
    }

    async getTopRateCourses(limit, page) {
        return await this.restClientRate.post({
            limit: limit,
            page: page
        })
    }

    async getCoursesByCategoryId(categoryId, limit = 10, offset = 1) {
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

    async getAllCategory() {
        return await this.resClientAllCategory.get();
    }

    async getCourseDetail(id) {
        const config = {
            'Content-type': 'application/json'
        }
        //console.log(`${getCourseDetailEndpoint}/${id}/${null}`)

        return await Axios.get(`${getCourseDetailEndpoint}/${id}/${null}`);
    }

    async getCourseDetailWithLesson(id, token) {
        //console.log('sad' + `${getDeatailWithLessonEndpoint}/${id}`)
        //console.log('sad')

        //return await this.resClientDetailWithLesson.get(id, token);
        return await Axios.get(`${getDeatailWithLessonEndpoint}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }


    async likeCourse(id, token) {
        //console.log('ddd: ', id, likeCourseEndpoint)

        return await this.resClientLikeCourse.post({
            courseId: id
        }, token);
    }

    async getLikeCourseStatus(id, token) {
        console.log('ddd: ', id, getlikeCourseStatusEndpoint)

        return await Axios.get(`${getlikeCourseStatusEndpoint}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async isOwnCourse(id, token) {

        return await Axios.get(`${checkOwnCourse}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async getFreeCourse(id, token) {
        console.log(id, getFreeCourseEndpoint, token)

        // return await this.resClientFreeCourse.post({
        //     courseId: id
        // });

        return await Axios.post('https://api.itedu.me/payment/get-free-courses',
            {
                courseId: '9f3d46fa-61d2-4d4c-a392-a8e79ca7f335'
            }
            ,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                }
            }
        );
    }

    async getFavoriteCourses(token) {
        return await this.resClientFavoriteCourse.getByToken(token);
    }

    async getProcessCourses(token) {
        return await this.resClientMyCourse.getByToken(token);
    }

    async search(keyword, limit = 10, offset = 1) {
        return await this.restClientSearch.post({
            keyword: keyword,

            limit: limit,
            offset: offset
        })
    }

    //Lesson
    async getLessonURL(courseId, lessonId, token) {

        return await Axios.get(`${getLessonURL}/${courseId}/${lessonId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async getDocumentResource(courseId, lessonId, resourceId, token) {

        return await Axios.get(`${getDocumentResource}/${courseId}/${lessonId}/${resourceId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

export default new CourseHomeService();