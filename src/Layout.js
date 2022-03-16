import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCoin } from "./Context";

export default function Layout({ children }) {
  const [search, setSearch] = useState('')
  useEffect(() => {
    document.body.style.overflowY = search ? 'hidden' : ''
  }, [search])
  const coinList = useCoin().list
  const searchResult = (
    search && (
      <div className="search-result">
        <div className="container-xxl">
          <p className="fs-1 pt-5 pb-2">Search Result</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" style={{ paddingLeft: '1.5rem' }}>Coin</th>
                <th scope="col">Price</th>
                <th scope="col">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {
                coinList.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).map((coin, idx) => (
                  <tr key={coin.name}>
                    <th scope="row">{idx}</th>
                    <td>
                      <Link to={`/coins/${coin.id}`} className="nav-link" onClick={() => setSearch('')}>
                        {coin.name}
                      </Link>
                    </td>
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
                <NavLink className="nav-link" activeClassName='active' to='/' exact>Home</NavLink>
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