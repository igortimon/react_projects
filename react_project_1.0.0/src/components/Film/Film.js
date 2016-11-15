import React, { Component } from 'react'
import { connect } from 'react-redux'
import './film.scss'


class Film extends Component {
    render() {
        const renderList = this.props.list;
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
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(Film)
