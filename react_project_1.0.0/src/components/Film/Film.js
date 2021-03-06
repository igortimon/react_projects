import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import './film.scss'


class Film extends Component {
    render() {
        const renderList = this.props.currList.currentList;
        return (
            <div className='info'>
                <h2 className='info__title'>
                    {renderList.map((item, index) => {
                        if(index == this.props.params.film) {
                            return  (<div className='info__desc' key='{++index}'>
                                        <span className='info__id'>{`#${++index}`}</span>
                                        <span className='info__name'>    {item.Title}</span>
                                        <div>
                                            <div className='info__year'>Release year: {item['Release Year']}</div>
                                            <div className='info__format'>Format: {item.Format}</div>
                                            <div className='info__actors'>Actors: {item.Stars.toString()}</div>
                                        </div>
                                    </div>)
                        }
                    })}
                </h2>
                <Pagination currPage={this.props.params.film}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    currList: state
  }
}

export default connect(mapStateToProps)(Film)
