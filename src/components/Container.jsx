import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container bg-indigo-800 w-full xl:w-1/2 min-h-[85vh] mx-auto my-5 rounded-xl p-5">
      {children}
    </div>
  )
}

export default Container
