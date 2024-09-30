import "./FoodItem.css"
import React, {useContext} from "react";
import {assets} from "../../assets/assets.ts";
import {StoreContext} from "../../context/StoreContext.tsx";

interface FoodItemProps {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
}

export const FoodItem: React.FC<FoodItemProps> = ({_id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt=""/>
                {!cartItems[_id]
                    ? <img
                        className='add'
                        onClick={() => addToCart(_id)}
                        src={assets.add_icon_white}
                        alt="Add to shopping cart"
                    />
                    : <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(_id)}
                            src={assets.remove_icon_red}
                            alt="delete from shopping cart"
                        />
                        <p>{cartItems[_id]}</p>
                        <img
                            onClick={() => addToCart(_id)}
                            src={assets.add_icon_green}
                            alt="add another one to shopping cart"
                        />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt=""/>
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}