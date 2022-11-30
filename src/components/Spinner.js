import React from 'react';
import { SpinnerWrapper } from './Spinner.styled';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div class='content'>
        <div class='loading'>
          <p>loading</p>
          <span></span>
        </div>
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
