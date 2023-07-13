import PropTypes from "prop-types";
import Button from './Button'

const Header = ({ title ,toggleAddTaskPopup,showAddtask }) => {
    const onClick = () => {
        console.log("CLick from Header")
        toggleAddTaskPopup()
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick = {onClick} color = {showAddtask ? 'red' : 'green'} text = {showAddtask ? 'Close' : 'Add'}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// CSS in Javascript
// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };

export default Header;
