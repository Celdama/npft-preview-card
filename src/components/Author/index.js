import React from 'react';
import { Wrapper, Content, Avatar } from './Author.styled';
import AvatarImg from '../../images/image-avatar.png';

const Author = ({ authorName }) => {
  return (
    <Wrapper>
      <Content>
        <Avatar src={AvatarImg} />
        <p>
          Creation of <span className='author'>{authorName}</span>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Author;
