import { Provider } from "react-redux";
import { Footer, Header, Home } from "../features";
import { Container } from "./components";
import { store } from "./store/store";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
