import React from 'react';

import styled from '@emotion/styled';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #1d2129;
  `;

  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default App;
