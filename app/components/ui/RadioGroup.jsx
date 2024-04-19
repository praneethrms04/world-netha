import React from 'react';

function RadioButton({ id, value, checked, label, onChange }) {
   return (
      <div className='flex gap-2  items-center border px-2 py-1.5 border-slate-400 rounded-full'>
         <input
            type="radio"
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
            className="mr-2"
         />
         <label htmlFor={id} className="text-gray-700 ">{label}</label>
         <br />
      </div>
   );
}

const RadioGroup = ({ options, selectedOption, onChange }) => {

   return (
      <div className="flex flex-row items-center gap-3  ">
         {options.map(option => (
            <>
               <RadioButton
                  key={option.value}
                  id={option.value}
                  value={option.value}
                  label={option.label}
                  checked={selectedOption === option.value}
                  onChange={onChange}
               />
            </>
         ))}
      </div>
   );
}

export default RadioGroup


