"use client";

import { useState } from "react";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [files, setFiles] = useState([
    { id: 1, name: "Shreya.txt", size: "10MB", type: "txt", date: "2099" },
    { id: 2, name: "Microsot.word", size: "20MB", type: "word", date: "1999" },
    { id: 3, name: "CDC_unfair.pdf", size: "90MB", type: "pdf", date: "991BC" }
  ]);

  const handleDelete = (fileId) => {
    console.log("Delete file ID:", fileId);
    // Add your delete logic here
    setFiles(files.filter(file => file.id !== fileId));
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
         
          <div className="px-4 py-2 text-sm font-medium text-gray-200 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            Wallet ID: 56969696
          </div>
         
        </div>
      </div>

      <br />

      {/* FILE UPLOAD SECTION */}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-3/4 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-500 bg-opacity-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Docs, Pdfs, Ppts or Imgs (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <br />

      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm">
          <div className="mb-2 flex justify-between items-center"></div>
          <div className="flex items-center">
            <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-400 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">
              File Link:
            </span>
            <div className="relative w-full">
              <input
                id="website-url"
                type="text"
                aria-describedby="helper-text-explanation"
                className="bg-gray-900 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="Uploaded File Link"
                readOnly
                disabled
              />
            </div>
            <button
              data-tooltip-target="tooltip-website-url"
              data-copy-to-clipboard-target="website-url"
              className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
              type="button"
            >
              <span id="default-icon">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <span id="success-icon" className="hidden inline-flex items-center">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            </button>
            <div
              id="tooltip-website-url"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              <span id="default-tooltip-message">Copy link</span>
              <span id="success-tooltip-message" className="hidden">Copied!</span>
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
<br />
      {/* FILE LIST */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">File Name</th>
              <th scope="col" className="px-6 py-3">File Size</th>
              <th scope="col" className="px-6 py-3">File Type</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr className="border-b bg-gray-800 border-gray-700" key={file.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
                  {file.name}
                </th>
                <td className="px-6 py-4">{file.size}</td>
                <td className="px-6 py-4">{file.type}</td>
                <td className="px-6 py-4">{file.date}</td>
                <td className="px-6 py-4">
                  {/* <button
                    onClick={() => handleEdit(file)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  &nbsp;|&nbsp; */}
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
