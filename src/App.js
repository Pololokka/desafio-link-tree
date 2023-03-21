import "./App.css";
import MostraImagem from "./Components/Imagem/Index";
import Links from "./Components/Links/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo titulo-hover">Link Tree Customizável</h1>
      </header>

      <main className="main__container">
        <MostraImagem />
        <Links />
      </main>
    </div>
  );
}

export default App;
