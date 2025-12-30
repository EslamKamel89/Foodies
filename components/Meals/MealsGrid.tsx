import { Meal } from "@/initdb";
import MealItem from "./MealItem";

const MealsGrid: React.FC<{ meals: Meal[] }> = ({ meals }) => {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
