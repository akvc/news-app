import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

interface RegisterFormData {
  email: 'string';
  password: 'string';
  password2: 'string';
}

export const RegisterPage = () => {
  //const { register, handleSubmit } = useForm<RegisterFormData>;

  const registerUser = (data: RegisterFormData) => {
    if (data.password === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          console.log('User registered', userCredentials);
        })
        .catch((error) => {
          console.log('Error');
        });
    } else {
      alert('Passwords do not match');
    }
  };
  return <div>Register</div>;
};
