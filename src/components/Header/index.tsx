import { useContext } from "react";
import { MapPin } from "phosphor-react";

import { CartButton } from "../CartButton";
import { HeaderContainer, LocationSpan } from "./styles";

import logo from "../../assets/logo.svg";
import { CartContext } from "../../contexts/CartContext";

interface HeaderProps {
  changeColor: boolean;
}

function Header({ changeColor }: HeaderProps) {
  return (
    <HeaderContainer changeColor={changeColor}>
      <nav>
        <img src={logo} alt="Coffee Delivery Logo" />

        <div>
          <LocationSpan>
            <MapPin size={22} weight="fill" />
            <p> Porto Alegre, RS </p>
          </LocationSpan>

          <CartButton />
        </div>
      </nav>
    </HeaderContainer>
  );
}

export { Header };
