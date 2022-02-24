import "styles/global.css";
import Form from "./Components/BasicForm";
import UI from "./Components/FormWithDiffrentUI";
import Watch from "./Components/UseWatch";
import UseFormState from "./Components/UseFormState";
import ErrorMessage from "./Components/ErrorMessage";
import DynamicForm from "./Components/DynamicForm";
function App(): JSX.Element {
  return (
    <div className="">
      <DynamicForm />
    </div>
  );
}

export default App;
