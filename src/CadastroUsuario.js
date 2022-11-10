import './cadastroUsuario.css';
import * as React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';

function App() {
  return (
    <div className="App">
      <form id='formulario'>
          <div id='titulo'>
            <h1>Cadastrar Usuário</h1>
          </div>
          <div id='inputs'>
            <TextField fullWidth margin='dense' id="outlined-basic" label="Nome Cliente" variant="outlined" />
            <TextField fullWidth margin='dense' id="outlined-basic" label="Telefone" variant="outlined" />
            <TextField fullWidth margin='dense' id="outlined-basic" label="Email" variant="outlined" />
            <TextField fullWidth margin='dense' id="outlined-basic" label="Empresa" variant="outlined" />
          </div>
          
        
          <div class='botao'>
            <Button variant='contained' color='secondary'>Salvar</Button>
          </div>
          <div class='botao'>
            <Button variant='Disabled' color='secondary'>Cancelar</Button>
          </div>
        </form>
    </div>
  );
}
export default App;
