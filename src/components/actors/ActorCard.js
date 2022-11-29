import React from 'react';
import defaultUser from '../../Images/defaultUser.jpg';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ name, birthday, image, country, gender,deathday }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image?image.medium:defaultUser} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country.name}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
