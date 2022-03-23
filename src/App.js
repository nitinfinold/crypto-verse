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

function App() {
  const [coinList, setCoinList] = useState([]);
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
    <CoinContext.Provider value={{ list: coinList, news: coinNews }}>
      <BrowserRouter basename="/crypto-verse">
        <Layout >
          <Switch>
            <Route path="/coins/:id" component={CoinPage} exact />
            <Route path="/coins" component={CoinsPage} exact />
            <Route path="/resources" component={Resources} exact />
            <Route path="/" component={LandingPage} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </CoinContext.Provider>
  );
}

export default App;
