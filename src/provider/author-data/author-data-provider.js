import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AuthorDataContext = React.createContext();

export function AuthorDataProvider(props) {

    let authorData = [
        {
            id: 1,
            name: 'Scott Allen',
        },
        {
            id: 2,
            name: 'Hadi Hariri',
        },
        {
            id: 3,
            name: 'Brice Wilson',
        },
        {
            id: 4,
            name: 'Rob Windsor',
        },
        {
            id: 5,
            name: 'Joe Eames',
        },
        {
            id: 6,
            name: 'Jan-Erik Sandberg',
        },
    
        {
            id: 7,
            name: 'Shawn Wildermuth',
        },
      
    ]

    const getAuthorById = (id) => data.find(x => x.id == id);
        
    
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
