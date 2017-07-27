import { Component } from 'react'
import { getInfo } from '../scripts/requests'

export default class InvoicesList extends Component {
    constructor(props) {
        super(props);

        this.state = {invoices: []}
    }

	componentWillMount() {
        let that = this;
		getInfo({
			url: 'api/invoices',
			success: function(data) {
                that.setState(Object.assign({}, that.state, {invoices: data}));
			}
		})
    }

    render () {
        return (
            <ul className="list-group">
                {this.state.invoices.map(function (invoice) {
                    return (
                        <li key={invoice.id} className="list-group-item">{invoice.createdAt}</li>
                    )
                })}
            </ul>
        )
    }
}