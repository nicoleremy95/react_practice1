
class App extends React.Component{
    render(){
        return(
            <div>
                <Friend
                    name="beyonce"
                    hobbies={["singing","dancing","being a mom"]}
                />
                <Friend
                    name="frieda"
                    hobbies={["drawing","painting"]}
                />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'))