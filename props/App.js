class App extends React.Component {
    render(){
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from ="Paul" 
                    age ={3}
                    data = {[1,2,3,4,5]}
                    isFunny={true}
                    bangs = {2}
                />
                <Hello 
                    to="Cher" 
                    from ="Sunny" 
                    age ={5}
                    data = {[1,2,3,4,5]}
                    isFunny= {false}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))