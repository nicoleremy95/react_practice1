
class App extends React.Component{
    render(){
        return(
            <div>
                <Rando maxNum={7}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))