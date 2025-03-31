import LifeStyle from '../gallery/lifestyle'
import React from 'react'

const Lifestyle = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-8 pt-16 gap-4">
        {LifeStyle.map((item, index) => (
            <div key={index}>
                <img className="h-96 object-cover " src={item.img} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Lifestyle