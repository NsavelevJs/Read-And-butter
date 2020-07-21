import React, { Component } from "react";
import { getArticles } from "./services/articles";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import {
  getTags,
  getArticle,
  addArticle,
  deleteArticle,
  putArticle,
} from "./services/api-helper";

import Home from "./Pages/Home";
import "./tailwind.output.css";
import Postmaker from "./Shared/Postmaker";
import SignIn from "./Pages/SignIn";
import Edit from "./Shared/Edit";
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
    deleteArticle: false,
    articles: [],
    userData: {
      username: "",
      password: "",
    },
    tags: [],
  };

  async componentDidMount() {
    this.handleVerify();
    this.getTags();
    const articles = await getArticles();
    this.setState({ articles });
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData);
    this.setState({ currentUser });
  };

  handleEdit = async (tag_id, Id, Info) => {
    const updatedArticle = await putArticle(tag_id, Id, Info);
    this.setState(prevState => ({
      articles: prevState.articles.map(article => article.id === Id ? updatedArticle : article)
    }))
    this.props.history.push('/')
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
  getTags = async () => {
    const tags = await getTags();
    this.setState({ tags });
  };

  handleAdd = async (tag, article) => {
    // e.preventDefault();
    const newArticle = await addArticle(tag, article);
    this.setState((prevState) => ({
      articles: [...prevState.articles, newArticle],
    }));
    this.props.history.push("/");
  };

  handleDelete = async (id) => {
    await deleteArticle(id);
    this.setState((prevState) => ({
      articles: prevState.articles.filter((article) => article.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />

        <Route exact path="/">
          <Home
            currentUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            handleDelete={this.handleDelete}
            articles={this.state.articles}
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
          render={(props) => (
            <Postmaker
              {...props}
              tags={this.state.tags}
              handleAdd={this.handleAdd}
            />
          )}
        ></Route>
        <Route
          exact
          path="/Edit/:id"
          render={(props) => {
            const id = props.match.params.id;
            const article = this.state.articles.find(
              (article) => article.id === parseInt(id)
            );

            return <Edit article={article} handleEdit={this.handleEdit} />;
            
          }}
        />

        {/* <div>
          {this.state.articles &&
            this.state.articles.map((article) => (
              <div className="article">
                <Link to={`/article/${article.id}`}>
                  <h5>{article.title}</h5>
                  <img src={article.img_url} alt="Picture for article" />
                </Link>
              </div> */}
        {/* ))} */}
        {/* </div> */}
      </div>
    );
  }
}
export default withRouter(App);
