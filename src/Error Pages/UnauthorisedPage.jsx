import React from 'react';
import {Link } from 'react-router-dom';

const UnauthorisedPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-text-center tw-bg-gradient-to-br tw-from-white tw-to-[#0072C9] tw-text-gray-800">
      <h1 className="tw-text-6xl tw-font-bold">
        401
      </h1>
      <h6 className="tw-mt-4 tw-text-2xl">
        Unauthorised Access
      </h6>
      <p className="tw-mt-2 tw-text-lg">
        Sorry, you don't have permission to view this page. Please login or contact support if you think this is a mistake.
      </p>
      <div className="tw-mt-6 tw-space-x-4">
        <Link 
          to="/" 
          className="tw-bg-gradient-to-r tw-from-[#0072C9] tw-to-[#EC008C] tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-shadow-lg tw-transform hover:tw-scale-105 tw-transition-transform"
        >
          Login
        </Link>
        <Link 
          to="/support" 
          className="tw-bg-white tw-text-[#0072C9] tw-border tw-border-[#0072C9] tw-px-6 tw-py-3 tw-rounded-full tw-shadow-lg tw-transform hover:tw-scale-105 tw-transition-transform"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

export default UnauthorisedPage;
