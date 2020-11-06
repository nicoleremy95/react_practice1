class App extends React.Component {
    render(){
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    age ={3}
                    data = {[1,2,3,4,5]}
                    isFunny={true}
                    bangs = {2}
                    img="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
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