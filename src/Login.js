import './Login.css';
import * as React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <form id='formulario'>
          <div id='titulo'>
            <h1>Acesso</h1>
          </div>
          <div id='inputs'>
            <TextField fullWidth margin='dense' id="outlined-basic" label="Login" variant="outlined" />
            <TextField fullWidth margin='dense' id="outlined-basic" label="Senha" variant="outlined" />
          </div>
          <div id='botao'>
            <Button variant='contained' color='secondary'>Entrar</Button>
          </div>
          <div id='link'>
            <a href='#'>Esqueci minha senha</a>
          </div>
        </form>
    </div>
  );
}
export default App;
