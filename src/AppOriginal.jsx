import { useEffect, useRef, useState } from 'react';
import './App.css';
import YouTube from './YouTube';
import videos from './videos';

function App() {
  return (
    <>
      <Compteur />
      <Compteur />
      <Compteur />
    </>
  );
}

export default App;

//useState est un hook  (toute fonction débutant par use... est un hook)
//Les hooks fournissent des fonctionnalités de React à vos applications
//use state retourne un array de 2 éléments: la valeur stockée, et une fonction setState
//la fonction setState va çéduler un changement de la valeur stockée
//et va provoquer un re-rendu de la composante
//optimization: les setState sont éxécutés en lot, avant le prochain rendu.
//Pour gérer les setState multiples: on utilise une fonction updater (doit être fonction pure)
//Pour avoir une valeur conservée, qui ne provoque pas de re-rendu, useRef() (peut avoir des mutations)

function Compteur() {
  let heure = useRef(new Date());

  let [nombre, setNombre] = useState(0);

  useEffect(() => {
    document.title = nombre;
  });

  function handleClick() {
    setNombre(nombre + 1);
  }

  return <button onClick={handleClick}>La valeur est {nombre}</button>;
}
