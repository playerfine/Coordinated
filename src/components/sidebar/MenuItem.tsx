import React from 'react';
import FeatherIcon from 'feather-icons-react';
import styled from '@emotion/styled';

import Text from '../Text';
import colors from '../../theme/colors';

const MenuItem: React.FC = () => {
  const MenuItemContainer = styled.div`
    padding: 0px 1.5rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
  `;

  return (
    <MenuItemContainer>
      <FeatherIcon
        style={{ transform: 'rotate(90deg)', marginRight: 8 }}
        fill={colors.regular}
        color={colors.regular}
        size="8"
        icon="triangle"
      />
      <FeatherIcon style={{ marginRight: 8 }} color={colors.regular} size="14" icon="file-text" />
      <Text color="regular" fontWeight="light">
        My Journal
      </Text>
    </MenuItemContainer>
  );
};

export default MenuItem;
