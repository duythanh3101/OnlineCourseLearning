import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating';

export default function StarRatingImage(props) {
        
    [starCount, setStarCount] = useState(5);
     
      const onStarRatingPress = (rating) => {
        setStarCount(rating);
      }
    
    return (
        <StarRating
          disabled={true}
          maxStars={5}
          rating={props.starCount}
          fullStarColor={'gold'}
          selectedStar={(rating) => onStarRatingPress(rating)}
          starSize={16}
        />
      );
}

const styles = StyleSheet.create({})
