import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-eggshell sm:py-[124px]">
      <main className="flex flex-col sm:max-w-[736px] sm:p-10 bg-white sm:rounded-3xl">
        <div className="relative w-full aspect-[656/300] max-h-full sm:rounded-xl">
          <Image
            src="/images/image-omelette.jpeg"
            fill
            alt="omelette"
            className="sm:rounded-xl"
            style={{
              inset: " 0px",
              color: "transparent",
              filter: "invert(0)",
            }}
          />
        </div>
        <div className="flex flex-col px-8 py-10 gap-8 sm:px-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-young_serif text-4xl text-dark_charcoal font-normal">
              Simple Omelette Recipe
            </h1>
            <p className="text-body-regular">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="flex flex-col bg-snow p-6 gap-4 rounded-xl sm:p-7 sm:gap-6">
            <h5 className="text-dark_raspberry font-semibold text-xl leading-none">
              Preparation time
            </h5>
            <ul className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:block list-inside pl-2 list-disc *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular">
              <li>
                <span className="font-bold">Total</span>: Approximately 10
                minutes
              </li>
              <li>
                <span className="font-bold">Preparation</span>: 5 minutes
              </li>
              <li>
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h5 className="text-heading-m">Ingredients</h5>
            <ul className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:block list-inside pl-2 list-disc *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <hr className="h-px bg-white_coffee" />

          <div className="flex flex-col gap-4 sm:gap-6">
            <h5 className="text-heading-m">Instructions</h5>
            <ol className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:w-4 *:float-left *:marker:block list-inside pl-2 list-decimal *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular [&_li_span]:font-bold">
              <li>
                <span>Beat the eggs</span>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan</span>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <span>Cook the omelette</span>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional)</span>: When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <span>Fold and serve</span>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <span>Enjoy</span>: Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ol>
          </div>

          <hr className="h-px bg-white_coffee" />

          <div className="flex flex-col gap-4 sm:gap-6">
            <h5 className="text-heading-m">Nutrition</h5>
            <p className="text-body-regular">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="flex flex-col *:flex *:flex-row *:border-b *:h-9 *:border-white_coffee *:*:flex *:*:flex-1 *:px-8 text-body-regular [&_div_div:nth-child(2)]:text-brandy_red">
              <div>
                <div>Calories</div>
                <div>277kcal</div>
              </div>
              <div>
                <div>Carbs</div>
                <div>0g</div>
              </div>
              <div>
                <div>Protein</div>
                <div>20g</div>
              </div>
              <div>
                <div>Fat</div>
                <div>22g</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
