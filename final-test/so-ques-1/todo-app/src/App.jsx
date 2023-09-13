import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import GlobalState from "./GlobalState";
import TaskContext from "./TaskContext";
import TodoList from "./TodoList";
import Header from "./TodoListHeader";

function App() {
    const [count, setCount] = useState(0);

    return (
        <GlobalState>
            <div className="App">
                <div className="container">
                    <Header />
                    <TodoList />
                    <Form />
                </div>
                <Footer />
            </div>
        </GlobalState>
    );
}

export default App;
