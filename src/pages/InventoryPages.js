import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const INVENTORY = [
  {
    id: 1,
    modelId: "model-3",
    name: "Model 3 Rear-Wheel Drive",
    range: "272 mi",
    topSpeed: "140 mph",
    zeroToSixty: "5.8 s",
    description:
      "Midnight Silver Metallic Paint • 18'' Aero Wheels • All Black Interior",
    badges: ["Autopilot", "30-Day Premium Connectivity Trial"],
    price: "From $38,650",
  },
  {
    id: 2,
    modelId: "model-3",
    name: "Model 3 Rear-Wheel Drive (Demo)",
    range: "272 mi",
    topSpeed: "125 mph",
    zeroToSixty: "5.8 s",
    description:
      "Stealth Grey Paint • 18'' Photon Wheels • Black Premium Interior",
    badges: ["Autopilot", "Demo Vehicle"],
    price: "From $37,070",
  },
  {
    id: 3,
    modelId: "model-y",
    name: "Model Y Long Range",
    range: "330 mi",
    topSpeed: "135 mph",
    zeroToSixty: "4.8 s",
    description: "Pearl White Multi-Coat • 19'' Gemini Wheels • Black Interior",
    badges: ["Dual Motor All-Wheel Drive"],
    price: "From $47,990",
  },
  {
    id: 4,
    modelId: "model-s",
    name: "Model S Dual Motor",
    range: "410 mi",
    topSpeed: "130 mph",
    zeroToSixty: "3.1 s",
    description: "Deep Blue Metallic • 19'' Tempest Wheels • Black Interior",
    badges: ["Long Range", "Autopilot"],
    price: "From $72,990",
  },
  {
    id: 5,
    modelId: "model-x",
    name: "Model X Dual Motor",
    range: "333 mi",
    topSpeed: "155 mph",
    zeroToSixty: "3.8 s",
    description: "Solid Black • 20'' Cyberstream Wheels • White Interior",
    badges: ["Seven Seat Interior"],
    price: "From $79,990",
  },
];

export function InventoryPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const modelFilter = params.get("model");

  const vehicles = modelFilter
    ? INVENTORY.filter((item) => item.modelId === modelFilter)
    : INVENTORY;

  const heading = modelFilter
    ? `Existing Inventory – ${modelFilter.replace("model-", "Model ").toUpperCase()}`
    : "Existing Inventory";

  return (
    <PageContainer>
      <Content>
        <h1>{heading}</h1>
        <p>
          Browse Tesla vehicles that are already built and ready for quicker
          delivery. Specs and trims below are inspired by real Tesla inventory
          cards.
        </p>
        <CardsGrid>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id}>
              <h2>{vehicle.name}</h2>
              <Price>{vehicle.price}</Price>
              <SpecsRow>
                <Spec>
                  <span>Range (est.)</span>
                  <strong>{vehicle.range}</strong>
                </Spec>
                <Spec>
                  <span>Top Speed</span>
                  <strong>{vehicle.topSpeed}</strong>
                </Spec>
                <Spec>
                  <span>0–60 mph</span>
                  <strong>{vehicle.zeroToSixty}</strong>
                </Spec>
              </SpecsRow>
              <Description>{vehicle.description}</Description>
              <Badges>
                {vehicle.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </Badges>
            </VehicleCard>
          ))}
        </CardsGrid>
      </Content>
    </PageContainer>
  );
}

export function UsedInventoryPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Used Inventory</h1>
        <p>
          Explore pre-owned Tesla vehicles that are inspected and backed by
          Tesla, with transparent pricing and history.
        </p>
      </Content>
    </PageContainer>
  );
}

export function TradeInPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Trade-In</h1>
        <p>
          Estimate the value of your current vehicle and apply it toward a new
          Tesla, just like the trade-in flow on the real site.
        </p>
      </Content>
    </PageContainer>
  );
}

export function CybertruckPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Cybertruck</h1>
        <p>
          An angular exoskeleton, ultra-hard stainless steel and armored glass
          make Cybertruck unlike any pickup you&apos;ve seen.
        </p>
      </Content>
    </PageContainer>
  );
}

export function RoadsterPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Roadster</h1>
        <p>
          The quickest car in the world, with record-setting acceleration, range
          and performance, designed to maximize aerodynamic efficiency.
        </p>
      </Content>
    </PageContainer>
  );
}

export function AccessoriesPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Accessories</h1>
        <p>
          Shop for vehicle accessories, charging equipment and lifestyle
          products inspired by the Tesla design language.
        </p>
      </Content>
    </PageContainer>
  );
}

export function SolarRoofPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Solar Roof</h1>
        <p>
          A roof that pays for itself by turning sunlight into electricity,
          while blending seamlessly with your home&apos;s architecture.
        </p>
      </Content>
    </PageContainer>
  );
}

export function SolarPanelsPage() {
  return (
    <PageContainer>
      <Content>
        <h1>Solar Panels</h1>
        <p>
          High-efficiency solar panels designed to deliver the most energy over
          time, with a clean, minimal aesthetic.
        </p>
      </Content>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding-top: 80px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px 48px;

  h1 {
    font-size: 40px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 8px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const VehicleCard = styled.article`
  padding: 20px 18px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  text-align: left;

  h2 {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

const Price = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const SpecsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

const Spec = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #5c5e62;
  }

  strong {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 13px;
  color: #5c5e62;
  margin-top: 4px;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

const Badge = styled.span`
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.04);
`;
