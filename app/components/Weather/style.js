import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid #ccc;
  margin: 5px;
  border-radius: 10px;
  &:hover ${Wrapper} {
    background: #d9edf7;
  }
`;
