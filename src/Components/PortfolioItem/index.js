/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container } from './styled';

export default ({ data }) => {
  return <Container>{data.name}</Container>;
};
