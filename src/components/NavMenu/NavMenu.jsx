import whiteCross from "../../assets/images/white-cross.png";
import "./NavMenu.scss";


const NavMenu = (props) => {
  const {toggleMenu, getAcidicBeers, getClassicRange, getHighABV } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={whiteCross}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={toggleMenu}
        />

        <div className="nav-menu__item" >
            <label class="nav-menu__form">
                <input type="checkbox" name="checkbox" onClick={getHighABV}/>
                High ABV ( > 6.0% )
            </label>
        </div>
        <div className="nav-menu__item" >
            <label class="nav-menu__form">
                <input type="checkbox" name="checkbox" onClick={getClassicRange}/>
                Classic Range
            </label>
        </div>
        <div className="nav-menu__item" >
        <label class="nav-menu__form">
                <input type="checkbox" name="checkbox" onClick = {getAcidicBeers}/>
                Acidic
            </label>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
