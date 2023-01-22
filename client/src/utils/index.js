import FileSaver from 'file-saver';
import jwtDecode from 'jwt-decode';

import { surpriseMePrompts } from '../constants';

export async function createOrGetUser(response, addUser) {
  const decodedToken = jwtDecode(response.credential);
  const { name, picture, sub, email } = decodedToken;
  try {
    // check if user exists
    const userResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/users/${sub}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const userData = await userResponse.json();
    if (userData.success) {
      addUser(userData.data);
      return userData;
    }

    const user = {
      user_id: sub,
      email,
      full_name: name,
      imageUrl: picture,
    };
    console.log('new user');
    const newUserResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const newUserData = await newUserResponse.json();
    addUser(userData.data);
    return newUserData;
  } catch (err) {
    console.log('Error Getting Or Creating User', err);
    alert(err);
  }
}

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (prompt === randomPrompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  const response = await fetch(photo.replace('http:', 'https:'));
  const blob = await response.blob();
  FileSaver.saveAs(blob, `image-${_id}.jpg`);
}
