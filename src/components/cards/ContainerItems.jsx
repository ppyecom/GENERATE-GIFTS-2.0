import React, { useState } from 'react'
import useFetchGift from '../../hooks/useFetchGift'
import ItemsGift from './ItemsGift';


const ContainerItems = ({category}) => {

    const {images, isLoading} = useFetchGift(category);

  return (
    <div className="container-cards">
        <h3 className='title-container'>{category}</h3>
        {isLoading && (<h2>Cargando...</h2>)}
        <div className="card-items">
            {images.map((resp)=>(
                <ItemsGift key={resp.id} {...resp}></ItemsGift>
            ))}
        </div>
    </div>
  )
}

export default ContainerItems