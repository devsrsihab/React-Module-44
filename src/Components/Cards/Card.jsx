import PropTypes from "prop-types"; // ES6
import Feature from "./Feature";

const Card = ({price}) => {
    const feature = price.feature
  return (
   <>
   <div className="card shadow-xl w-96 m-auto lg:w-full sm:m-0  p-5 flex flex-col text-center ">
    <div className="price text-blue-600 font-bold mb-3">
        <h2><span className="text-5xl" >{price.price}</span>/mon</h2>
    </div>
    <div className="card-title font-semibold text-3xl lg:text-4xl ">
      <h2>{price.title}</h2>
    </div>
    <div className="card-body grow my-8 text-md lg:text-lg ">
      <ul  >
       {
        feature.map((item,index) => <Feature item={item} key={index} /> )
       }
      </ul>
    </div>
    <div className="card-action">
        <button className=" hover:bg-blue-900 duration-200 w-full text-2xl uppercase font-bold bg-blue-600 text-white px-10 rounded py-3">Buy</button>
    </div>

   </div>
   </>
  )
}
Card.propTypes = {
    price: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.string,
        item: PropTypes.array,
        feature: PropTypes.array,
    }).isRequired
}

export default Card