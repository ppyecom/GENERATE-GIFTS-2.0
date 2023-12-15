import React from 'react'
import './ItemStyle.css'

const ItemsGift = ({title, url, user_create, id}) => {
  return (
    <div className="card">
        <div className="card-img"><img src={url} alt={title}/></div>
          <div className="card-info">
            <div className="card-text">
              <p className="text-title">{user_create}</p>
              <p className="text-subtitle">{title}</p>
            </div>
          </div>
    </div>
  )
}

export default ItemsGift