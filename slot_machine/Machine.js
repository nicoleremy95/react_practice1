class Machine extends React.Component{

    render(){
        //props can't change so use const instead of let 
        // const {s1,s2,s3} = this.props;
        // const winner = (s1===s2) && (s2===s3)
        const animals = this.props.animals
        let randomAnimals1 = animals[Math.floor(Math.random()*animals.length)]
        let randomAnimals2 = animals[Math.floor(Math.random()*animals.length)]
        let randomAnimals3 = animals[Math.floor(Math.random()*animals.length)]
        const winner = (randomAnimals1===randomAnimals2) && (randomAnimals2===randomAnimals3)
        return(
            <div>
                <p>{randomAnimals1} {randomAnimals2} {randomAnimals3}</p>
                <p>{winner ? "Winner!" : "loser!"}</p>
            </div>
        )
    }
}