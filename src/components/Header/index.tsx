import { MapPin } from "phosphor-react";

import { CartButton } from "../CartButton";
import { HeaderContainer, LocationSpan } from "./styles";

import logo from "../../assets/logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery Logo" />

      <div>
        <LocationSpan>
          <MapPin size={22} weight="fill" />
          <p> Porto Alegre, RS </p>
        </LocationSpan>

        <CartButton />
      </div>
    </HeaderContainer>
  );
}

export { Header };
