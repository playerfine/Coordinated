import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';

import styled from '@emotion/styled';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #1d2129;
  `;

  for (let i = 0; i < 120; i += 1) {
    invoke('my_costum_command');
  }

  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default App;
