import axios from 'axios';
import { ReactNode, createContext } from 'react';

export interface BebidasContextI {
  obtenerBebidas: (nombre?: string, categoria?: string) => void;
}

const BebidasContext = createContext({} as BebidasContextI);

const BebidasProvider = ({ children }: { children: ReactNode }) => {
  const obtenerBebidas = async ( nombre: string, categoria: string) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.error(error);
      ``;
    }
  };

  return (
    <BebidasContext.Provider
      value={{
        obtenerBebidas,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
