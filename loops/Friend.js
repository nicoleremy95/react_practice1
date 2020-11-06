
class Friend extends React.Component{
    render(){
        const {name,hobbies} = this.props
        const hobbiesList = hobbies.map(item => <li>{item}</li>)

        return(
            <div>
                <h1>Friends</h1>
                <h1>{name}</h1>
                <ul>
                    {hobbiesList}
                </ul>
            </div>
        )
    }
}