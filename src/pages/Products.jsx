import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { openWhatsApp } from "../utils/whatsapp";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(items);
      console.log("name-->",products)
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length === 0 && <p>No products found</p>}

      {products.map((product) => (
        
        <div key={product.id} className="border rounded-lg p-4 shadow">
          <img
            src={product.imageFile}
            alt={product.name}
            className="h-48 w-full object-contain mb-3"
          />
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-semibold">₹{product.price}</p>


          <div className="flex gap-2">
      {/* CALL BUTTON */}
      <a
        href={`tel:+919870605214`}
        className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
      >
        📞 Call
      </a>

      {/* WHATSAPP BUTTON */}
      <a
       onClick={() =>
    openWhatsApp(
      `Hello RK Infotech!, I am interested in this product:\n\n${product.name}\nPrice: ₹${product.price} \nProduct code: ${product.id}.`
    )
  }
        className="flex-1 bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 cursor-pointer"
      >
        💬 WhatsApp
      </a>
    </div>
        </div>

        
      ))}
    </div>
  );
};

export default Products;
