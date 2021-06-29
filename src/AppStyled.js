import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100vh;
  .header {
    background-color: #242e3a;
    width: 250px;
  }
  .body {
    background-color: #282a2d;
    flex: 1;
    overflow-y: auto;
  }
`;
