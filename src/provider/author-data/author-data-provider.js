import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AuthorDataContext = React.createContext();

export function AuthorDataProvider(props) {

    let authorData = [
        {
            id: 1,
            name: 'Scott Allen',
            image: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg?w=200',
            description: 'Scott Allen is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
        {
            id: 2,
            name: 'Hadi Hariri',
            image: 'https://pluralsight.imgix.net/author/lg/hadi-hariri-v1.jpg?w=200',
            description: 'Hadi Hariri is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
        {
            id: 3,
            name: 'Brice Wilson',
            image: 'https://pluralsight.imgix.net/author/lg/brice-wilson-v2.jpg?w=200',
            description: 'Brice Wilson is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
        {
            id: 4,
            name: 'Rob Windsor',
            image: 'https://pluralsight.imgix.net/author/lg/rob-windsor-v1.jpg?w=200',
            description: 'Rob Windsor is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
        {
            id: 5,
            name: 'Joe Eames',
            image: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
            description: 'Joe Eames is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
        {
            id: 6,
            name: 'Jan-Erik Sandberg',
            image: 'https://pluralsight.imgix.net/author/lg/janerik-sandberg-v1.jpg?w=200',
            description: 'Jan-Erik Sandberg is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
    
        {
            id: 7,
            name: 'Shawn Wildermuth',
            image: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
            description: 'Shawn Wildermuth is a well-known and respected educator and lecturer in the fields of information security and audit. Kevin uses his more than 30 years of practical experience as a network technician, computer programmer, and information systems auditor to deliver outstanding presentations that make each topic interesting, relevant, and useful. Often described by students as "The best instructor I have ever had," Kevin has the ability to provide quality instruction that engages the audience and provides guidance on how to implement a successful program when they return to their workplace.'
        },
      
    ]

    const getAuthorById = (id) => authorData.find(x => x.id == id);
        
    
    return (
        <AuthorDataContext.Provider value={{
            authorData,
            getAuthorById
        }}>
            {props.children}
        </AuthorDataContext.Provider>
    )
}

const styles = StyleSheet.create({})
