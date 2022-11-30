import React from 'react';
import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';
import Spinner from '../Spinner';

const ActorGrid = ({ data, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <FlexGrid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            country={person.country}
            image={person.image}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorGrid;
