import { useState } from "react";
import "./App.css";
import { TextInput } from "../components/TextInput";

function App() {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <div className="card">
          <TextInput
            handleChange={handleTextChange}
            inputValue={text}
            label="Text Input"
          />

          <TextInput
            label="Search Input"
            type="search"
            handleChange={(event) => {
              console.log(event);
              setSearch(event.target.value);
            }}
            inputValue={search}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              console.log("CLICKED!");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
