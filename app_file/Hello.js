//CLASS BASED COMPONENT

class Hello extends React.Component {
	render() {
		return (
			<div>
                <h1>hello</h1>
		    </div>
		);
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))