import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              We are dedicated to providing the best products and services for your pets. Your pet's health and happiness are our top priority.
            </p>
          </div>
          <div className="mb-8 md:mb-0 w-full md:w-1/4 text-center md:text-left md:pl-16">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Email: support@petshop.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Address: 123 Pet Street, Pet City, PC 12345</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="https://www.linkedin.com/feed/"
                 className="flex items-center justify-center border-2 border-white hover:border-[#020617] h-[50px] w-[50px] rounded-full bg-[#020617] hover:bg-white">
                <i className='bx hover:text-[#020617] text-white bxl-linkedin-square'></i>
              </a>
              <a href="https://www.instagram.com/_jasim_at/"
                 className="flex items-center justify-center border-2 border-white hover:border-[#020617] h-[50px] w-[50px] rounded-full bg-[#020617] hover:bg-white">
                <i className='bx hover:text-[#020617] text-white bxl-instagram-alt'></i>
              </a>
              <a href="https://wa.me/7510180451"
                 className="flex items-center justify-center border-2 border-white hover:border-[#020617] h-[50px] w-[50px] rounded-full bg-[#020617] hover:bg-white">
                <i className='bx hover:text-[#020617] text-white bxl-whatsapp'></i>
              </a>
              <a href="https://github.com/MohammedJasim001"
                 className="flex items-center justify-center border-2 border-white hover:border-[#020617] h-[50px] w-[50px] rounded-full bg-[#020617] hover:bg-white">
                <i className='bx hover:text-[#020617] text-white bxl-facebook'></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          &copy; 2024 PetShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
