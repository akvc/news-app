import { useForm } from 'react-hook-form';
import { auth, storage } from '../../firebaseConfig';
import { uploadBytes, ref } from 'firebase/storage';
import { useState } from 'react';

interface ProfilePhotoFormData {
  profilePhotoList: FileList;
}

export const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();
  const [isUploaded, setIsUploaded] = useState(false);

  const uploadProfilePhoto = ({ profilePhotoList }: ProfilePhotoFormData) => {
    const profilePhoto = profilePhotoList[0];
    if (auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      uploadBytes(storageRef, profilePhoto)
        .then((snapshot) => {
          console.log('Profile photo uploaded successfully!');
          setIsUploaded(true);
        })
        .catch((error) => console.log(Error));
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(uploadProfilePhoto)}>
        <span className="fw-bold">Add or change your profile photo</span>
        <div className="d-flex justify-content-center m-3">
          <input
            className="form-control mx-2"
            style={{ width: '15%' }}
            type="file"
            {...register('profilePhotoList', { required: true })}
          ></input>
          <button className="btn btn-primary mx-2" type="submit">
            Upload
          </button>
        </div>
      </form>
      {isUploaded && (
        <div className="my-5">
          <span className="alert alert-success my-5">
            Photo uploaded successfully! Please refresh the page now.
          </span>
        </div>
      )}
    </>
  );
};
