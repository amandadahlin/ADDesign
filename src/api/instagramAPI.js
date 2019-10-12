import React, {Component} from "react"

class InstagramAPI extends Component {
    constructor(props) {
        super(props);
    
        this.state = {person: []};
      }
    
      componentDidMount() {
        this.UserList();
      }
    
      imagesByTag() {
        return $.getJSON('https://randomuser.me/api/')
          .then((data) => {
            this.setState({ person: data.results });
          });
      }
    
      render() {
        const persons = this.state.person.map((item, i) => {
          return <div>
            <h1>{item.name.first}</h1>
            <span>{item.cell}, {item.email}</span>
          </div>
        });
    
        return <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{ persons }</div>
        </div>
      }
    }
}