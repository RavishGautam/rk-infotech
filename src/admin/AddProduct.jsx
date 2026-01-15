import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import { uploadToCloudinary } from "../utils/uploadToCloudinary";


export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("laptop");
  const [imageFile, setImageFile] = useState(null);
const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const nav = useNavigate();

  // const submit = async (e) => {
  //   e.preventDefault();

  //   const imgRef = ref(storage, `products/${Date.now()}`);
  //   await uploadBytes(imgRef, image);
  //   const url = await getDownloadURL(imgRef);

  //   await addDoc(collection(db, "products"), {
  //     name,
  //     category,
  //     price,
  //     image: url,
  //     createdAt: Date.now()
  //   });

  //   nav("/admin/dashboard");
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  // if (!imageFile) {
  //   alert("Please select an image");
  //   return;
  // }

  try {
    setLoading(true);

    const imageUrl = await uploadToCloudinary(imageFile);

    await addDoc(collection(db, "products"), {
      name,
      price,
      category,
      description,
      imageFile: imageUrl,
      createdAt: new Date(),
    });

    alert("Product added successfully!");
  } catch (err) {
    console.error(err);
    alert("Upload failed: " + err.message);
  } finally {
    setLoading(false);
  }
};



  const addProduct =(e) =>{
    console.log(e)
    console.log("name--->",name)
    console.log("category--->",category)
    console.log("description--->",description)
    console.log("price--->",price)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="glass p-6 rounded">
        <input className="w-full p-2 mb-3 border rounded" placeholder="Product Name" onChange={e=>setName(e.target.value)} />
        
        <select className="w-full p-2 mb-3 border rounded" onChange={e=>setCategory(e.target.value)}>
          <option value="laptop">Laptop</option>
          <option value="desktop">Desktop</option>
          <option value="accessory">Accessory</option>
        </select>

        <input className="w-full p-2 mb-3 border rounded" placeholder="Product Description" onChange={e=>setDescription(e.target.value)} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Product Price" onChange={e=>setPrice(e.target.value)} />
        
        <input type="file" className="w-full p-2 mb-3 border rounded" onChange={e=>setImageFile(e.target.files[0])} required />

        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addProduct}>Save</button>
      </form>
    </div>
  );
}
