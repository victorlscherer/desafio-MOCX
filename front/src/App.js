import './App.css';
import Header from './components/Header';
import ClientCard from './components/ClientCard';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from './services/api';
import { toast } from 'react-toastify';




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

  const getClients = () => {
    api.get('/clients')
      .then(response => {
        setData(response.data)
      }
      )
      .catch(error => {
        console.log(error)
        toast(`${error.response.data.error}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      )
  }

  useEffect(() => {
    getClients()
  }, [])


  return (
    <div className="App">
      <Header getClients={getClients} />
      <Box sx={style.box}>
        <Grid container spacing={2} xs={12} sx={style.grid}>
          {data && data.map(client => (
            <ClientCard key={client._id} client={client} getClients={getClients} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
