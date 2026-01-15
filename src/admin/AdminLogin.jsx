import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
  alert(err.message);
  console.error(err);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={login} className="glass p-8 rounded-xl w-80">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input className="w-full p-2 mb-3 border rounded" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 mb-3 border rounded" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
