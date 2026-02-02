import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const navigate = useNavigate();

  const handleCarClick = (car) => {
    const model = car.toLowerCase().replace(" ", "-");
    navigate(`/?model=${model}`);
  };

  const goTo = (path) => {
    navigate(path);
    setBurgerStatus(false);
  };

  return (
    <Container>
      <LogoButton
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/images/logo.svg" alt="Tesla" />
      </LogoButton>
      <Menu>
        {cars &&
          cars.map((car) => (
            <button key={car} type="button" onClick={() => handleCarClick(car)}>
              {car.toUpperCase()}
            </button>
          ))}
      </Menu>
      <RightMenu>
        <button type="button" onClick={() => goTo("/inventory")}>
          Shop
        </button>
        <button type="button" onClick={() => goTo("/account")}>
          Account
        </button>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose
          onClick={() => {
            setBurgerStatus(false);
          }}
        />
        <li>
          <button type="button" onClick={() => goTo("/inventory")}>
            Existing Inventory
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/used-inventory")}>
            Used Inventory
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/trade-in")}>
            Trade-in
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/cybertruck")}>
            Cybertruck
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/roadster")}>
            Roadster
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/accessories")}>
            Accessories
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/solar-roof")}>
            Solar Roof
          </button>
        </li>
        <li>
          <button type="button" onClick={() => goTo("/solar-panels")}>
            Solar Panels
          </button>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const LogoButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  button {
    border: none;
    background: transparent;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  button {
    border: none;
    background: transparent;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    button {
      border: none;
      background: transparent;
      font-weight: 600;
      cursor: pointer;
    }
  }
  z-index: 10;
`;

const CustomClose = styled(CloseIcon)`
  align-self: end;
  cursor: pointer;
  margin-right: 10px;
`;

export default Header;
