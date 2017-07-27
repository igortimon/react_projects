import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './pagination.scss'


class Pagination extends Component {
    render() {
        // const renderList = this.props.currList.currentList;
        return (
            <div className='pagination'>
                <Link to={`film-${this.props.currPage-1}`}>Prev</Link>
                <Link to={`film-${+this.props.currPage+1}`}>Next</Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    currList: state
  }
}

export default connect(mapStateToProps)(Pagination)
