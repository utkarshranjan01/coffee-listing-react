import { useState } from 'react';
import style from './ListingBox.module.css'
import Items from './Items';

function ListingBox() {

    const [isActive, setIsActive] = useState(1);

    function handleClick(value) {
        if(isActive == value) {
            setIsActive(0);
        } else {
            setIsActive(value);
        }
    }

    return (
        <div className={style.mainBox} >
            <div className={style.design}></div>
            <div className={style.textBox}>
                <div className={style.headingText}>Our Collection</div>
                <div className={style.description}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</div>
            </div>
            <div className={style.buttonBox}>
                <div onClick={() => handleClick(1)} className={` ${style.btn} ${isActive == 1 ? style.active: ""} `} >All Products</div>
                <div onClick={() => handleClick(2)} className={` ${style.btn} ${isActive == 2 ? style.active: ""} `} >Available Now</div>
            </div>
            <Items isActive={isActive}></Items>
        </div>
    )
}
export default ListingBox;