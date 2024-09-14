import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#d8c8b5] text-black py-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-900 text-sm leading-relaxed">
              We are dedicated to providing the best products and services for your pets. Your pet's health and happiness are our top priority. From quality food to essential accessories, we’ve got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-3">
              <li><a href="/" className="hover:text-gray-500">Home</a></li>
              <li><a href="/allproducts" className="hover:text-gray-500">Shop</a></li>
              <li><a href="/about" className="hover:text-gray-500">About</a></li>
              <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm text-gray-900 leading-relaxed">
              <span className="font-medium text-black">Email:</span> support@petshop.com
            </p>
            <p className="text-sm text-gray-900 leading-relaxed">
              <span className="font-medium text-black">Phone:</span> +1 234 567 890
            </p>
            <p className="text-sm text-gray-900 leading-relaxed">
              <span className="font-medium text-black">Address:</span> 123 Pet Street, Pet City, PC 12345
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/feed/"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-[#020617] hover:bg-gray-500 transition duration-300">
                <i className='bx bxl-linkedin-square text-2xl text-white'></i>
              </a>
              <a href="https://www.instagram.com/_jasim_at/"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-[#020617] hover:bg-gray-500 transition duration-300">
                <i className='bx bxl-instagram-alt text-2xl text-white'></i>
              </a>
              <a href="https://wa.me/7510180451"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-[#020617] hover:bg-gray-500 transition duration-300">
                <i className='bx bxl-whatsapp text-2xl text-white'></i>
              </a>
              <a href="https://github.com/MohammedJasim001"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-[#020617] hover:bg-gray-500 transition duration-300">
                <i className='bx bxl-facebook text-2xl text-white'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-900">
          &copy; 2024 Luna's Pet Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
