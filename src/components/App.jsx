import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Loyout';
// import { StateExample } from './StateExample/StateExapmle';
import { Component } from 'react';

export class App extends Component {
  state = { quizItems: initialQuizItems };

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };
  render() {
    return (
      <Container>
        <SearchBar />
        <QuizList items={this.state.quizItems} onDelete={this.handleDelete} />
        {/* <StateExample /> */}
        <GlobalStyle />
      </Container>
    );
  }
}
