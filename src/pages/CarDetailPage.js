import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CAR_DETAILS = {
  "model-s": {
    name: "Model S",
    headline: "Plaid",
    subheadline: "Beyond Ludicrous",
    range: "396 mi",
    topSpeed: "200 mph",
    zeroToSixty: "1.99 s",
    description:
      "Model S is built for speed and range, with beyond Ludicrous acceleration and tri-motor all-wheel drive.",
    image: "model-s.jpg",
  },
  "model-3": {
    name: "Model 3",
    headline: "Electric for Everyone",
    subheadline: "Quick, agile and efficient",
    range: "358 mi",
    topSpeed: "145 mph",
    zeroToSixty: "3.1 s",
    description:
      "Model 3 is designed for electric-powered performance, with quick acceleration, long range and fast charging.",
    image: "model-3.jpg",
  },
  "model-x": {
    name: "Model X",
    headline: "Utility Meets Performance",
    subheadline: "Falcon Wing doors & room for seven",
    range: "333 mi",
    topSpeed: "163 mph",
    zeroToSixty: "2.5 s",
    description:
      "Model X is the safest, quickest and most capable SUV ever—with standard all-wheel drive and best in class storage.",
    image: "model-x.jpg",
  },
  "model-y": {
    name: "Model Y",
    headline: "Versatile Utility",
    subheadline: "Room for up to seven",
    range: "330 mi",
    topSpeed: "155 mph",
    zeroToSixty: "3.5 s",
    description:
      "Model Y provides maximum versatility—able to carry seven passengers and their cargo.",
    image: "model-y.jpg",
  },
};

function CarDetailPage() {
  const { modelId } = useParams();
  const car = CAR_DETAILS[modelId];

  if (!car) {
    return (
      <Centered>
        <h1>Vehicle not found</h1>
        <p>Please choose a model from the header.</p>
      </Centered>
    );
  }

  return (
    <PageContainer>
      <Hero bgImage={car.image}>
        <HeroText>
          <h1>{car.name}</h1>
          <h2>{car.headline}</h2>
          <p>{car.subheadline}</p>
        </HeroText>
      </Hero>
      <SpecsSection>
        <SpecCard>
          <SpecLabel>Range (est.)</SpecLabel>
          <SpecValue>{car.range}</SpecValue>
        </SpecCard>
        <SpecCard>
          <SpecLabel>Top Speed</SpecLabel>
          <SpecValue>{car.topSpeed}</SpecValue>
        </SpecCard>
        <SpecCard>
          <SpecLabel>0-60 mph*</SpecLabel>
          <SpecValue>{car.zeroToSixty}</SpecValue>
        </SpecCard>
      </SpecsSection>
      <DetailsSection>
        <DetailsText>
          <h3>Overview</h3>
          <p>{car.description}</p>
          <p>
            Built around a fully electric powertrain, {car.name} delivers
            instant torque, precise handling and a refined, minimalist interior
            inspired by the real Tesla experience.
          </p>
        </DetailsText>
      </DetailsSection>
    </PageContainer>
  );
}

export default CarDetailPage;

const PageContainer = styled.div`
  padding-top: 60px;
`;

const Hero = styled.section`
  height: 70vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.div`
  text-align: center;
  color: #171a20;
  background: rgba(255, 255, 255, 0.8);
  padding: 24px 32px;
  border-radius: 16px;

  h1 {
    font-size: 48px;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
  }
`;

const SpecsSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 32px 16px;
  flex-wrap: wrap;
`;

const SpecCard = styled.div`
  min-width: 180px;
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
`;

const SpecLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #5c5e62;
  margin-bottom: 4px;
`;

const SpecValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #171a20;
`;

const DetailsSection = styled.section`
  max-width: 800px;
  margin: 0 auto 48px;
  padding: 0 16px;
`;

const DetailsText = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p + p {
    margin-top: 8px;
  }
`;

const Centered = styled.div`
  padding-top: 80px;
  text-align: center;
`;
