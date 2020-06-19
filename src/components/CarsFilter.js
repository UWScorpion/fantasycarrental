import React from 'react'
import {useContext} from 'react'
import {CarContext} from '../context'
import Title from './Title'
const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}
export default function CarFilter({cars}) {
    const context = useContext(CarContext)
    const {
        handleChange,
        type, 
        capacity,
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        smoking, 
        pets
    } = context
    let types = getUnique(cars, 'type')
    types = ['all',...types]
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(cars, 'capacity')
    people = people.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search cars"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">car type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" 
                    onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Passengers</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" 
                    onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">
                        Reantal price ${price}/day
                    </label>
                    <input 
                    type="range" 
                    name="price" 
                    min={minPrice} 
                    max={maxPrice} 
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"
                    />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="size">car size</label>
                    <div className="size-inputs">
                        <input 
                        type="number" 
                        name="minSize" 
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                        <input 
                        type="number" 
                        name="maxSize" 
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        />
                    </div>
                </div> */}
                <div className="form-group">
                  
                        <div className="single-extra">
                            <input type="checkbox" name="smoking" id="smoking" checked={smoking} onChange={handleChange}/>
                            <label htmlFor="smoking" >Smoking</label>
                        </div>
                
                 
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                            <label htmlFor="pets" >Pets</label>
                        </div>
              
                </div>
       
           

            </form>
        </section>
    )
}
