import blackCross from "../../assets/images/black-cross.png";
import "./NavMenu.scss";

const NavMenu = (props) => {
  const {toggleMenu, getBitterBeers, getClassicRange, getHighABV, 
        sortAscABV, sortDescABV,  sortAscIBU, sortDescIBU} = props;

  return (
    <div className="nav-menu">
        <div className="nav-menu__content">
            <label className="nav-menu__form--show">
                <input type="radio" name="checkbox" onClick={sortAscABV}/>
                Lowest ABV
            </label>
            <label className="nav-menu__form--show">
                <input type="radio" name="checkbox" onClick={sortDescABV}/>
                Highest ABV
            </label>
            <label className="nav-menu__form--show">
                <input type="radio" name="checkbox" onClick={sortAscIBU}/>
                Lowest IBU
            </label>
            <label className="nav-menu__form--show">
                <input type="radio" name="checkbox" onClick={sortDescIBU}/>
                Highest IBU
            </label>

            <label className="nav-menu__form">
                <input type="radio" name="checkbox" onClick={getHighABV}/>
                High ABV
            </label>
            <label className="nav-menu__form">
                <input type="radio" name="checkbox" onClick={getClassicRange}/>
                Classic Range
            </label>
            <label className="nav-menu__form">
                    <input type="radio" name="checkbox" onClick = {getBitterBeers}/>
                    Bitter
            </label>
            <img
                src={blackCross}
                alt="Close menu"
                className="nav-menu__cross"
                onClick={toggleMenu}
            />
        </div>
    </div>
  );
};

export default NavMenu;
