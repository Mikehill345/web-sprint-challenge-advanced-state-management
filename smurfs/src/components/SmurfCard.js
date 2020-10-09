import React from 'react'


const SmurfCard = ({ smurfs }) => {
    console.log('inside smurfCard',smurfs)
    return (
        <div className='smurfCard'>
            <h2>{smurfs.name}</h2>
            <p>Age: {smurfs.age}</p>
            <p>Height: {smurfs.height}</p>
        </div>
    )
}

export default SmurfCard
