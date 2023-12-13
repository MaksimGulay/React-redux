// import { QuizList } from './QuizList/QuizList';
// import initialQuizItems from '../data.json';
// import { SearchBar } from './SearchBar/SearchBar';
// import { Container } from './Loyout';
// import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { QuizList } from './QuizList/QuizList';
// import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Loyout';
import { Component } from 'react';
import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { fetchQuizzes } from 'api';

const localStorageKey = 'quiz-filters';

const intialFilters = {
  topic: '',
  level: 'all',
};

export class App extends Component {
  state = {
    quizItems: [],
    filters: intialFilters,
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }
    const quizItems = await fetchQuizzes();
    this.setState({ quizItems });
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters: prevFilters } = prevState;
    const { filters: nextFilters } = this.state;

    if (prevFilters !== nextFilters) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextFilters));
    }
  }

  resetFilters = () => {
    this.setState({
      filters: intialFilters,
    });
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
        <SearchBar onReset={this.resetFilters}>
          <TopicFilter
            value={filters.topic}
            onChange={this.changeTopicFilter}
          />
          <LevelFilter
            value={filters.level}
            onChange={this.changeLevelFilter}
          />
        </SearchBar>

        <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />

        <GlobalStyle />
      </Container>
    );
  }
}
