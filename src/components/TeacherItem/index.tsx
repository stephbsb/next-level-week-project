import React from "react";

import "./styles.css";
import whatsapp from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/42919686?s=460&u=34b170b4e755371b0ac3a73ef972cb5929650bd9&v=4"
          alt="professor"
        />
        <div>
          <strong>Stephany</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi
        maxime commodi voluptas, odio aliquam deserunt consectetur vero ab
        explicabo optio ex autem aliquid! Ullam quibusdam illum nam vero earum.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
