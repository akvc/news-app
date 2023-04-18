import { auth, storage } from '../../firebaseConfig';
import { getDownloadURL, ref } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { error } from 'console';

interface NavbarProps {
  signedIn: boolean;
  setSignedIn: (value: boolean) => void;
}

export const Navbar = ({ signedIn, setSignedIn }: NavbarProps) => {
  const [profilePhoto, setProfilePhoto] = useState<string>();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setSignedIn(false);
        navigate('/login');
        console.log('Signed out successfully');
      })
      .catch((error) => console.log('Error'));
  };

  if (auth.currentUser) {
    const pathReference = ref(
      storage,
      `/users/${auth.currentUser.uid}/profilePhoto`
    );
    getDownloadURL(pathReference)
      .then((url) => {
        setProfilePhoto(url);
      })
      .catch((error) => {
        console.log('Error');
      });
  }

  return (
    <nav className="navbar bg-dark navbar-expand-lg p-2" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand mx-2 mb-0 h1">PenguinNews</span>
      </div>
      <div className="navbar-nav me-2">
        {signedIn ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/user">
                <img
                  className="rounded-circle"
                  width="40px"
                  height="40px"
                  alt="avatar"
                  src={profilePhoto}
                />
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary mx-3" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
