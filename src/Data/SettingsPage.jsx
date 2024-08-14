import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';

import { useUserContext } from '../Context/UserContext'


const SettingsPage = () => {
  const { storeUserDetails } = useUserContext();
const { userDetails } = useUserContext();

const [isOpen, setIsOpen] = useState(false);


const LogoutUser = () => {
  storeUserDetails(null)
  setIsOpen(false)
}



  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-text-center tw-bg-gradient-to-br tw-from-white tw-to-[#0072C9] tw-text-gray-800">
      <h1 className="tw-text-6xl tw-font-bold">
        Settings
      </h1>
      <Link to="/" onClick={LogoutUser}         className="tw-mt-6 tw-bg-gradient-to-r tw-from-[#0072C9] tw-to-[#EC008C] tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-shadow-lg tw-transform hover:tw-scale-105 tw-transition-transform"
      >Logout</Link>
    
    
    </div>
  );
}

export default SettingsPage;
