import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const getBorderColor = props => {
  switch (props.level) {
    case 'Beginner':
      return 'green';
    case 'Advanced':
      return 'blue';
    case 'Intermediate':
      return 'red';
  }
};

export const ListItem = styled.li`
  border: 10px solid ${getBorderColor};
  :hover {
    background-color: tomato;
  }
`;
