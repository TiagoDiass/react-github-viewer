import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import { Toast } from '../../services/sweetAlert';
import { Container, Form, SubmitButton, List } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Carrega do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories),
      });
    }
  }

  // Salva no localStorage antes de atualizar
  componentDidUpdate(_, previousState) {
    if (previousState.repositories !== this.state.repositories) {
      localStorage.setItem(
        'repositories',
        JSON.stringify(this.state.repositories)
      );
    }
  }

  handleInput = (event) => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async (event) => {
    if (this.state.loading) {
      return;
    }

    event.preventDefault();

    this.setState({ loading: true });

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
          newRepo: '',
          loading: false,
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: 'Repositório não encontrado',
        });
        this.setState({ loading: false });
      });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

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

          <SubmitButton loading={loading ? 'loading' : undefined}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
