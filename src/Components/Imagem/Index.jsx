import "./Styles.css";

import { useState } from "react";

const MostraImagem = () => {
  const [imagem, setNovaImagem] = useState(
    "https://cdn.discordapp.com/attachments/621499803884584998/1083486861940494336/dc41faf5-19b9-4a60-8057-058a52177c3b.jpg"
  );

  return (
    <div className="foto__borda">
      <div>
        <label htmlFor="link-foto" className="texto">
          Link da sua foto:
        </label>
        <input
          onChange={(evento) => setNovaImagem(evento.target.value)}
          type="text"
          name="link-foto"
          className="texto input__geral"
        />
      </div>
      <img
        src={imagem}
        alt="Imagem do usuário"
        className="imagem__container sombra-elemento-hover"
      />
    </div>
  );
};

export default MostraImagem;
