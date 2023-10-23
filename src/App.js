import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText="CLICCAMI!" />
      <ImageComponent imageSrc="https://picsum.photos/200" />
    </div>
  );
}

export default App;
