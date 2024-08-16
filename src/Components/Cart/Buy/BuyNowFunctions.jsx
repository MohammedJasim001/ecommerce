import axios from "axios";
import { toast } from "sonner";

export const AddBuy = async (productData, formData) => {
  const user = localStorage.getItem("id");
  if (user) {
    try {
      const res = await axios.get(`http://localhost:3000/users/${user}`);
      const orderedProducts = res.data.orderedProducts ;
      const updateBuy = {
        ...orderedProducts,
      productData
        
      };


      console.log("sas",productData);

      const updatedUserData = {
        ...res.data,
        orderedProducts: updateBuy,
        orderDetails: formData,
      };

      toast.success("Order placed");

      await axios.patch(`http://localhost:3000/users/${user}`, updatedUserData);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  }
};
