import axios from "axios";
import { toast } from "sonner";

export const AddBuy = async (productData,totalPrice, formData) => {
  const user = localStorage.getItem("id");
  if (user) {
    try {
      const res = await axios.get(`http://localhost:3000/users/${user}`);
      const orderedProducts = res.data.orderedProducts ;
      const updateBuy = {
        ...orderedProducts,
        productData     
      };
      console.log(updateBuy);
      

      const updatedUserData = {
        
        orderedProducts:{...orderedProducts, productData, orderDetails:formData, totalPrice:totalPrice} ,
   
      };
      console.log(updatedUserData);
      toast.success("Order placed");

      await axios.patch(`http://localhost:3000/users/${user}`, updatedUserData);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  }
};
