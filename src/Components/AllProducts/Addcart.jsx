import axios from "axios";
import { toast } from "sonner";

export const AddCarts = async (e) => {
  if(e==="a"){
    return 0
  }
  const user = localStorage.getItem("id");
  if (user) {
    try {
      const res = await axios.get(`http://localhost:3000/users/${user}`);
      const cart = res.data.cart;

      
     const exist = Object.values(cart).filter((f)=>{
             return   f.id==e.id
     })
     if(exist.length!==0){
        toast.warning('Item already exist cart')
        return
     }
      const updateCart = {
        ...cart,
        [e.id]: e,
      };
      toast.success("item added to cart");

      await axios.patch(`http://localhost:3000/users/${user}`, {
        cart: updateCart,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    toast.warning("pleas LogIn");
  }
};

export const RemovCart = async (e) => {
  const user = localStorage.getItem("id");
  try {
    const res = await axios.get(`http://localhost:3000/users/${user}`);
    const cart = res.data.cart;
    const { [e.id]: remove, ...news } = cart;
    await axios.patch(`http://localhost:3000/users/${user}`, { cart: news });
  } catch (err) {
    console.log(err);
  }
};
