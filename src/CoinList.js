import { Link } from "react-router-dom";
import { useCoin } from "./Context";

export function CoinList({search, title, zIndex, position, linkCallback}) {
  const coinList = useCoin().list

  return (
    <div className="search-result" style={{ zIndex, position }}>
      <div className="container-xxl">
        <p className="fs-1 pt-5 pb-2">{title}</p>
        <table className="table">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col" style={{ paddingLeft: '1.5rem' }}>Coin</th>
              <th scope="col">Price (CAD)</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {
              coinList.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).map((coin, idx) => (
                <tr key={coin.name}>
                  <th scope="row">{idx}</th>
                  <td>
                    <Link to={`/coins/${coin.id}`} className="nav-link" onClick={linkCallback}>
                      {coin.name}
                    </Link>
                  </td>
                  <td>${coin.current_price}</td>
                  <td>{coin.market_cap}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}