import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Policy from "./components/Policy";
import ContactUs from "./components/ContactUs";
import Refund from "./components/Refund";
import Terms from "./components/Terms";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/privacy-policy" element={<Policy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/terms-of-service" element={<Terms />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
