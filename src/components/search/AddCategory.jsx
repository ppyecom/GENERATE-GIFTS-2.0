import React, { useState } from 'react'
import './AddCategory.css'

const AddCategory = ({newCategory}) => {

  const [input, setInput] = useState('');

  const inputChange = ({target}) => {
    setInput(target.value);
  }

  const onSubmitRs = (event) => {
    event.preventDefault();
    if(input.trim().length <= 1) return;
    newCategory(input.trim());
    setInput('');
  }

  return (
    <form className='form-search' onSubmit={onSubmitRs}>
        <input type="text" placeholder='Generar Gift ...' className='input-add-category' value={input} onChange={inputChange}/>
        <button type='submit' className="button-confirm">Let`s go →</button>
    </form>
  )
}

export default AddCategory
