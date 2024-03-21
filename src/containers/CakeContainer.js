import {useState} from "react";
import Cake from "../components/Cake";

//Created props
const CakeContainer = () => {
    const [victoriaCake, setVictoriaCake] = useState({
        cakeName: "Victoria Sponge", 
        ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
        price: 5,
        rating: 5});

    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf", 
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        price: 2,
        rating: 3});

    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake", 
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        price: 8,
        rating: 5});

    //Created average rating
    const averageRating = ((victoriaCake.rating + teaLoaf.rating + carrotCake.rating) / 3);


        return(
            <>
            <h2>Cakes</h2>
            <hr/>
            <Cake 
            name = {victoriaCake.cakeName}
             ingredients = {victoriaCake.ingredients} 
             price = {victoriaCake.price}
             rating = {victoriaCake.rating}/>

            <Cake 
            name = {teaLoaf.cakeName}
            ingredients = {teaLoaf.ingredients} 
            price = {teaLoaf.price}
            rating = {teaLoaf.rating}/>

            <Cake 
            name = {carrotCake.cakeName}
            ingredients = {carrotCake.ingredients} 
            price = {carrotCake.price}
            rating = {carrotCake.rating}
            />

            <h3>Average Rating: {averageRating}</h3>
            </>
        )

}
export default CakeContainer;