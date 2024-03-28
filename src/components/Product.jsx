
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
const Product = (currentElem) => {
  const { id, name, image, price, category } = currentElem;
  return (
    <>
   
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card product-container w-[330px] h-[300px] rounded-[10px] border-top-0 border-1  hover:shadow-2xl hover:shadow-slate-600/50 mb-20">
        <div className="rounded-md">
          <img className="rounded-t-md " src={image} alt={name} />
        </div>
        <div className="card-data flex justify-center ">
          <div className=" ">
            <h2 className="text-2xl">{category}</h2>
            <h3 className="text-md">{name}</h3>
            <p className="text-md">{<FormatPrice price = {price}/>}</p>
          </div>
        </div>
      </div>
    </NavLink>
   
    </>
  );
};

export default Product;