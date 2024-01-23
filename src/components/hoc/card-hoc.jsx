import React from 'react';
import BallonCommentWrapper from '../ui/ballon-comment/ballon-comment';
import BallonSubtasksWrapper from '../ui/ballon-subtasks/ballon-subtasks';
import BallonHoc from './ballon-hoc';

// Из-за того, что между компонентами EditCard и DisplayCard много общего, то решено вынести общую логику в HOC

function CardHoc(WrappedComponent, task, changeMode, setChange, borderColor, isEdit) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onClickEditBtn = this.onClickEditBtn.bind(this);
      this.onClickCommentBtn = this.onClickCommentBtn.bind(this);
      this.onClickSubtasksBtn = this.onClickSubtasksBtn.bind(this);
      this.onClickCloseBtn = this.onClickCloseBtn.bind(this);
      this.getBallonComment = this.getBallonComment.bind(this);
      this.getBallonSubtasks = this.getBallonSubtasks.bind(this);
      this.state = {
        isShowComments: false,
        isShowSubtasks: false,
        currentCard: null
      };
    }

    getBallonComment() {
      return BallonHoc(BallonCommentWrapper, task.comments, this.onClickCloseBtn, isEdit);
    }

    getBallonSubtasks() {
      return BallonHoc(BallonSubtasksWrapper, task.subtitles, this.onClickCloseBtn, isEdit);
    }

    onClickEditBtn() {
      setChange(!changeMode);
    }

    onClickCommentBtn() {
      if (this.state.isShowSubtasks) {
        this.setState({ isShowSubtasks: false });
      }
      this.setState({ isShowComments: true });
    }

    onClickSubtasksBtn() {
      if (this.state.isShowComments) {
        this.setState({ isShowComments: false });
      }
      this.setState({ isShowSubtasks: true });
    }

    onClickCloseBtn(ref) {
      ref.classList.add('animate__animated');
      ref.classList.add('animate__fadeOutDown');
      setTimeout(() => {
        if (this.state.isShowComments) {
          this.setState({ isShowComments: false });
        }
        if (this.state.isShowSubtasks) {
          this.setState({ isShowSubtasks: false });
        }
      }, 1000);
    }

    render() {
      return (
        <WrappedComponent
          task={task}
          onClickEditBtn={this.onClickEditBtn}
          borderColor={borderColor}
          isShowComments={this.state.isShowComments}
          isShowSubtasks={this.state.isShowSubtasks}
          onClickCommentBtn={this.onClickCommentBtn}
          onClickSubtasksBtn={this.onClickSubtasksBtn}
          onClickCloseBtn={this.onClickCloseBtn}
          getBallonComment={this.getBallonComment}
          getBallonSubtask={this.getBallonSubtasks}
          change={changeMode}
          setChange={setChange}
        />
      );
    }
  };
}

export default CardHoc;
