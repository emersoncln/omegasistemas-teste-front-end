import React, { Component } from "react";
import { Container, Button, Box, Card, Footer } from "./styles";
import { MdSearch, MdList } from "react-icons/md";
import { api } from "../../services/api";
import data from "../../data/dados.json";

class SearchBox extends Component {
  state = {
    municipios: [],
    show: false,
    showList: false,
  };

  componentDidMount() {
    this.getMunicipios();
  }

  // receiving cities from api data
  getMunicipios = async () => {
    const response = await api.get(`51/municipios`);

    this.setState({ municipios: response.data });
  };

  // function maping cities from array
  LoadList = () => {
    const { municipios, showList } = this.state;
    if (showList === true) {
      return municipios.map((resp) => (
        <Box key={resp.id}>
          <h1>Nome do municipio: {resp.nome}</h1>
          <h2>Código do IBGE: {resp.id}</h2>
        </Box>
      ));
    } else {
      return null;
    }
  };

  // gettig local data
  Load = () => {
    const { show } = this.state;
    if (show === true) {
      return data.map((resp) => (
        <Box key={resp.id}>
          <h1>Nome do municipio: {resp.municipio.nomeIBGE}</h1>
          <h2>quantidade de beneficiários: {resp.quantidadeBeneficiados}</h2>
          <h3>valor recebido no total: {resp.valor}</h3>
          <p>Descrição beneficio: {resp.tipo.descricao}</p>
        </Box>
      ));
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container>
        <Card>
          {this.Load()}
          {this.LoadList()}
        </Card>
        <Footer>
          <Button
            onClick={() => this.setState({ show: true, showList: false })}
          >
            Disponíveis para consulta
            <MdSearch size={20} color={"black"} />
          </Button>
          <Button
            onClick={() => this.setState({ showList: true, show: false })}
          >
            Lista completa
            <MdList size={20} color={"black"} />
          </Button>
        </Footer>
      </Container>
    );
  }
}

export default SearchBox;
