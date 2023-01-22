import { Link } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';

import { GoogleLogin, googleLogout } from '@react-oauth/google';

import { createOrGetUser } from '../utils';
import useAuthStore from '../store/auth';
import { logo } from '../assets';

const Navbar = () => {
  const { currentUser, addUser, removeUser } = useAuthStore();
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      {currentUser ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => {
              googleLogout();
              removeUser();
            }}
            >
              <BiLogOutCircle className="w-6 h-6 text-red-500" />
            </button>
            <img src={currentUser?.imageUrl} alt="user" className="object-contain h-8 w-8 rounded-full" />
          </div>

          <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            Create
          </Link>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(res) => createOrGetUser(res, addUser)}
          onError={(err) => console.log(err)}
          useOneTap
        />
      )}
    </header>
  );
};

export default Navbar;
