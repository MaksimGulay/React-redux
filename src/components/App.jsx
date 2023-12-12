import { QuizList } from './QuizList/QuizList';
import quizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Loyout';
import {
  HiAcademicCap,
  HiAdjustmentsHorizontal,
  HiArchiveBox,
} from 'react-icons/hi2';
import { IconButton } from './IconButton/IconButton';

export const App = () => {
  return (
    <Container>
      <SearchBar />
      <QuizList items={quizItems} />
      <IconButton variant="primary" size="sm">
        <HiAcademicCap />
      </IconButton>
      <IconButton variant="secondary" size="md">
        <HiAdjustmentsHorizontal />
      </IconButton>
      <IconButton variant="secondary" size="lg">
        <HiArchiveBox />
      </IconButton>

      <GlobalStyle />
    </Container>
  );
};
