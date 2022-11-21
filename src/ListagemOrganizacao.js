import './ListagemOrganizacao.css';
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
    organizacao,
    telefone,
    segmento,
    grupo,
  ) {
    return { organizacao, telefone, segmento, grupo};
  }
  
  const rows = [
    createData('CMTech', '+55 (81) 0 0000-0000', 'Técnologia da informacao', 'CMTech'),
    createData('CMTech', '+55 (81) 0 0000-0000', 'Técnologia da informacao', 'CMTech'),
    createData('CMTech', '+55 (81) 0 0000-0000', 'Técnologia da informacao', 'CMTech'),
    createData('CMTech', '+55 (81) 0 0000-0000', 'Técnologia da informacao', 'CMTech'),
    createData('CMTech', '+55 (81) 0 0000-0000', 'Técnologia da informacao', 'CMTech'),
  ];

function App() {
  return (
    <div className="App">
      <div id='header'>
          <h1>Organização</h1>
        <Button variant='contained' color='secondary'>Adicionar</Button>
      </div>
      <div id='tabela'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Organização</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Segmento</TableCell>
            <TableCell>Grupo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.organizacao}</TableCell>
              <TableCell >{row.telefone}</TableCell>
              <TableCell >{row.segmento}</TableCell>
              <TableCell >{row.grupo}</TableCell>
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
