import React, { useState, useEffect } from 'react'
import ShowGrid from '../components/shows/ShowGrid';
import Spinner from '../components/Spinner';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks'

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows]= useState(null)
  const [isLoading, setIsLoading]= useState(true)
  const [error, setError]= useState(null)


  useEffect(() => {
    if(starred && starred.length >0){
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises).then(apiData=>apiData.map(show=>({show}))).then(results=>{
        setShows(results);
        setIsLoading(false)
      }).catch(err=>{setError(err.message);setIsLoading(false)})
    }
    if(starred && starred.length ===0){
      setIsLoading(false);
    }
  
  }, [starred])
  
  return (
    <>
    {error && <div>Error Occured: {error}</div>}
    {!isLoading && !shows && <div style={{textAlign:'center',margin:'15%'}}>No shows were Added</div>}
    {!isLoading && !error && shows && <ShowGrid data={shows}/>}
    {isLoading && <Spinner/>}
    </>
  )
}

export default Starred