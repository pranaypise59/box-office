import React from 'react';
import ShowCard from './ShowCard';
import { FlexGrid} from '../styled';
import { useShows } from '../../misc/custom-hooks';
// import FadeIn from 'react-fade-in';

const ShowGrid = ({ data }) => {

   const [starredShows, dispatchStarred] = useShows()
  return (
    <FlexGrid>
      {data.map(({ show }) => {

        const isStarred = starredShows.includes(show.id);

        const onStarClick =()=>{
          if(isStarred){
            dispatchStarred({type:'REMOVE', showId: show.id})
          }else{
            dispatchStarred({type:'ADD', showId:show.id})
          }
        }
        return (
          <ShowCard
            key={show.id}
            name={show.name}
            summary={show.summary}
            id={show.id}
            country={show.country}
            image={show.image}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
