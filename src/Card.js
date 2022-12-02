import React from 'react'

const Card = (props) => {
  return (
    <div className='tc bg-light-green dib br4 pa3 ma3 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${props.id}`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.username}</p>
      </div>
    </div>
  )
}

export default Card
