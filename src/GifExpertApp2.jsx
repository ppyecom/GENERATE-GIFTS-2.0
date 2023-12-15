import React, { useEffect } from 'react'
import './GifExpertAStyle.css'
import CategoryGenerate from './components/category/CategoryGenerate'

const GifExpertApp2 = () => {

  return (
    <div className='container'>
        <h1 className='title-container'>Gifts Expert 2.0</h1>
        <CategoryGenerate></CategoryGenerate>
    </div>
  )
}

export default GifExpertApp2