import { Component } from "react";
import "./App.css";

class Work extends Component {
  render() {
    const work_thumbnail = (
      <div className="col-xl-4 col-md-6 col-sm-12">
        <div id="win-grid">
          <div id="win-nav">{this.props.projectname}</div>
          <a href="#sgModal" data-toggle="modal" data-target="#sgModal">
            <img id="content" src={this.props.mainimg_link} alt={this.props.projectname} />
          </a>
          <div id="win-footer">
            <div className="tags">{this.props.projecttags}</div>
            <div className="tags">{this.props.projectdate}</div>
          </div>
        </div>
      </div>
    );
    return <div className="row mt-4">{work_thumbnail}</div>;
  }
}

export default Work;
