import React from "react";

import NFTImage from "../../images/image-equilibrium.jpg";
import { Wrapper, Image } from "./MainImage.styles";

const MainImage = () => (
  <Wrapper>
    <Image src={NFTImage} alt="nft-image" />
  </Wrapper>
);

export default MainImage;
