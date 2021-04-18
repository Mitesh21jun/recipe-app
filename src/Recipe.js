import React from "react";
// import style from "./recipe.module.css";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 pb-2 d-inline-flex">
      <div className="row">
        <div className="">
          <div className="card pr-2" style={{width : "20rem", boxShadow: '0px 3px 10px rgb(71, 71, 71)'}}>
          <img src={image} className="card-img-top m-1" alt="..."/>

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="lead">Calories :{calories}</p>

              <ul className="list-styled">
                {ingredients.map((ingredient) => (
                  <li  key={Math.floor(Math.random()*10000)} className="text-wrap">{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
