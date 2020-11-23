// class Game extends React.Component{
//     //initializing state
//     constructor(props){
//         super(props);
//         this.state = {
//             score: 0,
//             gameOver: false
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Your score is: {this.state.score}</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Game/>, document.getElementById('root'))

//ALTERNATE SYNTAX
class Game extends React.Component{
    //initializing state
    state = {
        score: 0,
        gameOver: false
    }
    render(){
        return(
            <div>
                <h1>Your score is: {this.state.score}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'))