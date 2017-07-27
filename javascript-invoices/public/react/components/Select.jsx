import { Component } from 'react'
import Select from 'react-select'
import { getInfo } from '../scripts/requests'

export default class SelectWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {}

		this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        let that = this;
		getInfo({
			url: that.props.url,
			success: function(data) {
                that.setState(Object.assign({}, that.state, {data: data}));
			}
		})
    }

	onChange(value) {
		console.log(value);
		this.setState(Object.assign({}, this.state, {value}));
	}

    render() {
		let options = [];
		if(this.state.data) {
			this.state.data.map((item) => {
				let obj = {};
				obj.value = item.name;
				obj.label = item.name;
				obj.id = item.id;
				options.push(obj);
			})
		}
        return (
			<div className="select-wrap">
				<Select 
					name="form-field-name"
					options={options}
					onChange={this.onChange}
					multi={this.props.multi}
					value = {this.state.value}
				/>
				<ul className="list-group">
					{
						this.props.multi && this.state.value && this.state.value.map((item) => {
							return <li id={item.id} key={item.id} className="list-group-item">{item.value} <input name={`${item.id}-product`} className="quantity-input" type="number" defaultValue="1" min="1"/></li>
						})
					}
				</ul>
			</div>
        )
    }
}