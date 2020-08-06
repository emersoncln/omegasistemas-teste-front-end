import axios from "axios";

export const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
});

export const apiAux = () => {
  return axios.create({
    baseURL:
      "http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio",
    
    headers: {
      Accept: "*/*",
      "chave-api-dados": "a5199d846b3dc8fd798857d25c8682dc",
    },
  });
};
