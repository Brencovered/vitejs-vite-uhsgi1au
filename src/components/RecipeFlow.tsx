import React from "react";
import recipeUploadImg from "../assets/recipe-upload.png";
import syncBrandsImg from "../assets/sync-brands.png";
import purchaseCartImg from "../assets/purchase-cart.png";

const RecipeFlow: React.FC = () => {
  return (
    <section className="section section-gradient">
      <div className="section-inner">
        <h2 className="section-title">Recipe Creation &amp; Brand Partnerships</h2>
        <p className="section-kicker">How do they work?</p>

        <div className="recipe-flow">

          {/* RECIPE STEP */}
          <div className="recipe-step">
            <div className="pill pill-recipe">Recipe</div>
            <div className="recipe-card">

              {/* ← IMAGE GOES HERE */}
              <div className="recipe-card-image">
                <img
                  src={recipeUploadImg}
                  alt="Creator uploads recipe to Covered"
                />
              </div>

              <h3>Creator uploads recipe</h3>
              <p>
                Add your recipe, images, and instructions to Covered. It becomes
                discoverable to your community and new households.
              </p>
            </div>
          </div>

          {/* SYNC STEP */}
          <div className="recipe-step">
            <div className="pill pill-sync">Sync</div>
            <div className="recipe-card">

              {/* ← IMAGE GOES HERE */}
              <div className="recipe-card-image">
                <img
                  src={syncBrandsImg}
                  alt="Sync ingredients to brands and products"
                />
              </div>

              <h3>Sync ingredients to brands</h3>
              <p>
                Link ingredients to specific products and partner brands so
                shoppers can add everything to their cart in a single tap.
              </p>
            </div>
          </div>

          {/* PURCHASE STEP */}
          <div className="recipe-step">
            <div className="pill pill-purchase">Purchase</div>
            <div className="recipe-card">

              {/* ← IMAGE GOES HERE */}
              <div className="recipe-card-image">
                <img
                  src={purchaseCartImg}
                  alt="Users purchase items via supermarket carts"
                />
              </div>

              <h3>Users purchase items</h3>
              <p>
                Covered connects directly to supermarket carts, so your audience
                can cook your recipes and support you as they shop.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecipeFlow;
