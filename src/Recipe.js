import React from "react";
// import style from "./recipe.module.css";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";

const Recipe = ({ title, calories, image, ingredients,viewRecipe,cuisineType }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-2 d-inline-flex">
      <div className="row">
        <div className="">
          <div className="card pr-3 p-2 m-3" style={{boxShadow: '0px 3px 10px rgb(71, 71, 71)',minWidth:"20em"}}>
          <img src={image} className="card-img-top m-1" alt="..."/>

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="">Cuisine Type: {cuisineType}</p>

              <p className="">Calories: {calories}</p>

              <ul className="list-styled">
                {ingredients.map((ingredient) => (
                  <li  key={Math.floor(Math.random()*10000)} className="text-wrap">{ingredient.text}</li>
                ))}
              </ul> <div className="d-flex justify-content-center">
              <a className="btn btn-lg mt-2" style={{color:"white" ,background :"coral"}} href={viewRecipe} role="button">View Recipe</a>
          </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
