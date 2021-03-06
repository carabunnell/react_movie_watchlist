import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import MovieDetail from "../components/MovieDetail";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
// import Information from "../friends.json";

class Search extends Component {
    state = {
        result: {},
        search: ""
    };

    // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //handleWatchlishInput = event => {
    //have the movie detail from api stuff sent to write to file. 
  //}

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  //this function will be triggered from movedetail card if they click submit. when they click submit, it will take the movie info and put it to read file. 
  // handleAddMovie = event => {
  //   event.preventDefault();
  //   this.function 
  // }


render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
          <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  // addToWatchList={this.addToWatchlist}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
          <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Search;