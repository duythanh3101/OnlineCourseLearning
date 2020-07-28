import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PathDataContext = React.createContext();

export function PathDataProvider(props) {

    let topicData = [
        {
            id: 1,
            name: 'Software development',
        },
        {
            id: 2,
            name: 'IT operations',
        },
        {
            id: 3,
            name: 'Data professional',
        },
    ]

    let pathData =[
        {
            id: 1,
            pathName: 'AWS Application Development',
            image: 'https://pluralsight2.imgix.net/paths/images/android-6581101a28.png?w=140',
            topicId: 1,
            courses: 12,
            description: 'Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET.'
        },
        {
            id: 2,
            pathName: '.NET Base Class Library',
            image: 'https://pluralsight2.imgix.net/paths/images/csharp-e7b8fcd4ce.png?w=140',
            topicId: 1,
            courses: 22,
            description: 'Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET.'
        },
        {
            id: 3,
            pathName: '.NET Base Class Library',
            image: 'https://pluralsight2.imgix.net/paths/images/adobeanalytics-3c597d8394.png?w=140',
            topicId: 1,
            courses: 10,
            description: 'Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET.'
        },
        {
            id: 4,
            pathName: '.NET Base Class Library',
            image: 'https://pluralsight2.imgix.net/paths/images/google-cloud-5a9656af80.png?w=140',
            topicId: 2,
            courses: 15,
            description: 'Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET.'
        },
        {
            id: 5,
            pathName: '.NET Base Class Library',
            image: 'https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=140',
            topicId: 3,
            courses: 10,
            description: 'Every program has to consume and save data and the course in this section will teach you the three main ways to do this in .NET.'
        },
    ]

    const getPathById = (id) => data.find(x => x.id == id);
        
    
    return (
        <PathDataContext.Provider value={{
            topicData,
            pathData,
            getPathById
        }}>
            {props.children}
        </PathDataContext.Provider>
    )
}

const styles = StyleSheet.create({})
