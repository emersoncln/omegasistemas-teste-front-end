import axios from "axios";

export const api = () => {
  return axios.get(
    "http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202004&codigoIbge=5107958&pagina=1",
    {
      headers: {
        "chave-api-dados": "a5199d846b3dc8fd798857d25c8682dc",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const apiMunicipios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
});



export const apiEstados = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
});
