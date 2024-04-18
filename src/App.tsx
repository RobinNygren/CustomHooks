import "./App.scss";
import ApiFetcher from "./components/ApiFetcher/ApiFetcher";
import CounterComponent from "./components/CounterComponent/CounterComponent";
import DebounceColorBox from "./components/DebounceColorBox/DebounceColorBox";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  return (
    <>
      <CounterComponent initialValue={0} minValue={-10} maxValue={1000} />
      {/* <CounterComponent initialValue={25} minValue={-50} maxValue={250} />
      <CounterComponent initialValue={100} minValue={-200} maxValue={500} /> */}
      <ApiFetcher url="https://emojihub.yurace.pro/api/random" />
      <ToggleButton initialOn={true} onText="Enabled" offText="Disabled" />
      <ToggleButton initialOn={false} onText="Active" offText="Inactive" />
      <DebounceColorBox />
    </>
  );
}

export default App;
