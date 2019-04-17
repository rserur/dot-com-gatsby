import React from 'react';
import PropTypes from 'prop-types';
import Tile from './tile';

const Stats = class extends React.Component {
  constructor(props) {
    super(props)

    this.items = props.items;
    console.log(this.items);
  }

  render() {
    return (
      <section className="section has-background-dark has-text-light">
        <div className="container">
          <h2 className="title has-text-light">What I've been up to:</h2>
          {
            this.items.map((item) => {
              return <div>
                {item}
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
