import React from 'react'
import ActorCard from './ActorCard'
import { FlexGrid } from '../styled'

const ActorGrid = ({data}) => {
  return (
    <FlexGrid>
        {data.map(({person})=>{ return <ActorCard key={person.id} name={person.name} birthday={person.birthday} deathday={person.deathday} gender={person.gender} country={person.country} image={person.image} />})}
    </FlexGrid>
  )
}

export default ActorGrid