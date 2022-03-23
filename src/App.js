import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import LandingPage from './LandingPage';
import CoinPage from './CoinPage';
import { useEffect, useState } from 'react';
import CoinContext from './Context';
import CoinsPage from './CoinsPage';
import Resources from './Resources';
import { Alert } from './Alert';

function App() {
  const [coinList, setCoinList] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type: 'success',
  });
  useEffect(() => {
    (async () => {
      let res
      let json
      try {
        res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        json = await res.json()
      }
      catch {
        res = await fetch(`/list-fallback.json`)
        json = await res.json()
      }
      setCoinList(json);
    })()
  }, [])

  const [coinNews, setCoinNews] = useState([]);
  useEffect(() => {
    (async () => {
      let res
      let json
      try {
        res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_55013c491e07acd3c5766ae3afc3603800d5&q=crypto&language=en&domain=cision`)
        json = await res.json()
      }
      catch {
        res = await fetch(`/news-fallback.json`)
        json = await res.json()
      }
      setCoinNews(json.results);
    })()
  }, [])
  return (
    <CoinContext.Provider value={{ list: coinList, news: coinNews, alert, setAlert }}>
      <BrowserRouter basename="/crypto-verse">
        <Layout >
          <Switch>
            <Route path="/coins/:id" component={CoinPage} exact />
            <Route path="/coins" component={CoinsPage} exact />
            <Route path="/resources" component={Resources} exact />
            <Route path="/" component={LandingPage} exact />
          </Switch>
          <Alert />
        </Layout>
      </BrowserRouter>
    </CoinContext.Provider>
  );
}

export default App;
