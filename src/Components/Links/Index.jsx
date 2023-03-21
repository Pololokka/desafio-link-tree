import "./Styles.css";
import { useState } from "react";

const Links = () => {
  const [links, setLink] = useState([]);
  const [nome, setNome] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (elemento) => {
    elemento.preventDefault();

    const novoLink = {
      id: Math.random(),
      nome: nome,
      url: url,
    };

    links.push(novoLink);
    setLink(links);

    setNome("");
    setUrl("");
  };

  return (
    <div>
      <div className="links__container">
        {links?.map((elemento) => (
          <a
            key={elemento.id}
            href={elemento.url}
            target="_blank"
            className="texto btn__geral"
            rel="noreferrer"
          >
            {elemento.nome}
          </a>
        ))}
      </div>

      <form className="novo-link__container" onSubmit={handleSubmit}>
        <div className="links__inputs">
          <label htmlFor="nome-link" className="texto">
            Nome do Link:
          </label>
          <input
            type="text"
            name="nome-link"
            className="texto input__geral"
            onChange={(evento) => setNome(evento.target.value)}
            value={nome || ""}
            required
          />

          <label htmlFor="url-link" className="texto">
            URL:
          </label>
          <input
            type="text"
            name="url-link"
            className="texto input__geral"
            onChange={(evento) => setUrl(evento.target.value)}
            value={url || ""}
            required
          />
        </div>

        <input
          type="submit"
          value="Adicionar Link!"
          className="btn__geral texto"
        />
      </form>
    </div>
  );
};

export default Links;
