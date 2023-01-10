import { useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import Form from "./components/Form";
import { FormContext } from "./Context/FormContext";

function App() {
  const [showCountDown, setShowCountDown] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const [second, setSeconds] = useState('')
  const [minute, setMinutes] = useState('')
  const [hour, setHours] = useState('')

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="h-full w-full flex justify-center items-center">
        <FormContext.Provider value={{second, setSeconds, minute, setMinutes, hour, setHours, setShowCountDown, setShowForm}}>
          {showCountDown ? <Countdown /> : <Form />}
        </FormContext.Provider>
      </div>
    </div>
  );
}

export default App;
