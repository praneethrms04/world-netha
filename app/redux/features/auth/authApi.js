


import { auth } from '@/app/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { resetError, setError, setLoading } from './authSlice';
import { getDatabase, push, ref, set } from 'firebase/database';

export const signupUser = (formData) => async (dispatch) => {
   dispatch(setLoading(true));
   dispatch(resetError());

   try {
      const db = getDatabase(auth);
      const newUserRef = push(ref(db, 'users'));
      await set(newUserRef, formData);

      const userCredentials = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredentials.user;
      console.log(user)

      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch(setLoading(false));
      alert('Signup successful');

   } catch (error) {
      dispatch(setError(error.message));
     
   }
};
