import React, { useState } from "react";

import PhoneInput from "react-phone-input-2";

import "./mobile-input.css";

const MobileInput = (props) => {
   const { label, star, ...rest } = props;
   const [country, setCountry] = useState("in");

   return (
      <div className='mobile-input'>
         <div>
            <label htmlFor={label}>
               {label} {star && <span className='text-red-600'>*</span>}{" "}
            </label>
            <PhoneInput
               country={country}
               placeholder='00000-00000'
               {...rest}
               countryCodeEditable={false}
               inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
               }}
            />
         </div>
      </div>
   );
};

export default MobileInput;
