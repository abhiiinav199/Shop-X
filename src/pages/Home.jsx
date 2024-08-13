



import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-900 text-gray-200">
      <header
        className="text-white bg-center bg-cover"
        style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}
      >
        <div className="py-28 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-opacity-70">
          <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
            <h1 className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
              Welcome to Shop<span className="text-teal-500 text-[3.5rem]">X</span>
            </h1>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl">
              Find the best products at unbeatable prices.
            </p>
            <a
              href="/allproducts"
              className="hover:bg-teal-600 px-6 py-3 sm:px-8 sm:py-4 text-white transition duration-300 bg-teal-500 rounded"
            >
              Shop Now
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl text-teal-500">Why Shop With Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-teal-400">Free Shipping</h3>
              <p>Get free shipping on all orders over ₹1000.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-teal-400">24/7 Support</h3>
              <p>We are here to help you anytime, any day.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-teal-400">Secure Payment</h3>
              <p>Your payment information is safe with us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl text-teal-500">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl text-teal-500">Customer Testimonials</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p className="italic">"Great service and amazing products! Highly recommend Shop<span className="text-xl text-teal-500">X</span>"</p>
              <p className="mt-4 font-bold">- Shivani Singh</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p className="italic">"I love the free shipping and the customer support is top-notch."</p>
              <p className="mt-4 font-bold">- Shyam Kumar</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p className="italic">"ShopX has the best product range and their prices are unbeatable. I'm a regular customer now!"</p>
              <p className="mt-4 font-bold">- Anjali Mehra</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p className="italic">"The quality of products is unmatched. Definitely coming back for more!"</p>
              <p className="mt-4 font-bold">- Ramesh Patel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center px-4 sm:px-8 lg:px-16">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-teal-500">Subscribe to Our Newsletter</h2>
          <p className="mb-6 sm:text-lg lg:text-xl">Stay updated with the latest offers and products.</p>
          <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:outline-none focus:ring-2 focus:ring-teal-500 px-4 py-2 border border-gray-600 rounded w-full sm:w-auto bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="hover:bg-teal-600 px-6 py-2 text-white transition duration-300 bg-teal-500 rounded w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
