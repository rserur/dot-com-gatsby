import React from 'react';
import PropTypes from 'prop-types';
import Tile from './tile';

const Gallery = class extends React.Component {
  constructor(props) {
    super(props)

    this.items = props.items;
    console.log(this.rows());
  }

  rows = () => {
    const chunked_arr = [];
    let copied = [...this.items]; // ES6 destructuring
    const numOfChild = Math.ceil(copied.length / 3); // Round up to the nearest integer

    for (let i = 0; i < numOfChild; i++) {
      chunked_arr.push(copied.splice(0, 3));
    }

    return chunked_arr;
  }

  render() {
    return (
      <section className="section has-background-dark has-text-light">
        <div className="container">
          <h2 className="title has-text-light">What I've been up to:</h2>
          {
            this.rows().map((row) => {
              return <div className="tile is-ancestor">
                <div className="tile is-parent">
                  {
                    row.map((item, i) => {
                      return <Tile {...item} key={i} />
                    })
                  }
                </div>
              </div>
            })

          }
        </div>
      </section>
    )
  }
}

export default Gallery

// {
//   items.map((item, i) => {
//     console.log(i);
//     return <Tile {...item} key={i} />
//   })
// }

// rows = () => {
//   this.items.map((item, i) => {
//     console.log(item);
//   })
// }
