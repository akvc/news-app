import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD_we_GVWSxGjq4uyJC0Kd1RL1l5ik9eiY',
  authDomain: 'news-app-454ae.firebaseapp.com',
  projectId: 'news-app-454ae',
  storageBucket: 'news-app-454ae.appspot.com',
  messagingSenderId: '570290135779',
  appId: '1:570290135779:web:70be43952629d754215bd6',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
