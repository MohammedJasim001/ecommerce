import React from "react";
import { FaPaw, FaSmile, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="py-16 h-[100vh]">
      
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#5b9e5b] mb-8">
            About Luna's Pet Shop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Luna's Pet Shop, we believe that pets are more than just
            animals—they're family. We’re dedicated to providing the best
            products and care for your furry, feathered, and scaly friends,
            ensuring their happiness and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* High-Quality Products */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPaw className="text-[#5b9e5b] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              High-Quality Products
            </h3>
            <p className="text-gray-600">
              We source only the best pet products, from nutritious food to
              durable toys and accessories, ensuring your pets are happy and
              healthy.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaSmile className="text-[#5b9e5b] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Our team is dedicated to ensuring a seamless shopping experience
              and offering personalized support for all your pet care needs.
            </p>
          </div>

          {/* Passion for Pets */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaHeart className="text-[#5b9e5b] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Passion for Pets
            </h3>
            <p className="text-gray-600">
              As fellow pet lovers, we care deeply about the well-being of your
              pets. That's why we're here to offer products that keep them happy
              and thriving.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            Thank you for choosing Luna's Pet Shop. We're here to make your
            pet’s life better, one paw at a time.
          </p>
        </div>
        <button 
  onClick={() => navigate('/')}
  className="bg-[#5b9e5b] p-2 text-white rounded-md mt-8 m-auto block"
>
  Back to home
</button>

      </div>
    </div>
  );
};

export default About;
