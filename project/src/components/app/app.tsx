import MainScreen from "../../pages/main";
import * as React from "react";

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return <MainScreen placesCount={placesCount}/>;
}

export default App;
