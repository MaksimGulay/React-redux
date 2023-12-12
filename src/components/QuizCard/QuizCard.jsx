import { Topic, Wrapper, Text } from './QuizCard.styled';

// глибока деструктутизація
export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
      <Text>Level: {level}</Text>
      <Text>Time: {time} min</Text>
      <Text>Questions: {questions}</Text>
    </Wrapper>
  );
};

// export const QuizCard = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.topic}</h2>
//       <p>Level: {item.level}</p>
//       <p>Time: {item.time} min</p>
//       <p>Questions: {item.questions}</p>
//     </div>
//   );
// };
