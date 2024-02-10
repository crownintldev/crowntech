"use client"
const LayoutProvider = ({ children , }) => {

    return (
      <>
     <div className={` w-full bg-primary-blue500 text-primary-white dark:bg-primary-black dark:text-primary-black`}>
        {children}
        </div>
      </>    
    )
}

export default LayoutProvider