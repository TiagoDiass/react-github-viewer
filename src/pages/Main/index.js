import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';
import { Toast } from '../../services/sweetAlert';
import { Container, Form, SubmitButton } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
  };

  handleInput = (event) => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await api
      .get(`/repos/${this.state.newRepo}`)
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: 'Repositório encontrado',
        });

        const data = {
          name: response.data.full_name,
        };

        this.setState({
          repositories: [...this.state.repositories, data],
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: 'Repositório não encontrado',
        });
      });
  };

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            onChange={this.handleInput}
            value={newRepo}
          />

          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
