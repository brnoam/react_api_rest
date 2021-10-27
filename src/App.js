import logo from './logo.svg';
import react, {useState} from "react";
import './App.css';
import api from './services/api';

function App() {


  const [usuario,setUsuario] = useState ("")
  const [dados,setDados] = useState ("")



 function  atribuirUsuario(e){

e.preventDefault();
setUsuario(e.target.value);



 }




function consultarUser(){

  let url = usuario + ''
  api.get (url).then(
    (Response) => {
      let objeto = JSON.stringify(Response.data);
      setDados (objeto)}
    ).catch(
      (err)=> {
    setDados ("Sinto muito mas não foi possível encontrar os dados do usuario informado")
      })


}



  return (
    <div className="App">
      
        
         <h1>Verificar Github</h1>   

      
      <div>
        <input type="text" name="usuario" onChange={(e)=> atribuirUsuario(e)} />
        <button onClick={()=> consultarUser()} >Procurar</button>
       </div>

       <div name="resultado">

          {dados}

       </div>





    </div>
  );
}

export default App;
