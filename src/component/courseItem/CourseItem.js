import styles from "./CourseItem.module.css";

const CourseItem = (props) => {
  const getElementId = () => props.filtering(props.id);

  return (
    <div id={props.id} className={styles["course-item"]} onClick={getElementId}>
      <p>{props.text}</p>
    </div>
  );
};

export default CourseItem;
