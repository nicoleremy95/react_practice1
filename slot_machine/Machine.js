class Machine extends React.Component{

    render(){
        
        let whale = this.props.s1
        let octopus = this.props.s2
        let unicorn = this.props.s3

        let animals = [whale, octopus, unicorn]
        console.log("animals", animals)

        let randomAnimal = animals[Math.floor(Math.random()*randomAnimal.length)]
        console.log('randomAnimal', randomAnimal)
        return(
            <div>
                <p>{randomAnimal}</p>
                <p>{randomAnimal}</p>
                <p>{randomAnimal}</p>
            </div>
        )
    }
}