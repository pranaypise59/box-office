import React from 'react'
import Noimage from '../../Images/Noimage.jfif'
import { StyledShowCard } from './ShowCard.styled';
import { Link } from 'react-router-dom';
import { Star } from '../styled';

const ShowCard = ({name, summary, id, country, image, onStarClick, isStarred}) => {
    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
      : 'No description';
  
    return (
      <StyledShowCard>
        <div className="img-wrapper">
          <img src={image?image.medium:Noimage} alt="show" />
        </div>
  
        <h1>{name}</h1>
  
        <p>{summaryAsText}</p>
  
        <div className="btns">
          <Link to={`/show/${id}`}>Read more</Link>
          <button type="button" onClick={onStarClick} ><Star active={isStarred}/></button>
        </div>
      </StyledShowCard>
    );
  };

export default ShowCard