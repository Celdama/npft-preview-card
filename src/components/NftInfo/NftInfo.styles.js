import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px 0 12px 0;
`;

export const Content = styled.div`
  color: var(--softBlue);

  h3 {
    color: var(--white);
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;

    .price {
      color: var(--cyan);
      display: flex;
    }

    .remaining {
      display: flex;
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
