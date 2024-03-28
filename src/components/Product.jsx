
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
const Product = (currentElem) => {
  const { id, name, image, price, category } = currentElem;
  return (
    <>
   
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card product-container w-[330px] h-[280px] border-top-0 border-1  hover:shadow-2xl hover:shadow-slate-600/50 mb-20">
        <div className="">
          <img className="w-100 " src={image} alt={name} />
          <span className='bg-gray-100 font-bold text-black text-md rounded  opacity-55 hover:opacity-5  px-5 py-3 absolute top-2 left-[140px]'
          >{category}
          </span>
        </div>
        <div className="card-data flex justify-between mx-5 my-2 ">
            <h3 className="text-md font-bold">{name}</h3>
            <p className="text-md">{<FormatPrice price = {price}/>}</p>
          </div>
      </div>
    </NavLink>
   
    </>
  );
};

export default Product;