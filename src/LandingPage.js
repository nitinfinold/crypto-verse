import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCoin } from "./Context"
import { debounce, getItemNumber } from "./utils"

export default function LandingPage() {
  const [itemNumber, setItemNumber] = useState(getItemNumber())
  useEffect(() => {
    let listener = () => setItemNumber(getItemNumber())
    listener = debounce(listener, 100)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [])

  const { list, news } = useCoin()
  const carouselGroups = list.reduce((prev, curr) => {
    const lastGroup = prev[prev.length - 1]
    if (lastGroup.length <= itemNumber) {
      lastGroup.push(curr)
    }
    else {
      prev.push([curr])
    }
    return prev
  }, [[]])
  const carouselItems = carouselGroups.map((group, idx) => {
    return (
      <div key={group.map(item => item.id).join('-')} className={(idx === 0) ? "carousel-item active" : "carousel-item"} data-bs-interval="5000">
        <div className="coin-group">
          {group.map(({ name, current_price, id, image }) => (
            <Link key={id} to={`/coins/${id}`} className="nav-link" >
              <img src={image} className="d-block" alt="coin" />
              <div className="h5">{name}</div>
              <div>${current_price}</div>
            </Link>))}
        </div>
      </div>
    )
  })

  const newsCards = news.map((news, idx) => {
    return (
      <a key={news.link} href={news.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-3">
              <img src={news.image_url ?? `images/news-fallback${idx}.jpeg`} className="img-fluid rounded-start" alt={news.title} />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <p className="card-text"><small className="text-muted">{news.pubDate}</small></p>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  })

  return (
    <>
      <div className="trending">
        <div className="container-xxl">
          <p className="text-center fs-2 pt-5 pb-4">Trending</p>
        </div>
        <div className="container-xxl pb-5">
          <div id="carouselExampleControls" key={itemNumber} className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselItems}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>
      <div className="news">
        <div className="container-xxl pt-4">
          <p className="text-center fs-2 pt-4 pb-5">News</p>
          {newsCards}
        </div>
      </div>
    </>
  )
}