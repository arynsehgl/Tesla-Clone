import React from "react";
import styled from "styled-components";

function AccountPage() {
  return (
    <PageContainer>
      <Layout>
        <Sidebar>
          <h2>Your Tesla Account</h2>
          <NavList>
            <li>Overview</li>
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Profile &amp; Security</li>
          </NavList>
        </Sidebar>
        <Content>
          <h1>Account</h1>
          <p>
            Manage your Tesla profile, vehicles, orders and energy products from
            a single place.
          </p>
          <Section>
            <h2>Sign In Experience</h2>
            <p>
              On tesla.com, signing in reveals a personalized dashboard with
              your vehicles, current software version, supercharging history and
              upcoming service visits.
            </p>
          </Section>
          <Section>
            <h2>Vehicles</h2>
            <p>
              See every Tesla you own, view live status (parked, charging or
              driving), schedule service and purchase upgrades like Full
              Self-Driving (Supervised).
            </p>
          </Section>
          <Section>
            <h2>Orders &amp; Reservations</h2>
            <p>
              Track where your vehicle or energy order is in the delivery
              timeline, upload documents, select delivery options and manage
              payments.
            </p>
          </Section>
          <Section>
            <h2>Charging &amp; Billing</h2>
            <p>
              Review Supercharging sessions, download invoices and manage
              payment methods used for in-car and Supercharger payments.
            </p>
          </Section>
        </Content>
      </Layout>
    </PageContainer>
  );
}

export default AccountPage;

const PageContainer = styled.div`
  padding-top: 80px;
`;

const Layout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 32px;
  padding: 0 16px 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 14px;
    padding: 8px 0;
    color: #5c5e62;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto 0 0;

  h1 {
    font-size: 40px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 8px;
  }
`;

const Section = styled.section`
  margin-top: 24px;
`;
