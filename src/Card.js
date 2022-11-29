import React from 'react'

const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa 3 ma2 grow bw2 shadow-5'>
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