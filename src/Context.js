import { createContext, useContext } from "react";

const CoinContext = createContext();

export default CoinContext;

export const useCoin = () => {
  return useContext(CoinContext);
};
