import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return 'green';
    case 'advanced':
      return 'blue';
    case 'intermediate':
      return 'red';
    default:
      return 'black';
  }
};

export const ListItem = styled.li`
  border: 10px solid ${getBorderColor};
  :hover {
    background-color: tomato;
  }
`;
