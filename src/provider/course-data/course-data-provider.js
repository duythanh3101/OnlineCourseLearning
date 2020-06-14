import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CourseDataContext = React.createContext();

export function CourseDataProvider(props) {

    let courseData = [
        {
            id: 1,
            courseName: 'AngularJS: Get Started',
            authorId: 1,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/gatsbyjs-getting-started-v1.png',
            star: 5,
            boughtCount: 1181,
            topicId: 1,
            isFavorited: false,
        },
        {
            id: 2,
            courseName: 'Web Development with ExpressJS',
            authorId: 2,
            level: 'Beginner',
            date: 'Sep 27, 2012',
            duration: '2h 14m',
            image: 'https://pluralsight.imgix.net/course-images/node-js-express-rest-web-services-update-v1.png',
            star: 4.5,
            boughtCount: 660,
            topicId: 1,
            isFavorited: false,
        },
        {
            id: 3,
            courseName: 'Web Development: Executive Briefing',
            authorId: 3,
            level: 'Advanced',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 1234,
            topicId: 1,
            isFavorited: false,
        },
        {
            id: 4,
            courseName: 'Web Development: Executive Briefing',
            authorId: 4,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 434,
            topicId: 1,
            isFavorited: false,
        },
        {
            id: 5,
            courseName: 'Web Development: Executive Briefing',
            authorId: 5,
            level: 'Intermediate',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 123412,
            topicId: 1,
            isFavorited: false,
        },
        {
            id: 6,
            courseName: 'AngularJS: Get Started',
            authorId: 1,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 43,
            topicId: 2,
            isFavorited: false,
        },
        {
            id: 7,
            courseName: 'Web Development with ExpressJS',
            authorId: 2,
            level: 'Beginner',
            date: 'Sep 27, 2012',
            duration: '2h 14m',
            image: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
            star: 4.5,
            boughtCount: 660,
            topicId: 2,
            isFavorited: false,
        },
        {
            id: 8,
            courseName: 'C# Development: Executive Briefing',
            authorId: 3,
            level: 'Advanced',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 3535,
            topicId: 2,
            isFavorited: false,

        },
        {
            id: 9,
            courseName: 'Java Development: Executive Briefing',
            authorId: 4,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 1313,
            topicId: 2,
            isFavorited: false,
        },
        {
            id: 10,
            courseName: 'C# Development: Executive Briefing',
            authorId: 5,
            level: 'Intermediate',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 5353,
            topicId: 2,
            isFavorited: false,
        },
        {
            id: 11,
            courseName: 'AngularJS: Get Started',
            authorId: 1,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
            star: 5,
            boughtCount: 12351,
            topicId: 3,
            isFavorited: false,

        },
        {
            id: 12,
            courseName: 'Python Development with ExpressJS',
            authorId: 2,
            level: 'Beginner',
            date: 'Sep 27, 2012',
            duration: '2h 14m',
            image: 'https://pluralsight.imgix.net/course-images/penetrating-networks-comptia-pentest-v1.png',
            star: 4.5,
            boughtCount: 45435,
            topicId: 3,
            isFavorited: false,
        },
        {
            id: 13,
            courseName: 'Java Development: Executive Briefing',
            authorId: 3,
            level: 'Advanced',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 5645,
            topicId: 3,
            isFavorited: false,

        },
        {
            id: 14,
            courseName: 'Angular Development: Executive Briefing',
            authorId: 4,
            level: 'Beginner',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
            star: 5,
            boughtCount: 443,
            topicId: 3,
            isFavorited: false,
        },
        {
            id: 15,
            courseName: 'React Development: Executive Briefing',
            authorId: 5,
            level: 'Intermediate',
            date: 'Jun 06, 2014',
            duration: '2h 58m',
            image: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            star: 5,
            boughtCount: 34,
            topicId: 3,
            isFavorited: false,
        },
    ]

    const getCoursesFromTopicId = (id) => courseData.filter(x => x.topicId == id);

    const getCourseCountByAuthorId = (authorId) => courseData.filter(x => x.authorId == authorId).length;
    
    const addFavoriteCourse = (id) => {
        let course = courseData.find(x => x.id === id );
        course.isFavorited = true;

        courseData = courseData.map(x => x === id ? course : x);
    }

    const removeFavoriteCourse = (id) => {
        let course = courseData.find(x => x.id === id );
        course.isFavorited = false;

        courseData = courseData.map(x => x === id ? course : x);
    }

    return (
        <CourseDataContext.Provider value={{
            courseData,
            getCoursesFromTopicId,
            getCourseCountByAuthorId,
            addFavoriteCourse,
            removeFavoriteCourse

        }}>
            {props.children}
        </CourseDataContext.Provider>
    )
}

const styles = StyleSheet.create({})
