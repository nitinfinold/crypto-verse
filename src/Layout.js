import { useState } from "react";
import { Link } from "react-router-dom";
import { useCoinList } from "./Context";

export default function Layout({ children }) {
  const [search, setSearch] = useState('')
  const coinList = useCoinList()
  console.log({ coinList })
  const searchResult = (
    search && (
      <div className="search-result">
        <div className="container-xxl">
          <p class="fs-1 pt-5 pb-2">Search Result</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Coin</th>
                <th scope="col">Price</th>
                <th scope="col">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {
                coinList.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).map((coin, idx) => (
                  <tr>
                    <th scope="row">{idx}</th>
                    <td>{coin.name}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.market_cap}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  )
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-xxl">
          <Link to="/" className="navbar-brand" >Crypto Verse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/coins/1" className="nav-link" >Coins</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={e => setSearch(e.target.value)} />
            </form>
          </div>
        </div>
      </nav>
      {searchResult}
      {children}
    </>
  )
}