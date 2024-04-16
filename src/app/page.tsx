import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative w-dvw aspect-[656/300] max-h-full">
        <Image
          src="/images/image-omelette.jpeg"
          fill
          alt="omelette"
          style={{
            inset: " 0px",
            color: "transparent",
            filter: "invert(0)",
          }}
        />
      </div>
      <div className="flex flex-col px-8 py-10 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-young_serif text-4xl text-dark_charcoal font-normal">
            Simple Omelette Recipe
          </h1>
          <p className="text-body-regular">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="flex flex-col bg-snow p-6 gap-4 rounded-xl">
          <h5 className="text-dark_raspberry font-semibold text-xl leading-none">
            Preparation time
          </h5>
          <ul className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:top-16 *:marker:block list-inside pl-2 list-disc *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular">
            <li>
              <span className="font-bold">Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-heading-m">Ingredients</h5>
          <ul className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:top-16 *:marker:block list-inside pl-2 list-disc *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular">
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

        <div className="flex flex-col gap-4">
          <h5 className="text-heading-m">Instructions</h5>
          <ol className="gap-2 flex flex-col *:list-item *:marker:relative *:marker:top-16 *:marker:block list-inside pl-2 list-disc *:marker:text-dark_raspberry *:text-wenge_brown *:text-body-regular">
            <li>
              Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
              pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </li>
            <li>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              Add fillings (optional): When the eggs begin to set at the edges
              but are still slightly runny in the middle, sprinkle your chosen
              fillings over one half of the omelette.
            </li>
            <li>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </li>
            <li>
              Enjoy: Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        <hr className="h-px bg-white_coffee" />

        <div className="flex flex-col gap-4">
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
  );
}
