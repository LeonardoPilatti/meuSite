/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkArea } from './styled';

export default ({ link, children }) => {
  const location = useLocation();

  let isActive = location.pathname === link;

  return (
    <LinkArea active={isActive} to={link}>
      {children}
    </LinkArea>
  );
};
