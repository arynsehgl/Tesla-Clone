import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Section from "./Section";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const model = params.get("model");
    if (model) {
      const el = document.getElementById(model);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <Container>
      <Section
        id="model-s"
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        detailPath="/cars/model-s"
        rightButtonPath="/inventory?model=model-s"
        showDownArrow
      />
      <Section
        id="model-y"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        detailPath="/cars/model-y"
        rightButtonPath="/inventory?model=model-y"
      />
      <Section
        id="model-3"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        detailPath="/cars/model-3"
        rightButtonPath="/inventory?model=model-3"
      />
      <Section
        id="model-x"
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
        detailPath="/cars/model-x"
        rightButtonPath="/inventory?model=model-x"
      />
      <Section
        id="solar-roof"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        detailPath="/solar-roof"
        rightButtonPath="/solar-roof"
      />
      <Section
        id="solar-panels"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
        detailPath="/solar-panels"
        rightButtonPath="/solar-panels"
      />

      <Section
        id="accessories"
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
        detailPath="/accessories"
        rightButtonPath="/accessories"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
