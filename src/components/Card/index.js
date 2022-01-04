import React from 'react';
import MainImage from '../MainImage';
import NftInfo from '../NftInfo';
import Divider from '../Divider';
import Author from '../Author';
import { Wrapper, Content } from './Card.styles';

const Card = () => (
  <Wrapper>
    <Content>
      <MainImage />
      <div>
        <NftInfo title='Equilibrium #3429' price='0.041' days={3} />
        <Divider />
        <Author authorName='Jules Wyvern' />
      </div>
    </Content>
  </Wrapper>
);

export default Card;
