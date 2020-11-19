import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { CookiesProvider } from "react-cookie";

const store = ConfigureStore();

function App() {
  return (
    <div>
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
