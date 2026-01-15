import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const deleteProduct = async (id) => {
    if (confirm("Delete product?")) {
      await deleteDoc(doc(db, "products", id));
      loadProducts();
    }
  };

  useEffect(() => { loadProducts(); }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={()=>signOut(auth)} className="border px-4 py-2 rounded">Logout</button>
      </div>

      <Link to="/admin/add" className="bg-blue-600 text-white px-4 py-2 rounded">+ Add Product</Link>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {products.map(p => (
          <div key={p.id} className="glass p-4 rounded">
            <img src={p.image} className="h-40 w-full object-cover rounded" />
            <h3 className="font-bold mt-2">{p.name}</h3>
            <p>{p.category}</p>
            <button onClick={()=>deleteProduct(p.id)} className="text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
