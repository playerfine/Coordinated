import React from 'react';
import styled from '@emotion/styled';

import SidebarHeader from './SidebarHeader';
import MenuItem from './MenuItem';

const Sidebar: React.FC = () => {
  const SideBar = styled.div`
    width: 320px;
    background: #171a21;
    height: 100vh;
  `;

  return (
    <SideBar>
      <SidebarHeader />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </SideBar>
  );
};

export default Sidebar;
