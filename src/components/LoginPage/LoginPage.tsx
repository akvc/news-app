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
        navigate('/user');
      })
      .catch((error) => {
        console.log('Error');
      });
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit(loginUser)}>
        <h2 className="mb-4">Sign In</h2>
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
        <div className="mt-4 mb-3">
          <button className="btn btn-primary fw-bold" type="submit">
            Log In
          </button>
        </div>
        <div className="small fst-italic">
          <span>Not a member yet?</span>
          <Link className="text-decoration-none mx-1" to="/register">
            Sign up!
          </Link>
        </div>
      </form>
    </div>
  );
};
