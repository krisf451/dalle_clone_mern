import FileSaver from 'file-saver';
import jwtDecode from 'jwt-decode';

import { surpriseMePrompts } from '../constants';

export async function createOrGetUser(response) {
  const decodedToken = jwtDecode(response.credential);
  console.log(decodedToken);
  const { name, picture, sub } = decodedToken;
  const user = {
    user_id: sub,
    full_name: name,
    image: picture,
  };

  // get user
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
