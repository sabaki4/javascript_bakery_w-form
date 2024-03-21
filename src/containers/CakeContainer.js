import {useState} from "react";
import Cake from "../components/Cake";

//Created props
const CakeContainer = () => {
    const [lemonDrizzle, setLemonDrizzle] = useState({
        cakeName: "Lemon Drizzle", 
        ingredients: ["Eggs", "Butter", "Lemon zest", "Sugar", "Self-raising flour"],
        rating: 5});

    const [teaLoaf, setTeaLoaf] = useState({
        cakeName: "Tea Loaf", 
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3});

    const [brownie, setBrownie] = useState({
            cakeName: "Brownie", 
            ingredients: ["Chocolate", "Eggs", "Flour", "Butter", "Walnuts"],
            rating: 4});

    const [carrotCake, setCarrotCake] = useState({
        cakeName: "Carrot Cake", 
        ingredients: ["Carrots", "Walnuts", "Oil", "Cream cheese", "Flour", "Sugar"],
        rating: 5});


        return(
            <>
            <h2>Cakes</h2>
            <hr/>
            <Cake 
            name = {lemonDrizzle.cakeName}
             ingredients = {lemonDrizzle.ingredients} 
             rating = {lemonDrizzle.rating}/>

            <Cake 
            name = {teaLoaf.cakeName}
            ingredients = {teaLoaf.ingredients} 
            rating = {teaLoaf.rating}/>

            <Cake 
            name = {brownie.cakeName}
            ingredients = {brownie.ingredients} 
            rating = {brownie.rating}
            />

            <Cake 
            name = {carrotCake.cakeName}
            ingredients = {carrotCake.ingredients} 
            rating = {carrotCake.rating}
            />
            </>
        )

}
export default CakeContainer;