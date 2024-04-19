'use client'
import clsx from "clsx";
import * as React from "react";

const Input = React.forwardRef(
   ({ className, label, type, ...props }, ref) => {
      return (
         <div className="w-full">
            <label for="email" className=" inline-block text-sm text-gray-800 sm:text-base">{label}</label>
            <input
               type={type}
               className={clsx(
                  "flex h-10 w-full rounded-md border border-input bg-background px-16 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
                  className
               )}
               ref={ref}
               {...props}
            />
         </div>
      );
   }
);
Input.displayName = "Input";

export { Input };
