import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-lg text-gray-600 mb-8">Something went wrong.</p>
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold text-white transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
