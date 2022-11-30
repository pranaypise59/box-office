import React from 'react';
import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/custom-hooks';
import Spinner from '../Spinner';

const ShowGrid = ({ data, isLoading }) => {
  const [starredShows, dispatchStarred] = useShows();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <FlexGrid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        };
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
