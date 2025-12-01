
import { FC } from "react";
import recipeCreateImg from "../assets/recipe-create.png";
import syncBrandsImg from "../assets/sync-brands.png";
import orderFromRecipeImg from "../assets/order-from-recipe.png";

const RecipeFlow: React.FC = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="orange-tile">
          <h2 className="section-title">Recipe Creation &amp; Brand Partnerships</h2>
          <p className="section-kicker">How do they work?</p>
        </div>

        <div className="recipe-flow">
          {/* RECIPE STEP */}
          <div className="recipe-step">
            <div className="pill pill-recipe">Recipe</div>
            <div className="recipe-card">
              <div className="recipe-card-image">
                <img
                  src={recipeCreateImg}
                  alt="Creator uploads recipe"
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
              <div className="recipe-card-image">
                <img
                  src={syncBrandsImg}
                  alt="Sync ingredients to brands"
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
              <div className="recipe-card-image">
                <img
                  src={orderFromRecipeImg}
                  alt="Users purchase items"
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
