import './UserList.css';
import * as React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    nome,
    perfil,
    departamento,
    status,
  ) {
    return { nome, perfil, departamento, status};
  }
  
  const rows = [
    createData('João Paulo', 'Gestor', 'Suporte', 'Disponivel'),
    createData('João Paulo', 'Gestor', 'Suporte', 'Disponivel'),
    createData('João Paulo', 'Gestor', 'Suporte', 'Disponivel'),
    createData('João Paulo', 'Gestor', 'Suporte', 'Disponivel'),
    createData('João Paulo', 'Gestor', 'Suporte', 'Disponivel'),
  ];

function App() {
  return (
    <div className="App">
      <div id='header'>
        <ul>
            <li><TextField margin="normal" id="nome" label="Nome" variant="outlined" /></li>
            <li><TextField margin="normal" id="cargo" label="Cargo" variant="outlined" /></li>
            <li><TextField margin="normal" id="setor" label="Setor" variant="outlined" /></li>
            <li><Button variant="contained" color="secondary" size='large'>Filtrar</Button></li>
        </ul>
      </div>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Perfil</TableCell>
            <TableCell align="right">Departamento</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.perfil}</TableCell>
              <TableCell align="right">{row.departamento}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}
export default App;
