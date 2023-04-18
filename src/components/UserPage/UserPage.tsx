import { useForm } from 'react-hook-form';
import { auth, storage } from '../../firebaseConfig';
import { useState } from 'react';
import { ProfilePhotoForm } from '../ProfilePhotoForm/ProfilePhotoForm';

interface UserPageProps {
  signedIn: boolean;
}

export const UserPage = ({ signedIn }: UserPageProps) => {
  return (
    <>
      {signedIn && auth.currentUser && (
        <div className="my-4">
          <h2>Hello {auth.currentUser.email}!</h2>
          <ProfilePhotoForm />
        </div>
      )}
    </>
  );
};
