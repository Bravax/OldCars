import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <section className="navBar">
      <ul>
        <li>
          <button onClick={() => navigate("/")}>
            <strong>Accueil</strong>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/renovation")}>
            <strong>Restaurations</strong>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/events")}>
            <strong>Événements</strong>
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/legendarycars")}>
            <strong>Voitures de légende</strong>
          </button>
        </li>
      </ul>
    </section>
  );
}

export default NavBar;
