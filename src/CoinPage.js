import { useParams } from "react-router-dom";

export default function CoinPage(){
  const { id } = useParams();
  return <div>Coins ({id})</div>
}