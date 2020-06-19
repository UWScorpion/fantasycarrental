import React from 'react'
import Car from './Car'
import car from './Car'

export default function ({cars}) {
    if (car.length === 0){
            return (
                <div className="empty-search">
                    <h3>No Car</h3>
                </div>
            )
    }
    return (
        <section className="carlist">

            <div className="carslist-center">
                {
                    cars.map(item=>{
                        return <Car key={item.id} car={item}/>
                    })
                }
            </div>
        </section>
    )
}
