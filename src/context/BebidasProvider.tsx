import { ReactNode, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Bebidas, Drink } from '../interfaces/Bebidas.interface';
import { BebidaDetails } from '../interfaces/Bebida.interface';

export interface BebidasContextI {
  obtenerBebidas: ({ nombre, categoria }: { nombre: string; categoria: string }) => void;
  bebidas: Drink[];
  modal: boolean;
  handleModal: () => void;
  handleBebidaId: (id: string) => void;
  receta: BebidaDetails;
  loading: boolean;
  favoritos: Drink[];
  handleAgregarFavorito: (bebida: Drink) => void;
  handleEliminarFavorito: (id: string) => void;
}

interface BebidaInfoI {
  data: Bebidas;
}

const BebidasContext = createContext({} as BebidasContextI);

const BebidasProvider = ({ children }: { children: ReactNode }) => {
  const [bebidas, setBebidas] = useState<Drink[]>([] as Drink[]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState<null | string>(null);
  const [receta, setReceta] = useState<BebidaDetails>({} as BebidaDetails);
  const [loading, setLoading] = useState(false);
  const [favoritos, setFavoritos] = useState<Drink[]>(
    JSON.parse(localStorage.getItem('favoritos') || '[]'),
  );

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return;

      try {
        setReceta({} as BebidaDetails);
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
        const {
          data: {
            drinks: [bebida],
          },
        } = await axios(url);
        setReceta(bebida as BebidaDetails);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    obtenerReceta();
  }, [bebidaId]);

  const obtenerBebidas = async ({ nombre, categoria }: { nombre: string; categoria: string }) => {
    try {
      setLoading(true);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const {
        data: { drinks },
      }: BebidaInfoI = await axios(url);
      setBebidas(drinks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleBebidaId = (id: string) => {
    setBebidaId(id);
  };

  const handleAgregarFavorito = (bebida: Drink) => {
    if (favoritos.some(favorito => favorito.idDrink === bebida.idDrink)) return;
    localStorage.setItem('favoritos', JSON.stringify([...favoritos, bebida]));
    setFavoritos([...favoritos, bebida]);
  };

  const handleEliminarFavorito = (id: string) => {
    const nuevosFavoritos = favoritos.filter(bebida => bebida.idDrink !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <BebidasContext.Provider
      value={{
        obtenerBebidas,
        bebidas,
        handleModal,
        modal,
        handleBebidaId,
        receta,
        loading,
        favoritos,
        handleAgregarFavorito,
        handleEliminarFavorito,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
