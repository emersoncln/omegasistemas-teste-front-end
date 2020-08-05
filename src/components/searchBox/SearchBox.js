import React, { Component } from "react";
import { Container, Input, Button} from "./styles";
import { api, apiEstados, apiMunicipios } from "../../services/api";

class SearchBox extends Component {
  state = {
    codigoIBGE: "",
    valor: 0,
    UF: "33",
    municipios: [],
    pessoas: 0,
  };

  componentDidMount() {
    this.getMunicipios();
  }

  getDados = async () => {
    const response = await api.data;

    this.setState({ valor: response });

    console.log(this.state.valor);
  };

  getMunicipios = async () => {
    const { UF } = this.state;
    const response = await apiMunicipios.get(`${UF}/municipios`);

    this.setState({ municipios: response.data });

    console.log(this.state.municipios);
  };

  verificaCodigoIBGE =  () => {
    
  }

  render() {
    return (
      <Container>
        <h1>municipio: </h1>
        <Input placeholder={"digite seu municipio"} 
        type="text"
        value={}
        onChange={}/>

        <Button onClick={() =>{}}>verficar</Button>
      </Container>
    );
  }
}

export default SearchBox;
