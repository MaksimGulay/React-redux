// import { QuizList } from './QuizList/QuizList';
// import initialQuizItems from '../data.json';
// import { SearchBar } from './SearchBar/SearchBar';
// import { Container } from './Loyout';
// import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Loyout';

import { Component } from 'react';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, newQuiz],
      };
    });
  };

  getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state;
    const lowerCaseTopic = filters.topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
      if (filters.level === 'all') {
        return hasTopic;
      }
      return hasTopic && quiz.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;
    const visibleQuizItems = this.getVisibleQuizItems();

    return (
      <Container>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
        <GlobalStyle />
      </Container>
    );
  }
}
