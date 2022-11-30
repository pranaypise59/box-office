import React, { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import ShowGrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const [isLoading, setIsLoading] = useState(false)
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    setIsLoading(true)
    apiGet(`/search/${searchOption}?q=${input}`).then((result) =>
      {setResults(result)
      setIsLoading(false)}
    );
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} isLoading={isLoading} />
      ) : (
        <ActorGrid data={results} isLoading={isLoading} />
      );
    }
    return null;
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <div>
      <SearchInput
        type='text'
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder='search for something'
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label='Shows'
            id='shows'
            name='status'
            value='shows'
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </div>
        <div>
            <CustomRadio
              label='People'
              id='people'
              name='status'
              value='people'
              onChange={onRadioChange}
            />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button onClick={onSearch}>Search</button>
      </SearchButtonWrapper>

      {results && renderResults()}
    </div>
  );
};

export default Home;
