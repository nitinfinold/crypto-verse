import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import LandingPage from './LandingPage';
import CoinPage from './CoinPage';
import { useEffect, useState } from 'react';
import CoinContext from './Context';

function App() {
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    (async () =>{
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      const json = await res.json()
      setCoinList(json);
    })()
  }, [])
  return (
    <CoinContext.Provider value={coinList}>
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route path="/coins/:id" component={CoinPage} exact />
            <Route path="/" component={LandingPage} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </CoinContext.Provider>
  );
}

export default App;
