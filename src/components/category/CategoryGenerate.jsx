import React, { useState } from 'react'
import AddCategory from '../search/AddCategory';
import ContainerItems from '../cards/ContainerItems';

const CategoryGenerate = () => {

    const [categories, setCategories] = useState([])

    const addCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <div className='container'>
        <AddCategory newCategory={(value) => addCategory(value)}/>

        {categories.map((category) => (
            <ContainerItems key={category} category={category}/>
        ))}
    </div>
  )
}

export default CategoryGenerate