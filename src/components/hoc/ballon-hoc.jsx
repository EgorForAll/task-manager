import React from 'react';

function BallonHoc(WrappedComponent, data, onClickCloseBtn, isEdit) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClickAddBtn = this.onClickAddBtn.bind(this);
      this.onPostComment = this.onPostComment.bind(this);
      this.addNewComment = this.addNewComment.bind(this);
      this.deleteComment = this.deleteComment.bind(this);
      this.state = {
        isAdd: false,
        isCommentPosted: false,
        data: data
      };
    }

    onClickAddBtn(element) {
      element.disabled = true;
      this.setState({ isAdd: true });
    }

    onPostComment() {
      this.setState({ isCommentPosted: true });
    }

    addNewComment(element) {
      this.setState({ isAdd: false });
      element.disabled = false;
    }

    deleteComment(comment, element) {
      if (comment) {
        comment = '';
      }
      this.setState({ isAdd: false });
      element.disabled = false;
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          onClickAddBtn={this.onClickAddBtn}
          onClickCloseBtn={onClickCloseBtn}
          isAdd={this.state.isAdd}
          isEdit={isEdit}
          addNewComment={this.addNewComment}
          deleteComment={this.deleteComment}
        />
      );
    }
  };
}

export default BallonHoc;
