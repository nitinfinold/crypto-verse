import { createContext, useContext } from "react";

const CoinContext = createContext();

export default CoinContext;

export const useCoinList = () => {
  return useContext(CoinContext);
};
