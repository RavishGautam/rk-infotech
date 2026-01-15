import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");
  formData.append("folder", "products");

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dzsau1csv/image/upload",
    formData
  );

  return res.data.secure_url;
};
