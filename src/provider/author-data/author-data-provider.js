import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AuthorDataContext = React.createContext();

export function AuthorDataProvider(props) {

    let authorData = [
        {
            id: 1,
            name: 'Scott Allen',
            image: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg?w=200'
        },
        {
            id: 2,
            name: 'Hadi Hariri',
            image: 'https://pluralsight.imgix.net/author/lg/hadi-hariri-v1.jpg?w=200'
        },
        {
            id: 3,
            name: 'Brice Wilson',
            image: 'https://pluralsight.imgix.net/author/lg/brice-wilson-v2.jpg?w=200'
        },
        {
            id: 4,
            name: 'Rob Windsor',
            image: 'https://pluralsight.imgix.net/author/lg/rob-windsor-v1.jpg?w=200'
        },
        {
            id: 5,
            name: 'Joe Eames',
            image: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200'
        },
        {
            id: 6,
            name: 'Jan-Erik Sandberg',
            image: 'https://pluralsight.imgix.net/author/lg/janerik-sandberg-v1.jpg?w=200'
        },
    
        {
            id: 7,
            name: 'Shawn Wildermuth',
            image: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200'
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
