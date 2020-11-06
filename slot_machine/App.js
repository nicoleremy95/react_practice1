
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machine!</h1>
                {/* <Button/> */}
                <Machine
                    animals = {["🐳", "🐙", "🦄"]}
                />
                <Machine
                    animals = {["🐳", "🐙", "🦄"]}
                />
                <Machine
                    animals = {["🐳", "🐙", "🦄"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))