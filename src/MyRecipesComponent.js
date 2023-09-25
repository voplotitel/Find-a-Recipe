function MyRecipesComponents({ label, image, calories, ingredients, healthLabels }) {
    return (
        <div className="recipe-card">
            <div className="image-container">
                <img src={image} alt="recipe" />
            </div>
            <div className="recipe-details">
                <h2 className="recipe-title">{label}</h2>
                <div className="calories">
                    <strong>Calories:</strong> {calories.toFixed()} calories
                </div>
                <ul className="ingredient-list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient">{ingredient}</li>
                    ))}
                </ul>
                <div className="health-labels">
                    <strong>Health Labels:</strong>
                    <ul className="health-list">
                        {healthLabels.map((label, index) => (
                            <li key={index} className="health-item">{label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyRecipesComponents;