import { getParticleCanvas } from '@/utils/particle';
import React from 'react';

export default function IndexPage() {
  React.useEffect(() => {
    getParticleCanvas();
  }, []);
  return <canvas id="theCanvas"></canvas>;
}
