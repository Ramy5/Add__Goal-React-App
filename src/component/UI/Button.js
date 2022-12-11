// import styled from "styled-components";
import styles from "./Button.module.css";

// const Button = styled.button`
//   background-color: #8b005d;
//   color: #fff;
//   padding: 8px 1.5rem;
//   font-size: 1.1rem;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background-color: #ac0e77;
//   }
// `;

const Button = (props) => {
  return (
    <div>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
};

export default Button;
