import React from 'react';
import {Composition} from 'remotion';
import {HorseRun} from './HorseRun';

export const Root: React.FC = () => {
  return (
    <Composition
      id="HorseRun"
      component={HorseRun}
      durationInFrames={450}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
