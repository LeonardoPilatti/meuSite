import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkArea = styled(Link)`
  transition: all ease 0.2s;
  padding: 5px;
  color: #fff;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  border-bottom: 5px solid
    ${(props) => (props.active ? '#14D4A5' : 'transparent')};

  &:hover {
    color: ${(props) => (props.active ? '#fff' : '#14D4A5')};
  }
`;
