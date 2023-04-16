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
        <div>
          <span>Hello, {auth.currentUser.email}!</span>
          <ProfilePhotoForm />
        </div>
      )}
    </>
  );
};
