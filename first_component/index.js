//CLASS BASED COMPONENT
//Hello is the component name
// class Hello extends React.Component {
// 	//render method has to encompass return
// 	render() {
// 		return (
// 			//must wrap in div because you can only return one element in a component
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }


//FUNCTION COMPONENT
function Hello(){
	return (
		<div>
			<h1>panda!</h1>
			<img src="https://static01.nyt.com/images/2020/08/16/reader-center/14-panda-baby/14-panda-baby-videoSixteenByNineJumbo1600.jpg" alt="panda"/>
		</div>
	)
}
//render the Hello component where the div ID is root
ReactDOM.render(<Hello />, document.getElementById('root'));
