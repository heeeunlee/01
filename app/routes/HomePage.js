/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {/* header */}

        <div>
          <Row className="head">
            <Column col="6" className="Y-center">
              <div className="head-name"> Heeeun Lee</div>
              <div className="head-name-02">
                Hi! I'm a Visual Designer based in Seoul, Korea.
              </div>
            </Column>

            <Column col="6" className="Y-center">
              <div>
                <a className="head-menu" href="/work" style={{ color: "blue" }}>
                  Work
                </a>
                <a
                  className="head-menu"
                  href="/sketch"
                  style={{ color: "grey" }}
                >
                  Sketchbook
                </a>
                <a
                  className="head-menu"
                  href="/about"
                  style={{ color: "grey" }}
                >
                  About
                </a>
                <a
                  className="head-menu"
                  href="/resume"
                  style={{ color: "grey" }}
                >
                  Resume
                </a>
              </div>
            </Column>
          </Row>

          <div />

          {/* body */}

          <div>
            <div className="container">
              <a>
                <img
                  className="box-01"
                  src="http://www.jessievan.com/images/logo.png"
                  // width="33.3%"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
