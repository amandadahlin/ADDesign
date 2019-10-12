import React from 'react'
import {map} from "lodash"
import { connect } from 'react-redux'
import * as CartReducerActions from '../reducers/cartReducer'
import * as CartSelectors from "../selectors/CartSelectors"
import Painting from "./Painting";
import './Home.css'

type Props = {
  paintings: Painting[],
  painting: Painting,
  stock: Object[],
  getPaintings: Function
}

class Home extends React.Component<Props> {
  componentDidMount() {
    this.props.getPaintings();
  }

  render () {
    console.log(window.store.getState());
    const items = this.props.stock;
    console.log(items);
    const paintings = map(items, (painting, index) =>
        <Painting
          id={painting.id}
          key={painting.name + index}
          price={painting.price}
          image={painting.image}
          height={painting.height}
          width={painting.width}
          name={painting.name}
          description={painting.description}
        />
    );

    const container = {
      display: 'grid',
      gridGap: '2px',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: 'minmax(150px, auto) minmax(150px, auto)',
      gridAutoRows: 'minmax(100px, auto)'
    }

    return (
      <div className="body">
        <h1 className="header">Aktuella målningar</h1>
        <p className="info">Eftersom varje målning är unik och enbart finns i ett exemplar varierar utbudet.</p>
        <hr />
        <div style={container}>
          {paintings}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stock: CartSelectors.getStock(state)
})

const mapDispatchToProps = {
  getPaintings: CartReducerActions.requestStock
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)