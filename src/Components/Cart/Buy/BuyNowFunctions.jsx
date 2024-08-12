import axios from "axios";
import { toast } from "sonner";

export const AddBuy = async (e) => {
    const user = localStorage.getItem("id");
    if(user){
      try {
        const res = await axios.get(`http://localhost:3000/users/${user}`);
        const buyProducts = res.data.buyProducts;
        const updateBuy = {
          ...buyProducts,
          [e.id]: e,
        };
        toast.success("Order placed");
  
        await axios.patch(`http://localhost:3000/users/${user}`, {
            buyProducts: updateBuy,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };