import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({ no, display, text }) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos "));
    for (let i = 0; i < data.length; i++) {
      if (condition) {
      }
    }
  };

  return (
    <div className="todoitems">
      <div
        className="todoitems-container"
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" className="custom-img" />
        ) : (
          <img src={tick} alt="" className="custom-img" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icons" src={cross} alt="" />
    </div>
  );
};

export default TodoItems;
