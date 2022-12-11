import CourseItem from "../courseItem/CourseItem";

const CourseList = (props) => {
  const filteringElement = (id) => props.onDeleteGoal(id);

  return (
    <div>
      {props.goals.map((goal) => (
        <CourseItem
          key={goal.id}
          text={goal.task}
          id={goal.id}
          filtering={filteringElement}
        />
      ))}
    </div>
  );
};

export default CourseList;
