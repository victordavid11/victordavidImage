import React from 'react'
import FesTive from '../gallery/festive'

const Festive = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-8 pt-16 gap-4">
        {FesTive.map((item, index) => (
            <div key={index}>
                <img className="h-96 object-cover " src={item.img} alt="" />
            </div>
        ))}    
        </div>
    </div>
  )
}

export default Festive