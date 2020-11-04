
function getMood(){
    const moods = ["angry", 'sad', 'happy', 'frantic']
    return moods [Math.floor(Math.random() * moods.length)]
}
class JSXDemo extends React.Component {
    render(){
        return(
            <div>
                {/* references and excutes a function called getMood */}
                <h1>My current mood: {getMood()}</h1>
            </div>

        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
