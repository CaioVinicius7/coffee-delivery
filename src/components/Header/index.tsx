import { MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { CartButton } from "../CartButton";
import { HeaderContainer, LocationSpan } from "./styles";

import logo from "../../assets/logo.svg";

interface HeaderProps {
  changeColor: boolean;
}

function Header({ changeColor }: HeaderProps) {
  return (
    <HeaderContainer changeColor={changeColor}>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logo} alt="Coffee Delivery Logo" />
        </NavLink>

        <div>
          <LocationSpan>
            <MapPin size={22} weight="fill" />
            <p> Porto Alegre, RS </p>
          </LocationSpan>

          <NavLink to="/cart" title="Cart">
            <CartButton />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}

export { Header };
