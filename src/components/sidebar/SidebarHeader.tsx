import React from 'react';
import FeatherIcon from 'feather-icons-react';
import styled from '@emotion/styled';

import colors from '../../theme/colors';

import Text from '../Text';

const SidebarHeader = () => {
  const SideBarHeader = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0em 1.5rem;
  `;

  const ProfileIcon = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background: ${colors.purple};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  `;
  return (
    <SideBarHeader>
      <ProfileIcon>
        <Text color="white" fontWeight="bold" fontSize="smaller">
          Z
        </Text>
      </ProfileIcon>
      <Text style={{ marginRight: '8px' }} fontSize="small" color="dark" fontWeight="regular">
        Zjerilon Ferero
      </Text>
      <FeatherIcon color={colors.dark} icon="more-horizontal" size="20" />
      <FeatherIcon
        style={{ display: 'flex', marginLeft: 'auto' }}
        color={colors.dark}
        icon="chevron-right"
        size="20"
      />
    </SideBarHeader>
  );
};

export default SidebarHeader;
