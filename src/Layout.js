import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { CoinList } from "./CoinList";
import { useCoin } from "./Context";
import Sidebar from "./Sidebar";



export default function Layout({ children }) {
  const { user } = useCoin();

  const [search, setSearch] = useState('')
  useEffect(() => {
    document.body.style.overflowY = search ? 'hidden' : ''
  }, [search])
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
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' to='/coins' exact>All Coins</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' to='/resources' exact>Resources</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={e => setSearch(e.target.value)} />
            </form>
          </div>
          {user?<Sidebar/>:<AuthModal />}
        </div>
      </nav>
      {search && (
        <CoinList search={search} title="Search Result" zIndex={2} linkCallback={() => setSearch('')} />
      )}
      {children}
    </>
  )
}