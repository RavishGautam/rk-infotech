import { Link } from "react-router-dom";
// import products from "../data/products";
import useProducts from "../hooks/useProducts";

export default function ProductsPreview() {
   const { products, loading } = useProducts();
  console.log("i am at product preview page-->",products)
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.slice(0,4).map(p => (
          <div key={p.id} className="glass p-4 rounded-xl">
            
            {/* <div className="h-36 bg-slate-200 dark:bg-slate-800 rounded mb-3"> */}
               <img
            src={p.imageFile}
            alt={p.name}
            className="h-48 w-full object-contain rounded mb-3 "
          />
            {/* </div> */}
            <h3 className="font-bold">{p.name}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          View All Products
        </Link>
      </div>
    </div>
  );
}
