import "./FoodDisplay.css"
import React, {useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import {FoodItem} from "../FoodItem/FoodItem.tsx";

interface FoodDisplayProps {
    category: string;
}

export const FoodDisplay: React.FC<FoodDisplayProps> = ({category}) => {

    const {food_list} = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || item.category === category) {
                        return <FoodItem
                            key={index}
                            _id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    }
                })}
            </div>
        </div>
    )
}