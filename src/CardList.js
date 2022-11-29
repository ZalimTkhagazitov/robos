import React from 'react'
import Card from './Card'
import { robots } from './robots'

const CardList = ({ props }) => {
    const cardTraverse = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>
    })
    
    return(
        <div>
            {cardTraverse}
        </div>
    )
}

export default CardList