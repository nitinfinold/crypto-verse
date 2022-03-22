import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { CoinList } from "./CoinList";
import { useCoin } from "./Context";

export default function () {
  const coinList = useCoin().list

  return (
    <CoinList search="" title="All Coins" zIndex={1} />
  )
}