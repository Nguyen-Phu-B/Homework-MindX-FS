import { useContext } from "react";
import TaskContext from "./TaskContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Header = () => {
    const { count, showDone, setShowDone } = useContext(TaskContext);

    const handleOnclick = () => {
        setShowDone(!showDone);
    };
    return (
        <>
            {count > 0 ? (
                <div className="header">
                    You have {count} tasks left!
                    {!showDone ? (
                        <FaArrowDown
                            style={{ marginLeft: "20px", color: "red" }}
                            className="item-done-button"
                            onClick={() => handleOnclick()}
                        />
                    ) : (
                        <FaArrowUp
                            style={{ marginLeft: "20px", color: "red" }}
                            className="item-done-button"
                            onClick={() => handleOnclick()}
                        />
                    )}
                </div>
            ) : (
                <div className="header">Congratulations!!!</div>
            )}
        </>
    );
};

export default Header;
