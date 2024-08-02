"use client";

import { useState } from "react";
import axios from "axios";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_KEY;

export default function Upload() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
        try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
            pinata_api_key: projectId,
            pinata_secret_api_key: projectSecretKey,
            "Content-Type": "multipart/form-data",
            },
        });

        const ImgHash = resFile.data.IpfsHash;
        setUploadedImages((prev) => [...prev, { path: ImgHash }]);
        } catch (e) {
        alert("Unable to upload image to Pinata");
        }
    }
    };

    return (
        <>
        <div className="app">
            <div className="app__container">
                <div className="container">
                <h1>IPFS Uploader</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="file-upload" className="custom-file-upload">
                    Select File
                    </label>
                    <input
                    id="file-upload"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    />
                    <button className="button" type="submit">
                    Upload File
                    </button>
                </form>
                </div>
                <div className="data">
                {uploadedImages.map((image, index) => (
                    <div key={image.path + index}>
                    <img
                        className="image"
                        alt={`Uploaded #${index + 1}`}
                        src={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}
                        style={{ maxWidth: "400px", margin: "15px" }}
                    />
                    <h4>Link to IPFS:</h4>
                    <a href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}>
                        <h3>{`https://skywalker.infura-ipfs.io/ipfs/${image.path}`}</h3>
                    </a>
                    </div>
                ))}
                </div>
            </div>
            </div>
            </>
        );
    }