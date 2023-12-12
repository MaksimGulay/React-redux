// глибока деструктутизація
export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <div>
      <h2>{topic}</h2>
      <p>Level: {level}</p>
      <p>Time: {time} min</p>
      <p>Questions: {questions}</p>
    </div>
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
