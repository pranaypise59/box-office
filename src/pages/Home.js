import React, { useState } from 'react';
import { apiGet } from '../misc/config';
const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null)
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
   apiGet(`/search/shows?q=${input}`).then(result =>setResults(result))
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
const renderResults =()=>{
  if(results && results.length === 0){
    return (<div>No Results</div>)
  }
  if(results && results.length >0){
    return (<div>{results.map((item)=><div key={item.show.id}>{item.show.name}</div>)}</div>)
  }
  return null;
}
  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSearch}>Search</button>
      {results && renderResults()}
    </div>
  );
};

export default Home;
