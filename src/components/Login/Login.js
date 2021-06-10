import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const FaseUm = ({retornaValor}) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [valor, setValor] = useState();

  return (
    <div>
      Insira um número para receber o código de Autenticação<br /><br />
      <div>
        Celular < br/>
        <input value={valor} onInput={e => setValor(e.target.value)}/>
      </div>

      
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={'Receber Código de Autenticação'} 
      onClick={e => retornaValor(valor)} disabled={loading} /><br />
    </div>
  );
}



const FaseDois = ({valor}) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [codigo, setCodigo] = useState();
  const [show, setShow] = useState(false)

  const handleLogin = () => {
    setShow(true)
  }

  const handleLogout=() => {
    setShow(false);
    props.history.push('/login');
  }
  
  return (
    <>
    {
    !show? 
      <div>
        Insira o código que recebeu em {valor}<br /><br />

        <div>
          Código de Autenticação<br />
          <input value={codigo} onInput={e => setCodigo(e.target.value)}/>
        </div>    
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type="button" value={'Autenticar'} onClick={handleLogin}/><br />

      </div> 
        : 
      <div>
          Seu número de celular é {valor} e o seu código de autenticação {codigo} <br /><br />
          <input type="button" value={'Logout'} onClick={handleLogout}/>
      </div>
    }
    </> 
  );
 }

const Login = (props) => {   
  const [phone, setPhone] = useState('')
  
  return (
    <div>
      {phone? <FaseDois valor={phone}/> : <FaseUm retornaValor={setPhone}/>}
    </div>
  );
}

export default Login;