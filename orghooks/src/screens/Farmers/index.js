import React from 'react';

import Top from './components/Top';
import Farmers from './components/Farmers';

export default function Home() {
  return <Farmers top={Top} />;
}
