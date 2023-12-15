import React, { useEffect, useState } from 'react'
import getGifts2 from '../helpers/getGifts2';

const useFetchGift = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImage = await getGifts2(category);
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect(() => {   
      getImages();
    }, [])
    
  return {
    images,
    isLoading
  }
}

export default useFetchGift