import React, {Component} from 'react';
import {
  NavLink,
  withRouter
} from 'react-router-dom';


class Navigation extends Component{

  /**
   * When the navigation mounts, pass the loaded path back to App.js vis sendQuery so it can fetch correct data
   * @param {OBJ} props 
   */
  componentDidMount(props){
    this.props.history.listen((location, action) => {
      this.props.sendQuery(this.props.history.location.pathname);
    });
  }
  
  render(){
    return (
      <nav className="main-nav">
        <ul>  
          <li><NavLink to='/pug'>Pug</NavLink></li>
          <li><NavLink to='/brussel-griffon'>Brussel Griffon</NavLink></li>
          <li><NavLink to='/weiner-dog'>Weiner Dog</NavLink></li>
        </ul>
      </nav>
    );
  }  
}

export default withRouter(Navigation);