import React from "react";
import MainImage from "../MainImage";
import NftInfo from "../NftInfo";
import { Wrapper, Content } from "./Card.styles";

const Card = () => (
  <Wrapper>
    <Content>
      <MainImage />
      <NftInfo title="Equilibrium #3429" price="0.041" days={3} />
    </Content>
  </Wrapper>
);

export default Card;
