import { Component } from 'react'
import SelectWrapper from './Select'
import { getInfo } from '../scripts/requests'

export default class InvoicesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {invoices: [], customers: [], products: [], value: []}
    }

    render() {
        return (
			<form className="invoices-form" id="invForm">
				<div className="form-group">
					<label>Customer</label>
					<SelectWrapper url={'/api/customers'} multi={false}/>
				</div>
				<div className="form-group">
					<label>Products</label>
					<SelectWrapper url={'/api/products'} multi={true}/>
				</div>
				<div className="input-group">
					<label>Discont</label>
					<span className="input-group-addon">%</span>
					<input type="text" className="form-control"/>
				</div>
				<button type="submit" className="btn btn-primary">Confirm</button>
			</form>
        )
    }
}