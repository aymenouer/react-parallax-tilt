import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './InitialTilt.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

const _InitialTilt = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _InitialTilt;
