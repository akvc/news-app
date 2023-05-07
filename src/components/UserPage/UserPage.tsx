import { auth } from '../../firebaseConfig';
import { useContext } from 'react';
import { authContext } from '../../helpers/authContext';
import { ProfilePhotoForm } from '../ProfilePhotoForm/ProfilePhotoForm';

export const UserPage = () => {
  const signedIn = useContext(authContext);
  return (
    <>
      {signedIn && auth.currentUser && (
        <div className="my-4">
          <h2>Hello {auth.currentUser.email}!</h2>
          <hr className="m-4"></hr>
          <ProfilePhotoForm />
        </div>
      )}
    </>
  );
};
