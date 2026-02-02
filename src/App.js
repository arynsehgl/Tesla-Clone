import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CarDetailPage from "./pages/CarDetailPage";
import AccountPage from "./pages/AccountPage";
import {
  InventoryPage,
  UsedInventoryPage,
  TradeInPage,
  CybertruckPage,
  RoadsterPage,
  AccessoriesPage,
  SolarRoofPage,
  SolarPanelsPage,
} from "./pages/InventoryPages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:modelId" element={<CarDetailPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/used-inventory" element={<UsedInventoryPage />} />
        <Route path="/trade-in" element={<TradeInPage />} />
        <Route path="/cybertruck" element={<CybertruckPage />} />
        <Route path="/roadster" element={<RoadsterPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/solar-roof" element={<SolarRoofPage />} />
        <Route path="/solar-panels" element={<SolarPanelsPage />} />
      </Routes>
    </div>
  );
}

export default App;
