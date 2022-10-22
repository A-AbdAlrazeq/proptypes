import "./App.css";
import Component from "./Component";
/* we can use typeScript or propTypes to avoid datatype bug ,but sometimes the overhead of adding typescript is too much if you want to small type checking*/
function App() {
  return <Component person={{ name: "abood", age: "12" }} />;
}

export default App;
