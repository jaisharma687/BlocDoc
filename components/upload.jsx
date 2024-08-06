"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "./ui/input"; // Ensure this import is correct or remove it if not used
import { Button } from "./ui/button";
import Link from "next/link";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_KEY;

export default function Upload() {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFile(event.target.files[0]);
            setFileName(event.target.files[0].name);
        } else {
            setFile(null);
            setFileName("No file chosen");
        }
    };

    const handleButtonClick = () => {
        document.getElementById("file-upload").click();
    };

    const handleNewFileClick = () => {
        setFile(null);
        setFileName("No file chosen");
        document.getElementById("file-upload").value = null;
        setUploadedImages([]); // Clear the IPFS hash list
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
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <Button onClick={handleButtonClick}>
                            Choose File
                        </Button>
                        <Input
                            id="file-upload"
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <span id="file-chosen" className="mx-5">{fileName}</span>
                    </div>
                    <div className="flex gap-10">
                        <Button type="submit" >
                            Upload
                        </Button>
                        <Button type="button" onClick={handleNewFileClick}>
                            Reset
                        </Button>
                    </div>
                </div>
            </form>
            <div className="data">
                {uploadedImages.map((image, index) => (
                    <div key={image.path + index} className="flex gap-5 mt-10">
                        <h4>IPFS Hash:</h4>
                        <Link href={`https://skywalker.infura-ipfs.io/ipfs/${image.path}`} target="_blank" rel="noopener noreferrer">
                            <h3>{`${image.path}`}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}