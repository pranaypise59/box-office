import React, { useState } from 'react';
import ActorGrid from '../components/actors/ActorGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) =>
      setResults(result)
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
      return results[0].show ? <ShowGrid data={results}/> : <ActorGrid data={results}/>
    }
    return null;
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder='search for something'
      />

      <div>
        <label htmlFor='shows'>
          Shows
          <input
            type='radio'
            id='shows'
            name='status'
            value='shows'
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor='people'>
          People
          <input
            type='radio'
            id='people'
            name='status'
            value='people'
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button onClick={onSearch}>Search</button>

      {results && renderResults()}
    </div>
  );
};

export default Home;
