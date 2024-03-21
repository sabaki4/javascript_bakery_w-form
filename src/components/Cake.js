const Cake = ({name, ingredients, price, rating}) => {


    return (
        <>
        <h2>{name}</h2>
        <h3>Ingredients: </h3>
        <ul>
            {ingredients.map(ingredient => {
                return <li>{ingredient}</li>
            })}
        </ul>
        <h4>Price: {price}</h4>
        <h4>Rating: {rating}</h4>
        </>
    
    )}
    
    export default Cake;