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
                <NavLink className="nav-link" activeClassName='active' to='/coins' exact>All Coins</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' to='/resources' exact>Resources</NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName='active' to='/user' exact>User Info</NavLink>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={e => setSearch(e.target.value)} />
            </form>
          </div>
          {user ? <Sidebar /> : <AuthModal />}
        </div>
      </nav>
      {search && (
        <CoinList search={search} title="Search Result" zIndex={2} position="fixed" linkCallback={() => setSearch('')} />
      )}
      <div className="page-content pb-5">
        {children}
      </div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-5 item">
                <h3>Resources</h3>
                <ul>
                  <li>Github: <a href="https://github.com/nitinfinold/crypto-verse">https://github.com/nitinfinold/crypto-verse</a></li>
                  <li>Trello: <a href="https://trello.com/b/tAHRD3eX/icognito-winter-2022-capstone">https://trello.com/b/tAHRD3eX/icognito-winter-2022-capstone</a></li>
                </ul>
              </div>
              <div class="col-md-7 item text">
                <h3>About</h3>
                <p>This site is built to assist users in tracking trending coins, sorting coins, providing historical charts for coins, and adding favourite coins to watchlists.</p>
              </div>
              {/* <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div> */}
            </div>
            <p class="copyright">Crypto-verse © 2022</p>
          </div>
        </footer>
      </div>
    </>
  )
}