import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const VideoDataContext = React.createContext();

export function VideoDataProvider(props) {

    let videoContentData = [
        {
            id: 1,
            courseId: 1,
            image: 'https://pluralsight.imgix.net/course-images/gatsbyjs-getting-started-v1.png?w=200',
            transcriptions: 'Hello, and welcome. My name is Kevin Henry, an information security auditor and educator, author of several certification courses in information systems audit here at Pluralsight. Welcome to this course on conducting audits of IT management. I look forward to sharing knowledge and experiences with you. This course will help you gain an essential understanding of how to review and assess the IT management function within an organization. Auditing provides valuable insight into the management of the IT function and its role in supporting business goals. This course addresses topics that are critical for management today, including resource management, supply chain, and performance and quality. I hope you ll join me on this journey to learn about auditing IT management, here at Pluralsight.',
            content: [
                {
                    id: 1,
                    title: 'Course Overview',
                    duration: '1m 1s'    
                },
                {
                    id: 2,
                    title: 'IT Management',
                    duration: '1m 1s'    
                },
                {
                    id: 3,
                    title: 'Human Resources Management: Part One',
                    duration: '1m 1s'    
                },
                {
                    id: 4,
                    title: 'Human Resources Management: Part Two',
                    duration: '1m 1s'    
                },
                {
                    id: 5,
                    title: 'Change Management',
                    duration: '1m 1s'    
                },
                {
                    id: 6,
                    title: 'IT Security Audit',
                    duration: '1m 1s'    
                },
                {
                    id: 7,
                    title: 'Selecting Vendors',
                    duration: '1m 1s'    
                },
                {
                    id: 8,
                    title: 'Assessment of the IT Supply Chain',
                    duration: '1m 1s'    
                },
                {
                    id: 9,
                    title: 'Managing Outsourcing',
                    duration: '1m 1s'    
                },
            ]

        },
      
       
      
    ]

    const getVideoContentById = (id) => videoContentData.find(x => x.id === 1);
        
    
    return (
        <VideoDataContext.Provider value={{
            videoContentData,
            getVideoContentById,
            
        }}>
            {props.children}
        </VideoDataContext.Provider>
    )
}

const styles = StyleSheet.create({})
