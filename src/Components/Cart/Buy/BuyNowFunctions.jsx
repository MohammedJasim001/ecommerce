import axios from "axios";
import { toast } from "sonner";

export const AddBuy = async (productData, totalPrice, formData) => {
  const user = localStorage.getItem("id");
  if (user) {
    try {
      const res = await axios.get(`http://localhost:3000/users/${user}`);
      
      
      let orderedProducts = res.data.orderedProducts;
      if (typeof orderedProducts !== 'object' || orderedProducts === null) {
        orderedProducts = {};
      }

      
      const orderKey = `order_${Date.now()}`; 
      
     
      const updatedOrderedProducts = {
        ...orderedProducts,
        [orderKey]: { productData, orderDetails: formData, totalPrice }
      };

      const updatedUserData = {
        orderedProducts: updatedOrderedProducts
      };

      console.log(updatedUserData);
      toast.success("Order placed");

      // Update the user's ordered products
      await axios.patch(`http://localhost:3000/users/${user}`, updatedUserData);

      // Clear the cart after order placement
      await axios.patch(`http://localhost:3000/users/${user}`, {
        cart: "",
      });

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  }
};
