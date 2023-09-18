import PropTypes from "prop-types"; // ES6

import { AiOutlineCheckCircle } from "react-icons/ai";

const Feature = ({item}) => {
  return (
    <>
          <li className="flex items-center gap-2" ><AiOutlineCheckCircle/> {item} </li>
    </>
  )
}
Feature.propTypes = {
    item: PropTypes.string.isRequired,
}
export default Feature