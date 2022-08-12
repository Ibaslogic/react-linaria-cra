import React from 'react';
// import { css, cx } from '@linaria/core';
import { cx } from '@linaria/core';
import { css } from '@linaria/atomic';
import { styled } from '@linaria/react';

const App = () => {
  return (
    <>
      <h1 className={eleStyle}>
        Hello React <span>world!</span>
      </h1>

      <p className={cx(class1, class2)}>
        Using the cx helper function
      </p>

      <Button primary>click me</Button>
      <FancyButton>Another button</FancyButton>
      <FancyButton success>Success</FancyButton>
    </>
  );
};

export default App;

// css tagged template

const objStyle = {
  paddingTop: '3rem',
};

const eleStyle = css`
  color: red;
  font-size: 3rem;

  ${objStyle}

  span {
    color: green;
  }

  @media (min-width: 768px) {
    color: violet;
  }
  &:hover {
    background-color: black;
  }
`;

const class1 = css`
  text-transform: capitalize;
  background-color: blue;
`;
const class2 = css`
  color: white;
  background-color: green;
`;

// end css tagged template

// styled tag begins

const Button = styled.button`
  /* background-color: blue; */
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  margin-right: 3px;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? 'blue' : props.success ? 'green' : 'red'};
`;

const FancyButton = styled(Button)`
  /* background-color: black; */
  text-decoration: underline;
`;
