import { useForm } from 'react-hook-form';
import { auth, storage } from '../../firebaseConfig';
import { uploadBytes, ref } from 'firebase/storage';

interface ProfilePhotoFormData {
  profilePhotoList: FileList;
}

export const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

  const uploadProfilePhoto = ({ profilePhotoList }: ProfilePhotoFormData) => {
    const profilePhoto = profilePhotoList[0];
    if (auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      uploadBytes(storageRef, profilePhoto)
        .then((snapshot) => {
          console.log(snapshot);
          console.log('Profile photo uploaded successfully!');
        })
        .catch((error) => console.log(Error));
    }
  };

  return (
    <div className="profile-photo-form">
      <form onSubmit={handleSubmit(uploadProfilePhoto)}>
        <span>Upload your profile photo</span>
        <input
          type="file"
          {...register('profilePhotoList', { required: true })}
        ></input>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
