import React, { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";

export const CopyButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "kavyaagar0@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      alert("Copy failed");
    }
  };

  return (
    <div className="inline-flex items-center gap-x-3">
      <div className="text-sm font-medium text-amber-100">{email}</div>
      <button
        type="button"
        onClick={handleCopy}
        className="p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border-gray-200 bg-amber-400 hover:bg-amber-800"
        aria-label="Copy email"
      >
          <FaRegCopy color="white" />
      </button>
    </div>
  );
};
