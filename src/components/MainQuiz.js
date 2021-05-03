import React from "react";
import { quizData } from "./quizData";
import suggestion from "../img/suggestion.png";
import question from "../img/ques-1.png";
class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    isReview: false,
    quizData: [],
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options,
        quizData: quizData,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    console.log(this.state.currentQuestion);
  };
  submitAnswer = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          questionImg: quizData[this.state.currentQuestion].questionImg,
          options: quizData[this.state.currentQuestion].options,
          optionsImg: quizData[this.state.currentQuestion].optionsImg,
          answer: quizData[this.state.currentQuestion].answer,
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };
  reviewQuestions = () => {
    this.setState({ isReview: true });
  };
  render() {
    const {
      options,
      myAnswer,
      currentQuestion,
      isEnd,
      score,
      questions,
      questionImg,
      optionsImg,
      isReview,
      quizData,
    } = this.state;

    if (isReview) {
      return (
        <div className="App">
          <div className="review-title">Review Answers</div>
          <div>
            {" "}
            {quizData.map((quiz) => (
              <div>
                {" "}
                <span className="question-top">
                  <span className="question-top-green">
                    {" "}
                    Question &nbsp;
                    {`${quiz.id + 1}`}
                  </span>
                  /{`${quizData.length}`}
                </span>
                <div className="questions" key={quiz.id}>
                  {quiz.question}
                </div>
                <div>{quiz.questionImg ? <img src={question} /> : null}</div>
                <div>
                  {" "}
                  {quiz.options.map((option) => (
                    <p
                      key={option.id}
                      className={`ui floating message options
         ${quiz.answer === option ? "selected" : null}
         `}
                      onClick={() => this.checkAnswer(option)}
                    >
                      {option}
                    </p>
                  ))}
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isEnd) {
      return (
        <div className="result">
          <div className="result-title">
            <i class="fas fa-medal"></i> Score
          </div>
          <h3 className="score-percentage">{(score / 10) * 100}% </h3>
          <div className="congrats-section">Congratulations</div>
          <div className="score-count">
            You got &nbsp; {score} &nbsp; out of 10 Questions
          </div>

          <button className="review-btn" onClick={() => this.reviewQuestions()}>
            Review
          </button>

          <div className="share-score-div">
            <span>Share Score </span>
            <div>
              {" "}
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="suggestion-content">
            You can attend this workshop to improve your skill
          </div>
          <div class="workshop-item-div">
            <div class="workshop-img-div">
              <img src={suggestion} />
            </div>
            <div class="workshop-content-div">
              <div class="title">
                User Experience (UX) Design: From Ideation to Validation
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <span className="question-top">
            <span className="question-top-green">
              {" "}
              Question &nbsp;
              {`${currentQuestion + 1}`}
            </span>
            /{`${quizData.length}`}
          </span>
          <h1 className="questions">{questions}</h1>
          <div>{questionImg ? <img src={question} /> : null}</div>
          {options.map((option) => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <div className="btn-div">
              {" "}
              <button
                className="submit-btn"
                disabled={this.state.disabled}
                onClick={this.submitAnswer}
              >
                Submit
              </button>
              <button
                className="next-btn"
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next &#10230;
              </button>{" "}
            </div>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button className="finish-btn" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default MainQuiz;
