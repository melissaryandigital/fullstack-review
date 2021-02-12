import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.updatePage = this.updatePage.bind(this);
  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: { username: term },
      success: function () {
        console.log('successful post');
      }
    })
      .done(() => { this.updatePage(); })
  }


  componentDidMount() {
    this.updatePage();
  }


  updatePage() {
    $.ajax({
      type: "GET",
      url: 'http://localhost:1128/repos',
      success: function (data) {
        this.setState({ repos: data });
      }.bind(this)
    });

  }


  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));