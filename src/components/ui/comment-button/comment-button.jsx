import React from 'react';
import PropsTypes from 'prop-types';
import { ReactComponent as CommentSvg } from '../../../assets/comment.svg';
import { Button } from './styled';
import { useSelector } from 'react-redux';

const CommentButton = ({ quantity, onClickCommentBtn }) => {
  const newComments = useSelector((state) => state.new_comments);
  const totalComment = quantity + newComments.length;
  return (
    <Button type="button" onClick={() => onClickCommentBtn()}>
      <CommentSvg /> {totalComment}
    </Button>
  );
};

CommentButton.propsTypes = {
  quantity: PropsTypes.number.isRequired,
  onClickCommentBtn: PropsTypes.func.isRequired
};

export default CommentButton;
