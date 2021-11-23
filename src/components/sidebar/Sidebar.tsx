import React from 'react';
import styled from '@emotion/styled';
import FeatherIcon from 'feather-icons-react';

import colors from '../../theme/colors';
import Text from '../Text';
import SidebarHeader from './SidebarHeader';

const Sidebar: React.FC = () => {
  const SideBar = styled.div`
    width: 320px;
    background: #171a21;
    height: 100vh;
  `;

  return (
    <SideBar>
      <SidebarHeader />
    </SideBar>
  );
};

export default Sidebar;
