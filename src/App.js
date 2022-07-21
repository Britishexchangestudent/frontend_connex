import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Header from "./components/Header";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
