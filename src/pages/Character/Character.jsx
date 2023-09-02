import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./character.module.css";
import { Link } from 'react-router-dom';

function Char() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        const newCharacters = response.data.results;
        setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
        if (response.data.next) {
          // Se houver uma próxima página, atualize o estado da página atual
          setCurrentPage(currentPage + 1);
        } else {
          // Se não houver mais páginas, pare de buscar
          setCurrentPage(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (currentPage !== null) {
      fetchCharacters();
    }
  }, [currentPage]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Galeria de personagens</h1>
      <Link to="/"><button className={styles.button}>Voltar para tela principal</button></Link>
      <div>
        <input
          type="text"
          className={styles.search}
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className={styles.button}>Buscar</button>{" "}
      </div>
      {filteredCharacters.map((character) => (
        <div className={styles.card} key={character.id}>
          <div>
            <h2 className={styles.name}>{character.name}</h2>
            <p className={styles.status}>Massa: {character.mass}</p>
            <p className={styles.species}>Cor do cabelo: {character.hair_color}</p>
            <p className={styles.type}>Cor da pele: {character.skin_color}</p>
            <p className={styles.gender}>Cor dos olhos: {character.eye_color}</p>
            <p className={styles.gender}>Aniversário: {character.birth_year}</p>
            <p className={styles.gender}>Gênero: {character.gender}</p>
          </div>
          
        </div>

      ))}
      
    </div>
    
  );
}

export default Char;
