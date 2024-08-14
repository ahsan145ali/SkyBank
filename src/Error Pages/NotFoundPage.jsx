import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-text-center tw-bg-gradient-to-br tw-from-white tw-to-[#0072C9] tw-text-gray-800">
      <h1 className="tw-text-6xl tw-font-bold">
        404
      </h1>
      <h6 className="tw-mt-4 tw-text-2xl">
        Page Not Found
      </h6>
      <p className="tw-mt-2 tw-text-lg">
        We're sorry, but the page you're looking for doesn't exist. Please check the URL or go back to the homepage.
      </p>
      <a 
        href="/" 
        className="tw-mt-6 tw-bg-gradient-to-r tw-from-[#0072C9] tw-to-[#EC008C] tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-shadow-lg tw-transform hover:tw-scale-105 tw-transition-transform"
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFoundPage;
