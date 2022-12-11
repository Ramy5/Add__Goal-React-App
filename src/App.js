import CourseInput from "./component/courseInput/CourseInput";
import CourseList from "./component/courseList/CourseList";
import "./App.css";
import { useState } from "react";

/**
 * @constant
 * @type {object}
 */
const GOALS = [];

function App() {
  const [goals, setGoals] = useState(GOALS);

  const addGoalHandler = (taskValue) => {
    setGoals((prevState) => {
      const previous = [...prevState];
      previous.unshift({ id: Date.now().toString(), task: taskValue });
      return previous;
      // return [{ id: Date.now().toString(), task: taskValue }, ...prevState];
    });
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevState) => {
      const previous = [...prevState];

      // FILTER METHOD RETURNS A NEW ARRAY SO YOU SHOULD STORE IT IN A VARIABLE
      const newPrevious = previous.filter((goal) => goal.id !== id);
      return newPrevious;
    });
  };

  return (
    <div>
      <CourseInput onAddGoal={addGoalHandler} />
      <CourseList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </div>
  );
}

export default App;
