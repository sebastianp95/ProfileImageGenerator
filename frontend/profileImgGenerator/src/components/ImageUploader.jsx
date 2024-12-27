import React, { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ImageUploader = () => {
  const [image, setImage] = useState(null); // Stores the image preview or processed image
  const [loading, setLoading] = useState(false); // Spinner state
  const [buttonText, setButtonText] = useState("Upload & Process"); // Dynamic button text

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Show image preview
      setButtonText("Upload & Process"); // Reset button text
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true); // Show spinner
    try {
      const formData = new FormData();
      formData.append("image", document.querySelector("#file-upload").files[0]); // Upload the actual file

      const response = await fetch(`${BASE_URL}/upload-image`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch processed image.");
      }

      // Convert response to Blob and update the displayed image
      const blob = await response.blob();
      const processedImageURL = URL.createObjectURL(blob);
      setImage(processedImageURL); // Replace preview with processed image
      setButtonText("Download Processed Image"); // Update button text
    } catch (err) {
      console.error(err);
      alert("An error occurred while uploading the image.");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  const handleDownload = () => {
    if (!image) {
      alert("No processed image available to download.");
      return;
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = image;
    link.download = "processed_image.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-100 p-6 shadow-md">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer rounded-md bg-gray-600 px-4 py-2 text-white shadow-md transition hover:bg-gray-700"
      >
        {image ? "Change Image" : "Select Image"}
      </label>

      {image && (
        <img
          src={image}
          alt="Preview"
          className="h-48 w-48 rounded-lg object-cover shadow-lg"
        />
      )}

      <button
        onClick={
          buttonText === "Upload & Process" ? handleUpload : handleDownload
        }
        className={`rounded-md px-6 py-2 text-white shadow-md transition ${
          loading
            ? "cursor-not-allowed bg-gray-400"
            : buttonText === "Upload & Process"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-emerald-600 hover:bg-emerald-700"
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 animate-spin rounded-full border-t-2 border-white"></div>
            <span>Processing...</span>
          </div>
        ) : (
          buttonText
        )}
      </button>
    </div>
  );
};

export default ImageUploader;
