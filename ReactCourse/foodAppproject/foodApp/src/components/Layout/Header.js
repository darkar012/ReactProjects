import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';

import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = () => {
    return (
        <Fragment>
            <header className={classes.header} >
                <div>ReactMeals</div>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']} >
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header;