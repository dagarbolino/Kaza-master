import React from 'react';

class FetchData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const apiURL = process.env.PUBLIC_URL + '/data.json';
      const response = await fetch(apiURL);
      const json = await response.json();

      this.setState({ data: json, isLoading: false });
    } 
    catch (error) {
      this.setState({ error: error, isLoading: false });
    }
  }

  render() {
    const { data, isLoading, error } = this.state;
    if (isLoading) {
      return <div>Chargement en cours...</div>;
    }
    if (error) {
      return <div>Une erreur s'est produite lors du chargement des données.</div>;
    }
    return this.props.render(data);
  }
}

export default FetchData;

