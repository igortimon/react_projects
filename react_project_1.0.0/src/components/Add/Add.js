import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from '../../actions/listActions'

import './add.scss'


class Add extends Component {

    constructor(props){
        super(props);
        this.handlerAdd = this.handlerAdd.bind(this);
        this.add = this.props.listActions.addRemFilm
    }

    handlerAdd(e) {
        e.preventDefault();
        let newFilm = {}

        newFilm.Title = document.getElementsByClassName('form-control title')[0].value;
        newFilm['Release Year'] = document.getElementsByClassName('form-control year')[0].value;
        newFilm.Format = document.getElementsByClassName('form-control format')[0].value;
        newFilm.Stars = document.getElementsByClassName('form-control actors')[0].value.split(',');

        let currState = this.props.currList;
        currState.currentList.push(newFilm);
        currState.list.push(newFilm);
        this.add(currState);

        document.getElementsByClassName('form-control title')[0].value = '';
        document.getElementsByClassName('form-control year')[0].value = '';
        document.getElementsByClassName('form-control format')[0].value = '';
        document.getElementsByClassName('form-control actors')[0].value = '';
    }

    render() {
        return (
            <div className='form-wrap'>
                <h2>Add new film</h2>
                <form>
                    <div className='form__inputs'>
                        <div>
                            <h4>Enter film title</h4>
                            <input type='text' className='form-control title' />
                        </div>
                        <div>
                            <h4>Enter film year</h4>
                            <input type='text' className='form-control year' />
                        </div>
                        <div>
                            <h4>Enter film format</h4>
                            <input type='text' className='form-control format' />
                        </div>
                        <div>
                            <h4>Enter actors</h4>
                            <input type='text' className='form-control actors' />
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={this.handlerAdd}>Add</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps (state) {
  return {
    currList: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listActions: bindActionCreators(listActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
