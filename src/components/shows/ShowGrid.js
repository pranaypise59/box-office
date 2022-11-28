import React from 'react'
import ShowCard from './ShowCard'
import { FlexGrid } from '../styled'
const ShowGrid = ({data}) => {
  return (
    <FlexGrid>
    {data.map(({show})=>{ return <ShowCard key={show.id} name={show.name} summary={show.summary} id={show.id} country={show.country} image={show.image} />})}
</FlexGrid>
  )
}

export default ShowGrid