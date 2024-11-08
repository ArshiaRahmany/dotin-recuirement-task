import React from "react";
import { Provider } from "react-redux";
import Routers from "routes/Router";
import store from "hooks/useRedux";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Routers />
      <ToastContainer
          rtl
          transition={Slide}
          style={{ zIndex: "20000", fontFamily: "YekanBakhRegular" }}
        />
    </Provider>
  );
}

export default App;
