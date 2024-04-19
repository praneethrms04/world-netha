"use client"
import * as React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Dropdown = ({ options, selectedOption, setSelectedOption, className, name }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative flex flex-col items-center  rounded-lg  ${className} `}>
      <button onClick={() => setIsOpen((prev) => !prev)} className='py-2 w-full flex items-center justify-between rounded-lg tracking-wider border border-slate-400  active:border-white duration-300 active:text-white'>
        <span className='max-w-[200px] truncate ms-2'>
          {selectedOption ? selectedOption : name}
        </span>
        <span className='me-2'>
          {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </span>
      </button>
      {isOpen && <div className='bg-white text-sm  absolute top-12 flex flex-col w-full pb-2 overflow-auto  max-h-[200px] '>
        {
          options.map((item, i) => (
            <div key={i} className='hover:bg-indigo-200 px-2 cursor-pointer border-l-transparent' onClick={() => handleOptionClick(item.label)}> {item.label} </div>
          ))
        }
      </div>}
    </div>
  )
}

export default Dropdown;
