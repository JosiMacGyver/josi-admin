import React, { useState } from 'react';

function Login(props) {
    const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/');
  }

  return (
    <div>
      Insira o código que recebeu em <br /><br />
      <div>
        Código de Autenticação<br />
        <input />
      </div>
      
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Autenticar'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}



const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;