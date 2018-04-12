// React
import React from 'react';

// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GetRepositoryInfoQuery = gql`
  query GetRepositoryIssues($name: String!, $login: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
      }
    }
  }
`;

const withInfo = graphql(GetRepositoryInfoQuery, {
  options: ({ login = "facebook" , name = "react" }) => {
    return {
      variables: {
        login,
        name
      }
    }
  },
  props: ({ data }) => {
    // loading state
    if (data.loading) {
      return { loading: true };
    }

    // error state
    if (data.error) {
      console.error(data.error);
    }

    // OK state
    return { data };
  },
});

// Repository
class Repository extends React.Component {
  constructor(props) {
    super(props);

    // states
    this.state = {
      login: props.login,
      name: props.name,
      stargazers: 0,
      watchers: 0,
    };
  }

  componentWillReceiveProps(newProps) {
    // DRY
    const repo = newProps.data.repositoryOwner.repository;

    // states
    this.setState({
      login: this.props.login,
      name: this.props.name,
      stargazers: repo.stargazers.totalCount,
      watchers: repo.watchers.totalCount
    });
  }

  render() {
    return (<div>
      <h2>{this.state.login}/{this.state.name}</h2>
      <ul>
        <li>stargazers: {this.state.stargazers.toLocaleString()}</li>
        <li>watchers: {this.state.watchers.toLocaleString()}</li>
      </ul>
    </div>)
  }
}

const RepositoryWithInfo = withInfo(Repository);
export default RepositoryWithInfo;
