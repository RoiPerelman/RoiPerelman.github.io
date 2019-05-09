import React from 'react';
import styled from 'styled-components';
import { Tooltip, Button } from '@material-ui/core';

const StyledTooltip = styled(props => (
  <Tooltip
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
    leaveDelay={100000}
  />
))`
  .tooltip {
    background-color: papayawhip;
    color: #000;
    font-size: 2rem;
  }
`;

const StyledButton = styled(({ color, ...other }) => <Button {...other} />)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  .MuiButton-label {
    color: ${props => props.color};
  }
`;

export const App: React.FC = () => {
  return (
    <StyledTooltip>
      <StyledButton>
        hi
      </StyledButton>
    </StyledTooltip>
  );
}
