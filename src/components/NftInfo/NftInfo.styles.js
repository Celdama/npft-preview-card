import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  color: var(--softBlue);

  h3 {
    color: var(--white);
  }

  div {
    display: flex;
    justify-content: space-between;

    .price {
      color: var(--cyan);
      display: flex;
    }

    .remaining {
      display: flex;
      /* outline: 1px solid red; */
    }
  }
`;

export const ETHLogo = styled.img`
  margin-right: 6px;
  height: 16px;
  width: 10px;
`;

export const ClockLogo = styled.img`
  margin-right: 6px;
  height: 16px;
`;
