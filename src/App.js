import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Navigation from "./Navigation";
import Error404 from "./pages/Error404";
import { useStateValue } from "./statemangement/StateProvider";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [state, dispatch] = useStateValue();
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users`
      );

      dispatch({
        type: "SET_USERS",
        value: [...state.users, { ...response.data }],
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (state.circles.length > state.users.length) {
      fetchUsers();
    }
  }, [state]);

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes path="/A2z-assingment">
        <Route path="/" element={<Task1></Task1>}></Route>

        <Route path="/task2" element={<Task2></Task2>}></Route>

        <Route path="/task3" element={<Task3></Task3>}></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
