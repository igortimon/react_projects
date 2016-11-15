import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from '../../actions/listActions'
import configureStore from '../../store/configureStore'



import './list.scss'

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'films.json', false);
// xhr.send();
// export const LIST = JSON.parse(xhr.responseText);

class List extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     displayedList: LIST
        // };
        this.handlerRemove = this.handlerRemove.bind(this);
        this.remove = this.props.listActions.addNewFilm
    }

    // searchInTitles(e) {
    //     var displayedList, searchQuery, searchValue;
    //     if(e.target.className == 'form-control title__input') {
    //         searchQuery = e.target.value.toLowerCase();
    //         displayedList = LIST.filter((el) => {
    //             searchValue = el.Title.toLowerCase();
    //             return searchValue.indexOf(searchQuery) !== -1;
    //         })
    //     }
    //
    //     if(e.target.className == 'form-control actor__input') {
    //         searchQuery = e.target.value.toLowerCase();
    //         displayedList = LIST.filter((el) => {
    //             searchValue = el.Stars.filter((element) => {
    //                     return element.toLowerCase().indexOf(searchQuery) !== -1;
    //             });
    //             return searchValue.length !== 0;
    //         });
    //     }
    //
    //     this.setState({
    //         displayedList: displayedList
    //     })
    // }
    handlerRemove(e) {
        let i = parseInt(e.target.id);
        let currState =configureStore().getState();
        currState.list.splice(i, 1);
        this.remove(currState);
    }

    render() {
        return (
            <div className='main clearfix'>
                <div className='list__wrap'>
                    <div className='list__search'>
                        <div>
                            <h5>Title</h5>
                            <input type='text' className='form-control title__input' onChange={this.searchInTitles}/>
                        </div>
                        <div>
                            <h5>Actor</h5>
                            <input type='text' className='form-control actor__input' onChange={this.searchInTitles}/>
                        </div>
                    </div>
                    <h3 className='list__title'>Films list</h3>
                    <ul className='list'>
                        {this.props.displayedList.list.sort((a, b) => {
                            if (a.Title < b.Title) return -1;
                            if (a.Title > b.Title) return 1;
                            return 0;
                        }).map((item, index) => {
                            return <li className='list__item' key={index}><Link to={`film/${index}`}>{item.Title}</Link><span title='Remove film' className='glyphicon glyphicon-remove' id={`${index}-remove`} onClick={this.handlerRemove}></span></li>
                        })}
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    displayedList: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listActions: bindActionCreators(listActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
