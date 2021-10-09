import { useState } from "react";
import "./App.css";
import Main from "./Components/CallbackandMemo/main";
import Counter from "./Components/Counter/Counter";
import Effect from "./Components/UseEffect/Effect";

function App() {
  console.log("app rendered");
  // const quantites = [1, 2, 4];
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h2>hello there</h2>
      {/* <Text></Text>
   //render props   <MainCounter 
        render={(counter, incrementCounter) => (
          <Counter
            counter={counter}
            incrementCounter={incrementCounter}
          ></Counter>
        )}
      ></MainCounter> */}
      {/* <MainCounter
        render={(counter, incrementCounter) => (
          <Hover count={counter} incrementCounter={incrementCounter}></Hover>
        )}
      ></MainCounter>
      <Todo></Todo>
      <Timer></Timer> */}
      <Counter name="hel"></Counter>
      {/* <Hover></Hover>  */}
      {/* <Form></Form> */}
      {/* <Calculator></Calculator> */}
      {/* <ClockList quantities={quantites}></ClockList> */}
      {/* <ClassComponents locale="bn-BD"></ClassComponents> */}
      <h1>functional counter</h1>
      <div>{show && <Effect></Effect>}</div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}
      </button>
      <Main></Main>
    </div>
  );
}

export default App;
