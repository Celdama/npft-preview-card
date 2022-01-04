import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  outline: 1px solid red;
  display: flex;
  align-items: center;

  p {
    margin-left: 8px;
    color: var(--softBlue);
  }

  .author {
    color: var(--white);
  }
`;

export const Avatar = styled.img`
  height: 36px;
  border: 1.8px solid #fff;
  border-radius: 18px;
`;
