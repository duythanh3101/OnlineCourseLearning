export const rootEndpoint = "https://api.itedu.me"; 
export const loginEndpoint = rootEndpoint + "/user/login";
export const registerEndpoint = rootEndpoint + "/user/register";
export const totalNumberEndpoint = rootEndpoint + "​/course​/total-number";
export const topSellEndpoint = rootEndpoint + "​/course/top-sell";
export const topNewEndpoint = rootEndpoint + "​/course/top-new";
export const topRateEndpoint = rootEndpoint + "​/course​/top-rate";
export const getCourseInfoEndpoint = rootEndpoint + "/course/get-course-info";
export const getCourseDetailEndpoint = rootEndpoint + "/course/get-course-detail";
export const detailWithLessonEndpoint = rootEndpoint + "/course/detail-with-lesson";

export const getAllCategoryEndpoint = rootEndpoint + "/category/all";
export const getAllInstructorEndpoint = rootEndpoint + "/instructor";
export const getInstructorDetailEndpoint = rootEndpoint + "/instructor/detail";


export const getlikeCourseStatusEndpoint = rootEndpoint + "/user/get-course-like-status";
export const getFavoriteCourseEndpoint = rootEndpoint + "/user/get-favorite-courses";
export const getFreeCourseEndpoint = rootEndpoint + "/payment/get-free-courses";
export const payCourseEndpoint = rootEndpoint + "/payment/get-course-info";

export const getDeatailWithLessonEndpoint = rootEndpoint + "/course/detail-with-lesson";
export const checkOwnCourse = rootEndpoint + "/user/check-own-course";

// lesson

export const getLessonURL = rootEndpoint + "/lesson/video";
export const updateLessonStatus = rootEndpoint + "/lesson/update-status";
export const getDocumentResource = rootEndpoint + "/resource/get-url";
export const updateCurrentTimeLearnVideoEndpoint = rootEndpoint + "/lesson/update-current-time-learn-video";
export const getCurrentTimeLearnVideoEndpoint = rootEndpoint + "/course/last-watched-lesson";

// user
export const getUserInfoEndpoint = rootEndpoint + "/user/me";
export const updateProfileEndpoint = rootEndpoint + "/user/update-profile";
export const likeCourseEndpoint = rootEndpoint + "/user/like-course";
export const sendEmailForgotPassword = rootEndpoint + "/user/forget-pass/send-email";
export const sendActiveEmail = rootEndpoint + "/user/send-activate-email";
export const changePasswordEndpoint = rootEndpoint + "/user/change-password";

// course
export const getRecommendCoursesEndpoint = rootEndpoint + "​/user/recommend-course";
export const getProcessCoursesEndpoint = rootEndpoint + "​/user/get-process-courses";
export const ratingCourseEndpoint = rootEndpoint + "​/course/rating-course";
export const getRatingCourseEndpoint = rootEndpoint + "/course/get-rating";

// search
export const searchEndpoint = rootEndpoint + "/course/search";
export const searchV2Endpoint = rootEndpoint + "/course/searchV2";
export const getSearchHistoryEndpoint = rootEndpoint + "/course/search-history";
export const deleteSearchHistoryEndpoint = rootEndpoint + "/course/delete-search-history";


