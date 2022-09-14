import blackCross from "../../assets/images/black-cross.png";
import "./NavMenu.scss";


const NavMenu = (props) => {
  const { toggleMenu } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={blackCross}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={toggleMenu}
        />
        <div className="nav-menu__item" onClick={toggleMenu}>
          Search
        </div>

        <div className="nav-menu__item" onClick={toggleMenu}>
            Filter
        </div>

        <div className="nav-menu__item" onClick={toggleMenu}>
            Sort
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
