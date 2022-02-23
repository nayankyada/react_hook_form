import "styles/global.css";
import Form from "./Components/BasicForm";
import UI from "./Components/FormWithDiffrentUI";
import Watch from "./Components/UseWatch";
import UseFormState from "./Components/UseFormState";
import ErrorMessage from "./Components/ErrorMessage";
function App(): JSX.Element {
  return (
    <div className="">
      <ErrorMessage />
    </div>
  );
}

export default App;
