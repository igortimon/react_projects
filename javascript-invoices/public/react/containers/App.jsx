import { Component } from 'react'
import InvoicesForm from '../components/InvoicesForm'
import InvoicesList from '../components/InvoicesList'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {invoices: [], customers: [], products: []}
    }

    render () {
		console.log(this.state);
        return (
            <div className="row">
				<div className="col">
                	<InvoicesList />
				</div>
				<div className="col">
					<InvoicesForm />
				</div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
)
