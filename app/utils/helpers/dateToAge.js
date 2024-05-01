
export const dateToAge = (dateString) => {
   const [day, month, year] = dateString.split('/');
   const inputDate = new Date(`${year}-${month}-${day}`);
   const currentDate = new Date();
   let age = currentDate.getFullYear() - inputDate.getFullYear();

   if (
      currentDate.getMonth() < inputDate.getMonth() ||
      (currentDate.getMonth() === inputDate.getMonth() &&
         currentDate.getDate() < inputDate.getDate())
   ) {
      age--;
   }

   return age

}

