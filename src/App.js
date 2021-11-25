import "./App.css";

function App() {
  // const [altura,setAltura] = useState();
  // const [comprimento,setComprimento] = useState();

  function valorAltura() {
    const altura = "10px";
    return (
      <div className="altura">
        <label for="altura">Altura</label>
        <br />
        <input  className="altura"type="text" value={altura} id="altura" readOnly="true" />
      </div>
    );
  }

  function valorComprimento() {
    const comprimento = "10px";
    return (
      <div className="comprimento">
        <label for="comprimento">Comprimento</label>
        <br />
        <input  className="altura" type="text" value={comprimento} readOnly="true" />
      </div>
    );
  }

  return (
    <div className="box" id="box">
      {valorAltura()}
      {valorComprimento()}
    </div>
  );
}

export default App;
