import React from 'react';
import './Home.scss';

class Home extends React.Component {
    constructor() {
        super();
        this.state ={
            recipes : [],
        }
    }
    componentDidMount() {
        fetch('https://api.spoonacular.com/recipes/random?apiKey=d3cab70838f64ff6a97c94e899d1e693&number=6')
        .then(res => res.json())
        .then((data) => {
          this.setState({ recipes: data['recipes'] })
        })
        .catch(console.log)
    }
    render() {
        return (
            <div>
                <h2>Recipe spotlight</h2>
                <div>
                { 
                    this.state.recipes.map(
                        recipe => (
                            <div className="recipe-brief-result">
                                <h3>{recipe.title}</h3>
                                <div className="recipe-image col-sm-3"><img src={recipe.image} /></div>
                                <div className="col-sm-9"><span dangerouslySetInnerHTML={{ __html: recipe.summary }}></span></div>
                            </div>
                        )
                    )
                }
                </div>
            </div>
        );
    }
}
export default Home;