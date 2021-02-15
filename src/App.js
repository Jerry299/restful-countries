import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/NavHeader/NavHeader";
import AllCountries from "./components/AllCountries/AllCountries";

function App() {
  return (
    <Router>
      <NavHeader />
      <AllCountries />
      <Switch></Switch>
    </Router>
  );
}

export default App;

// const BlogPosts = {
//   1: {
//     title: "First Blog Post",
//     description: "Lorem ipsum dolor sit amet, consectetur adip.",
//   },
//   2: {
//     title: "Second Blog Post",
//     description: "Hello React Router v6",
//   },
// };
// <ul>
//       {Object.entries(BlogPosts).map(([slug, { title }]) => (
//         <li key={slug}>
//           <h3>{title}</h3>
//           {console.log(slug)}
//         </li>
//       ))}
//     </ul>
