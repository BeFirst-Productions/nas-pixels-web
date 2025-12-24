import React from 'react'

const Herosection = ({title,description}) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold  mb-4">
         {title}
        </h1>
        <p className="text-lg md:text-xl ">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Herosection
