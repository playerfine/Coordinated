import React from "react";
import styled from "@emotion/styled";
import Text from "./components/Text";

const App: React.FC<{}> = () => {
  const App = styled.div`
    width: 100vw;
    height: 100vh;
    background: #1d2129;
  `;

  const SideBar = styled.div`
    width: 320px;
    background: #171a21;
    height: 100vh;
  `;

  const SideBarHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    height: 55px;
  `;

  return (
    <App>
      <SideBar>
        <SideBarHeader />
        <Text fontSize="small" color="regular" fontWeight="bold">
          Kippensoep
        </Text>
      </SideBar>
    </App>
  );
};

export default App;
