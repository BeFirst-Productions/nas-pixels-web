import React from 'react'

const PillerAnimation = () => {
  return (
    <>
        <div className="hidden md:block absolute inset-y-0 left-0 w-[90px] 
    bg-[linear-gradient(180deg,rgba(112,200,121,0.5)_50%,rgba(112,200,121,0.15)_100%,rgba(112,200,121,0.5)_100%)]
    blur-2xl pointer-events-none">
            </div>

            <div className="hidden md:block absolute inset-y-0 right-0 w-[90px] 
    bg-[linear-gradient(180deg,rgba(112,200,121,0.5)_50%,rgba(112,200,121,0.15)_100%,rgba(112,200,121,0.5)_100%)]
    blur-2xl pointer-events-none">
            </div>
</>
  )
}

export default PillerAnimation