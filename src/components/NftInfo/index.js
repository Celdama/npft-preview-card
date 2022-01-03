import React from "react";
import { Wrapper, Content, ETHLogo, ClockLogo } from "./NftInfo.styles";

import ETHSvg from "../../images/icon-ethereum.svg";
import ClockSvg from "../../images/icon-clock.svg";

const NftInfo = ({ title, price, days }) => {
  return (
    <Wrapper>
      <Content>
        <h3>{title}</h3>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div>
          <span className="price">
            <ETHLogo src={ETHSvg} />
            {price} ETH
          </span>
          <span className="remaining">
            <ClockLogo src={ClockSvg} />
            {days} days left
          </span>
        </div>
      </Content>
    </Wrapper>
  );
};

export default NftInfo;
