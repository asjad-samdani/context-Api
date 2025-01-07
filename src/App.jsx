// import Item from "./component/Item";
// import Cart from "./component/Cart";
// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <Item name="MacBook Pro" price={790} />
//       <Item name="Pandrive Pro" price={5} />
//       <Item name="Google Pixels" price={50} />
//       <Item name="Lenovo ThinkPad" price={90} />
//       <Cart />
//     </>
//   );
// };

// export default App;

import "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./component/Header";
import ThemeToggler from "./component/ThemeToggler";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default App;
