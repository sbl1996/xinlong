import { connect } from 'react-redux'
import React, { Component } from 'react';
import './App.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { fetchProducts } from './actions'

const ProductsTable = ({products}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>名称</TableHeaderColumn>
        <TableHeaderColumn>零售价</TableHeaderColumn>
        <TableHeaderColumn>类目</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {products.map(p => (
        <TableRow>
          <TableRowColumn>{p.id}</TableRowColumn>
          <TableRowColumn>{p.name}</TableRowColumn>
          <TableRowColumn>{p.retailPrice}</TableRowColumn>
          <TableRowColumn>{p.category}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

class App extends Component {
  componentDidMount = () => {
    this.props.loadData()
  }
  render() {
    const { isFetching, products } = this.props
    return (
      isFetching 
        ? <p>loading...</p>
        : <ProductsTable products={products} />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(fetchProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
