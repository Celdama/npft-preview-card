import React from "react";
import MainImage from "../MainImage";
import NftInfo from "../NftInfo";
import Divider from "../Divider";
import { Wrapper, Content } from "./Card.styles";

const Card = () => (
  <Wrapper>
    <Content>
      <MainImage />
      <NftInfo title="Equilibrium #3429" price="0.041" days={3} />
      <Divider />
    </Content>
  </Wrapper>
);

export default Card;
