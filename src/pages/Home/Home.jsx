import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from "./home.module.css";
import imagem from "../img/pngwing.com.png";

function Home() {
  const images = [
    "https://r4.wallpaperflare.com/wallpaper/504/528/842/star-wars-darth-vader-wallpaper-22d1e200cd869e2b5a48327530d85922.jpg",
    "https://r4.wallpaperflare.com/wallpaper/231/936/951/star-wars-star-wars-the-force-awakens-stormtrooper-artwork-wallpaper-9f6592ecae36cc6b457c1892c1e1a404.jpg",
    "https://r4.wallpaperflare.com/wallpaper/1005/778/557/star-wars-darth-vader-emperor-palpatine-stormtrooper-wallpaper-ca40b0359be0727024af78b27952860a.jpg",
    "https://r4.wallpaperflare.com/wallpaper/71/416/879/star-wars-the-force-awakens-collage-wallpaper-7b560c2d3361efa9b564cbc99d2c5cf0.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <header className={styles.header}>
        <img src={imagem} className={styles.logo} />
        <div className={styles.btngp}>
          <Link to="./pages/Character">
            <button className={styles.btn}>Galeria</button>
          </Link>
        </div>
      </header>

      <div className={styles.info}>
        <div className={styles.slideshow}>
          <img src={images[currentImageIndex]} alt="Star wars imagem" />
        </div>
        <p>
          <h1>Resumo da obra</h1>
          "Star Wars" é uma icônica franquia de ficção científica criada por George Lucas em 1977. Ambientada em uma galáxia distante, a história gira em torno da luta entre as forças do bem, representadas pelos Jedi, e as forças do mal, lideradas pelos Sith. O protagonista, Luke Skywalker, é um jovem que descobre ter habilidades na Força e se junta aos rebeldes na luta contra o Império Galáctico.
          A saga é conhecida por sua mitologia rica, personagens memoráveis como Darth Vader, Princesa Leia e Han Solo, além de naves espaciais icônicas como a Millennium Falcon. "Star Wars" também explorou temas como redenção, poder, família e o eterno conflito entre o lado claro e o lado sombrio da Força.
          A franquia se expandiu para incluir filmes, séries de TV, livros, quadrinhos e videogames, ganhando uma base de fãs devota em todo o mundo. Ela continua a ser uma influência significativa na cultura pop, impactando gerações de espectadores e deixando um legado duradouro na indústria do entretenimento.
        </p>
      </div>
    </>
  );
}

export default Home;
