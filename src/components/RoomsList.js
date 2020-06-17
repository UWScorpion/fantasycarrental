import React from 'react'
import Room from './Room'
import room from './Room'
export default function ({rooms}) {
    if (room.length === 0){
            return (
                <div className="empty-search">
                    <h3>No Car</h3>
                </div>
            )
    }
    return (
        <section className="roomlist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    )
}
