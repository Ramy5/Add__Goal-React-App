import { useState } from "react";
import Button from "../UI/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [goal, setGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  let labelText = "Course Goal";
  if (!isValid) labelText = "Wrong Value!";

  const getGoalValue = (e) => {
    setGoal(e.target.value);
    setIsValid(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (goal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <div className={styles["course__input"]}>
      <form
        className={`${styles["course__input-form"]} ${
          !isValid && styles.invalid
        }`}
        onSubmit={submitForm}
      >
        <label>{labelText}</label>
        <input type="text" value={goal} onChange={getGoalValue} />
        <Button>Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
