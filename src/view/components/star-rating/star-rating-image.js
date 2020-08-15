import React, { useState } from 'react'
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native'
import StarRating from 'react-native-star-rating';

export default function StarRatingImage(props) {
        
    [starCount, setStarCount] = useState(5);
     
      const onStarRatingPress = (rating) => {
        setStarCount(rating);
      }
    
    return (
        <StarRating
          disabled={false}
          maxStars={5}
          rating={props.starCount}
          fullStarColor={'gold'}
          selectedStar={props.onPress}
          starSize={props.size ? props.size : 16}
        />
      );
}

const styles = StyleSheet.create({})
