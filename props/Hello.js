//CLASS BASED COMPONENT

class Hello extends React.Component {
	render() {
		return (
			<div>
                <h1>hi: {this.props.to}</h1>
                <h1>from: {this.props.from}</h1>
		    </div>
		);
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))