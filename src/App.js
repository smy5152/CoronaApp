import React from "react";
//(we import them much easier in one lane) import { render } from '@testing-library/react';
import { Kards, CountrySelector, Graph, Footer } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
//Use class when about to use async for multiples functions is easier
import { Header } from "./components/Header/Header";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header className={styles.App_header} />
        <div className={styles.items}>
          <Kards data={data} />
          <CountrySelector handleCountryChange={this.handleCountryChange} />
          <Graph data={data} country={country} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
