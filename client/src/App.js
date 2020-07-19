import React, { Component } from "react";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { getTags} from "./services/api-helper";
import Home from "./Pages/Home";
import "./tailwind.output.css";
import Postmaker from "./Shared/Postmaker";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Shared/Header";
import About from "./Pages/About";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./tailwind.output.css";


class App extends Component {
  state = {
    currentUser: null,
    addArticle: false,
    userData: {
      username: "",
      password: "",
    },
    tags:[]
  };

  componentDidMount() {
    this.handleVerify();
    this.getTags();
  }

  handleLogin = async (userData) => {
    console.log(userData, "how you doin");
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
  };

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData);
    console.log("how you doin?");
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
getTags=async()=>{
const tags = await getTags();
this.setState({tags})
}

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />
            </Route>
            <Route exact path="/About" component={About} />

            <Route
              exact
              path="/SignIn"
              render={(props) => (
                <SignIn
                  {...props}
                  component={SignIn}
                  handleLogin={this.handleLogin}
                />
              )}
            ></Route>
            <Route
              exact
              path="/SignUp"
              render={(props) => (
                <SignUp
                  {...props}
                  component={SignUp}
                  handleRegister={this.handleRegister}
                />
              )}
            ></Route>
            <Route
              exact
              path="/Postmaker"
              render={(props) => <Postmaker {...props} tags={this.state.tags} />}
            ></Route>
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
export default withRouter(App);
