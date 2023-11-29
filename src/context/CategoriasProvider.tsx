import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Categorias, Drink } from '../interfaces/Categorias.interface';

export interface CategoriaContextI {
  categorias?: Drink[];
}

interface dataI {
  data: Categorias;
}

const CategoriasContext = createContext<CategoriaContextI>({} as CategoriaContextI);

const CategoriasProvider = ({ children }: { children: ReactNode }) => {
  const [categorias, setCategorias] = useState<Drink[]>([] as Drink[]);
  const obtenerCategorias = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const {
        data: { drinks },
      }: dataI = await axios.get(url);

      setCategorias(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
