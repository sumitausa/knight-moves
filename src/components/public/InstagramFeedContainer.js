import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ImageWrapper.css';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft);
library.add(faChevronRight);

/*
 * If the REACT_APP_INSTAGRAM_ACCESS_TOKEN expires, follow these instructions
 * to get a new one:
 *
 * https://stackoverflow.com/questions/17197970
 *
 * being sure to change the API version in the URLs to the latest version
 * (at time of writing, we are on v3.2)
 */

const desiredImageFields =
  'caption,id,media_type,media_url,permalink,owner,timestamp';

const url = `https://graph.facebook.com/${
  process.env.REACT_APP_INSTAGRAM_BIZ_USER_ID
}/media?fields=${desiredImageFields}&access_token=${
  process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN
}`;

const BOOTSTRAP_BREAKPOINTS = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200
};

class InstagramFeedContainer extends React.Component {
  state = {
    imageList: [],
    currentPage: 0,
    imgsPerPage: 3
  };

  componentDidMount() {
    this.fetchInstagramImages();

    this.createInstagramAutoScroller();

    window.addEventListener('resize', this.handleWindowResize.bind(this));
    this.handleWindowResize();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('resize', this.handleWindowResize);
  }

  fetchInstagramImages = () => {
    axios.get(url).then(response => {
      const filteredList = response.data.data.filter(function(image) {
        return image.media_type !== 'VIDEO';
      });

      this.setState({
        imageList: filteredList
      });
    });
  };

  createInstagramAutoScroller = () => {
    this.interval = setInterval(() => {
      const maxPages = Math.floor(
        this.state.imageList.length / this.state.imgsPerPage
      );
      this.setState({
        currentPage: (this.state.currentPage + 1) % maxPages
      });
    }, 5000);
  };

  handleWindowResize = () => {
    const width = window.innerWidth;
    let newImgPerPage;

    if (width < BOOTSTRAP_BREAKPOINTS.MD) {
      newImgPerPage = 1;
    } else if (width < BOOTSTRAP_BREAKPOINTS.LG) {
      newImgPerPage = 2;
    } else {
      newImgPerPage = 3;
    }

    this.setState({
      imgsPerPage: newImgPerPage
    });
  };

  handleLeftClick = () => {
    const maxPages = Math.floor(
      this.state.imageList.length / this.state.imgsPerPage
    );
    // add maxPages to prevent (-1 % 8) === -1
    const newPage = (this.state.currentPage + maxPages - 1) % maxPages;
    this.setState({ currentPage: newPage });
  };

  handleRightClick = () => {
    const maxPages = Math.floor(
      this.state.imageList.length / this.state.imgsPerPage
    );
    const newPage = (this.state.currentPage + 1) % maxPages;
    this.setState({ currentPage: newPage });
  };

  render() {
    return (
      <div className="row h-100">
        <div className="col-2 col-sm-1 align-self-center">
          <Button
            variant="cta"
            className="btn-lg btn-circle"
            onClick={this.handleLeftClick}
            type="button"
          >
            <FontAwesomeIcon icon="chevron-left" />
          </Button>
        </div>

        <div className="row col-8 col-sm-10">
          {this.state.imageList
            .slice(
              this.state.imgsPerPage * this.state.currentPage,
              this.state.imgsPerPage * (this.state.currentPage + 1)
            )
            .map(image => {
              return (
                <div
                  key={image.id}
                  className="col-12 col-sm-12 col-md-6 col-lg-4"
                >
                  <Card
                    style={{
                      height: '450px',
                      backgroundColor: 'var(--color-primary-4)',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}
                  >
                    <a href={image.permalink}>
                      <Card.Img
                        variant="top"
                        src={image.media_url}
                        alt={image.caption}
                        style={{
                          height: '300px',
                          padding: '4px',
                          objectFit: 'cover'
                        }}
                      />
                    </a>
                    <Card.Body>
                      <LinesEllipsis
                        text={image.caption.replace('\n', '')}
                        maxLine="5"
                        trimRight
                      />
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>

        <div className="col-2 col-sm-1 align-self-center">
          <Button
            variant="cta"
            className="btn-lg btn-circle"
            onClick={this.handleRightClick}
            type="button"
          >
            <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </div>
      </div>
    );
  }
}

export default InstagramFeedContainer;
