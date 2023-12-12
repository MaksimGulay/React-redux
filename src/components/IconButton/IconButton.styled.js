import styled from 'styled-components';

const btnSize = {
  sm: 24,
  md: 36,
  lg: 48,
};

const getSize = props => `${btnSize[props.size]}px`;

// const getSize = props => {
//   switch (props.size) {
//     case 'sm':
//       return '24px';
//     case 'md':
//       return '36px';
//     case 'lg':
//       return '48px';
//     default:
//       return '24px';
//   }
// };

export const Button = styled.button`
  width: ${getSize};
  height: ${getSize};
  padding: 0;
  margin: 0;

  color: ${props => (props.variant === 'primary' ? 'red' : 'blue')};

  svg {
    width: 100%;
    height: 100%;
  }
`;
