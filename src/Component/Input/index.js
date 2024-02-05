import React from 'react';


export const InputForm = ({type="text" ,placeholder ,InputIcon ,name , value ,onChange}) => {
  return (
    <div className='pb-3'>
      <div className="flex items-center rounded-lg  border px-3 hover:border-primary-gray200 duration-300 transition focus:outline-primary-gray200">
        <input
          className="appearance-none bg-transparent  border-none w-full mr-3 py-3 px-2 leading-tight focus:outline-none"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          
        />
        {InputIcon}
      </div>
    </div>
  );
};

export const Commentarea = ({placeholder='Comment here ......',name , value ,onChange}) => {
    return (
      <>
        <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="resize-y rounded-lg bg-transparent p-2 border w-full h-36  hover:border-primary-gray200 duration-300 transition focus:outline-none" ></textarea>
      </>
    );
  };

  
