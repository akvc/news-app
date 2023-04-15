import { auth } from '../../firebaseConfig';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: 'string';
  password: 'string';
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const loginUser = (data: LoginFormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        console.log('User signed in', userCredentials);
      })
      .catch((error) => {
        console.log('Error');
      });
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit(loginUser)}>
        <h2 className="mb-5">Login</h2>
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
        <div className="my-3">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
        <div>
          <span>Not a member yet?</span>
          <Link className="mx-1" to="/register">
            Sign up!
          </Link>
        </div>
      </form>
    </div>
  );
};
