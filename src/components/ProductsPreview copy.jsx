import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function ProductsPreview() {
  const { products, loading } = useProducts();

  if (loading) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((p) => (
          <div key={p.id} className="glass p-4 rounded-xl">
            <img
              src={p.image}
              className="h-36 w-full object-cover rounded mb-3"
            />
            <h3 className="font-bold">{p.name}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
