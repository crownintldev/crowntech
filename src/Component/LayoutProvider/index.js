"use client"
const LayoutProvider = ({ children , }) => {

    return (
      <>
     <div className={` w-full bg-primary-light text-primary-white`}>
        {children}
        </div>
      </>    
    )
}

export default LayoutProvider