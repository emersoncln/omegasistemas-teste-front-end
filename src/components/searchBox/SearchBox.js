import React, { Component } from "react";
import { Container, Button, Box, Paper } from "./styles";
import { api, apiAux } from "../../services/api";
import {
  Select,
  FormControl,
  InputLabel,
  Input,
  Chip,
  MenuItem,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

class SearchBox extends Component {
  state = {
    cities: [],
    selectedCities: [],
    list: [],
    loading: false,
  };

  componentDidMount() {
    this.getCities();
  }

  // receiving cities from api data
  getCities = async () => {
    const response = await api.get(`51/municipios`);
    this.setState({ cities: response.data });
  };

  getDataAuxilio = async () => {
    const group = [];
    let i = 0;
    this.setState({ loading: true });
    while (i < this.state.selectedCities.length) {
      const item = this.state.selectedCities[i];

      const { data } = await apiAux().get("", {
        params: {
          mesAno: 202004,
          codigoIbge: item,
          pagina: 1,
        },
      });

      group.push(...data);
      i++;
    }
    this.setState({ list: group, loading: false });
  };

  handleChange = (event) => {
    this.setState({ selectedCities: event.target.value });
  };

  // function maping cities from array
  renderCities = () => {
    const { cities } = this.state;
    return cities.map((resp) => (
      <MenuItem key={resp.id} value={resp.id}>
        {resp.nome}
      </MenuItem>
    ));
  };

  // maping list received from selected cities
  Load = () => {
    const { list } = this.state;
    return list.map((resp) => (
      <Box key={resp.id}>
        <h2>Nome do municipio: {resp.municipio.nomeIBGE}</h2>
        <h2>quantidade de beneficiários: {resp.quantidadeBeneficiados}</h2>
        <h3>valor recebido no total: {resp.valor}</h3>
        <p>Descrição beneficio: {resp.tipo.descricao}</p>
      </Box>
    ));
  };

  render() {
    return (
      <Container>
        <h1>Filtros</h1>
        <Paper elevation={4}>
          <FormControl variant={"outlined"} style={{ minWidth: 200 }}>
            <InputLabel id="chip-label">Cidades</InputLabel>
            <Select
              labelId="mutiple-chip-label"
              id="mutiple-chip-cities"
              multiple
              value={this.state.selectedCities}
              onChange={this.handleChange}
              input={<Input id="multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.renderCities()}
            </Select>
            <p>Selecione dois municipios</p>
          </FormControl>

          <Button
            variant={"contained"}
            color="primary"
            onClick={() => {
              this.getDataAuxilio();
            }}
          >
            Filtrar <Search />
          </Button>
        </Paper>

        {this.state.loading && (
          <Paper style={{ marginTop: 10 }}>Carregando...</Paper>
        )}
        <div className="container-itens">{this.Load()}</div>
      </Container>
    );
  }
}

export default SearchBox;
