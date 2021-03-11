import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band) => (
            <Band
              name={band.name}
              id={band.id}
              deleteBand={this.props.deleteBand}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (name) => dispatch({ type: "ADD_BAND", name }),
    deleteBand: (id) => dispatch({ type: "DELETE_BAND", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
