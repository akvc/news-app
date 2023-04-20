import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

interface RegisterFormData {
  email: 'string';
  password: 'string';
  password2: 'string';
}

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();
  const navigate = useNavigate();

  const registerUser = (data: RegisterFormData) => {
    if (data.password === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          console.log('User registered', userCredentials);
          navigate('/user');
        })
        .catch((error) => {
          console.log('Error');
        });
    } else {
      alert('Passwords do not match');
    }
  };
  return (
    <div className="d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit(registerUser)}>
        <h2 className="mb-4">Sign Up</h2>
        <hr className="mb-4"></hr>
        <div className="mb-3">
          <label className="form-label visually-hidden">Email:</label>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label visually-hidden">Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label visually-hidden">Repeat Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Repeat password"
            {...register('password2', { required: true })}
          />
        </div>
        <div className="mt-4 mb-3">
          <button className="btn btn-primary fw-bold" type="submit">
            Register
          </button>
        </div>
        <div className="small fst-italic">
          <span>Already a member?</span>
          <Link className="text-decoration-none mx-1" to="/login">
            Log In!
          </Link>
        </div>
      </form>
    </div>
  );
};
