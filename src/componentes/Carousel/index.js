import {FlatList, Image, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';

export function Carousel({data, scrollTimeout}) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef();

  function changeCarouselPosition() {
    if (carouselIndex < data.length - 1) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  }

  useEffect(() => {
    carouselRef.current.scrollToIndex({index: carouselIndex});

    const interval = setInterval(() => changeCarouselPosition(), scrollTimeout);
    return () => clearInterval(interval);
  }, [carouselIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Image
            source={item.imagem}
            style={[styles.image, index == data.length - 1 ? {marginRight: 200} : null]}
            resizeMode="contain"
          />
        )}
        ref={carouselRef}
      />
    </View>
  );
}
