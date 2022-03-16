import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function CoinPage() {
  const { id } = useParams();

  const [coin, setCoin] = useState();

  const fetchCoin = async () => {

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.json()

    setCoin(data);


  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(coin);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return <div>

    {/* {JSON.stringify(coin)} */}

    <div className="container-xxl">
      <p className="text-center fs-1 pt-5 pb-1"><strong>{coin?.name}</strong></p>
    </div>

    <div className="col">
      <p className="text-center fs-5 pt-1 pb-4 ps-5 pe-5">{coin?.description.en.substring(0, 400)}</p>
    </div>

    <div className="container">
      <div className="row">

        <div className="col">
        <p className=" fs-5 pt-4 pb-1 "><strong>Symbol :</strong>&nbsp;&nbsp;&nbsp;<img src={coin?.image.small} className="img-fluid rounded-start " /></p>
          <p className=" fs-5 pt-1 pb-1 "><strong>Current Price CAD$ :</strong> {coin?.market_data.current_price?.cad}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>Market Cap Rank :</strong> {coin?.market_data.market_cap_rank}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>Market Capitalization :</strong> {numberWithCommas(coin?.market_data.market_cap?.cad)}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>Volume :</strong> {numberWithCommas(coin?.market_data.total_volume?.cad)}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>Price Change (24 hrs) :</strong> {numberWithCommas(coin?.market_data.price_change_24h_in_currency?.cad)}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>% Price Change 1 Week :</strong> {coin?.market_data.price_change_percentage_7d_in_currency?.cad}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>% Price Change 1 Month :</strong> {coin?.market_data.price_change_percentage_30d_in_currency?.cad}</p>
          <p className=" fs-5 pt-1 pb-1 "><strong>% Price Change 1 Year :</strong> {coin?.market_data.price_change_percentage_1y_in_currency?.cad}</p>
        </div>
        <div className="col">
        <p className="text-center fs-4 pt-1 pb-4 "></p>
        </div>
      </div>
    </div>

  </div>

}

