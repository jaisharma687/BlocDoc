"use client";

import Upload from "@/components/upload";
import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";

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
            Wallet ID: {account ? `${account}` : "Not Connected"}
          </div>
        </div>
      </div>
      <br />
      {/* FILE UPLOAD SECTION */}
      <Upload />
      <br />
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
