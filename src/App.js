import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LogInCard from "./components/LogInCard";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <LogInCard />
      </body>
    </div>
  );
}

export default App;
