import './App.css';
import Header from './components/Header';
import ClientCard from './components/ClientCard';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from './services/api';




const style = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
  }
}

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    api.get('/clients')
      .then(response => {
        console.log(response)
      }
      )
      .catch(error => {
        console.log(error)
      }
      )
  })
  return (
    <div className="App">
      <Header />
      <Box sx={style.box}>
        <Grid container spacing={2} xs={12} sx={style.grid}>
          {/* {data.map(client => (
            <ClientCard key={client.id} client={client} />
          ))} */}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
