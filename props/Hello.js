//CLASS BASED COMPONENT

class Hello extends React.Component {
	render() {
		let bangs = "!".repeat(this.props.bangs)
		return (
			<div>
                <h1>hi: {this.props.to}</h1>
                <h1>from: {this.props.from}</h1> {bangs}
				<p>I am writing to you because I have a dog who is {this.props.age} years old and I would love to find him a new home.</p>
				{/* {isFunny? <p>this is so funny because I know you already have 12 dogs, but I think you would love him!</p>: <p>I know this would be your first dog</p>} */}
		    
			</div>
		);
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))