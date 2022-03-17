import React from 'react';
import Brands from '../features/Brands';
import SeasonOffer from '../features/SeasonOffer';
import TopFeatureCard from '../features/TopFeatureCard';

export default function Home() {
  return(
     <>
      <TopFeatureCard page="home" />
      <Brands />
      <SeasonOffer />
     </>
  );
}
