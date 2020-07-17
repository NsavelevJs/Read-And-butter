import React, { Component } from "react";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import {getUsers, getArticle, addArticle} from './services/api-helper'
import Home from "./Pages/Home";
import "./tailwind.output.css";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Shared/Header";
import About from "./Pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.output.css";

class App extends Component {
  state = {
    currentUser: null,
    userData: {
      username: '',
      password: ''
    }

  };
  // componentDidMount = async () => {
  //   const currentUser = await verifyUser()
  //   this.setState({
  //     currentUser
  //   })
  //   const users = await getUsers()
  //   this.setState({
  //     users
  //   })
  // }

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     userData: {
  //       ...prevState.userData,
  //       [name]: value
  //     }
  //   }))
  // }

  // loginSubmit = async (e) => {
  //   e.preventDefault()
  //   const currentUser = await loginUser(this.state.userData)
  //   this.setState({
  //     currentUser
  //   })
  // }
  // handleRegister = async (e) => {
  //   e.preventDefault()
  //   const currentUser = await registerUser(this.state.userData)
  //   this.setState({
  //     currentUser
  //   })
  //   this.props.history.push('/')
  // }


  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.removeItem("authToken");
    removeToken();
    this.props.history.push("/");
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}

                handleRegister={this.handleRegister}
              />

{/* <Route path="/SignIn">
              <SignIn
              
              />
</Route> */}

            </Route>
            <Route exact path="/About" component={About} />
            <Route exact path="/SignIn" component={SignIn} handleLogin={this.handleLogin} />
            <Route exact path="/SignUp" component={SignUp} handleRegister={this.handleRegister} />
          </Switch>
        </Router>

        <div>
          {this.state.articles &&
            this.state.articles.map((article) => (
              <div className="article">
                <Link to={`/article/${article.id}`}>
                  <h5>{article.title}</h5>
                  <img src={article.img_url} alt="Picture for article" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default App;
