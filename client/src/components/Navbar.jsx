import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import { createOrGetUser } from '../utils';
import { logo } from '../assets';

const Navbar = () => {
  const [user, setUser] = useState(null);
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      {/* Google Login */}
      <div>
        {user ? (
          <div>Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => createOrGetUser(res)}
            onError={(err) => console.log(err)}
            useOneTap
          />
        )}
      </div>
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
        Create
      </Link>
    </header>
  );
};

export default Navbar;
