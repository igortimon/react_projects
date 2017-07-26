import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {invoices: [], customers: {}, products: {}}
    }

    componentDidMount() {
        let that = this;
        let xhr  = new XMLHttpRequest();
        xhr.open('GET', '/api/invoices', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                that.setState(Object.assign({}, this.state, {invoices: JSON.parse(xhr.responseText)}))
            };
        }
    }

    render () {
        return (
            <div>
                {this.state.invoices.map((invoice)=>{
                    return (
                        <div>{invoice}</div>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
)
