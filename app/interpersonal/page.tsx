'use client';

import { useCompletion } from 'ai/react';

const DATA = {
  // good
};

const InterpersonalPage = () => {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div className="w-full stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 dark:text-black"
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
      </form>
      <div className="whitespace-pre-wrap my-6">{completion}</div>
    </div>
  );
};

export default InterpersonalPage;
