import PropTypes from "prop-types"; // ES6
const Menu = ({ menu }) => {
  return (
    <>
        <li>
          <a href={menu.path} > {menu.label} </a>
        </li>
    </>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string
  }),
};

export default Menu;
