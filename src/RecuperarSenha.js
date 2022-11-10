import './RecuperarSenha.css';
import * as React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <form id='formulario'>
            <div id='titulo'>
                <h1>Recuperar Senha</h1>
            </div>
          <div id='inputs'>
            <TextField fullWidth margin='dense' id="outlined-basic" label="Digite o email cadastrado" variant="outlined" />
          </div>
          <div id='botao'>
            <Button variant='contained' color='secondary'>Enviar</Button>
          </div>
          <div id='link'>
            <a href='#'>Cancelar</a>
          </div>
        </form>
    </div>
  );
}
export default App;
