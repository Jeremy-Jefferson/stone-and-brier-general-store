import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Welcome to the Stone & Brier General Store"
        subtitle="Where there's a little something for EVERYONE..!"
        image="https://jingdaily.com/wp-content/uploads/2018/10/shutterstock_156641084-1240x823.jpg"
        alt= "store"
        ctaText="Create your account now"
        ctaLink="/register"
      />
    </LandingLayout>
  );
}