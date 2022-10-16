import Card from "./components/Card";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css";

function App() {
  return (
    <div className="content text-center flex-column ">
      <Header />
      <Card />
    </div>
  );
}

export default App;
