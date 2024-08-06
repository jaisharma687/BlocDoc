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

}