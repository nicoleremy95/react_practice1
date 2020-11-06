class Machine extends React.Component{

    render(){
        //props can't change so use const instead of let 
        const animals = this.props.animals
        let randomAnimals1 = animals[Math.floor(Math.random()*animals.length)]
        let randomAnimals2 = animals[Math.floor(Math.random()*animals.length)]
        let randomAnimals3 = animals[Math.floor(Math.random()*animals.length)]
        const winner = (randomAnimals1===randomAnimals2) && (randomAnimals2===randomAnimals3)
        const color ={backgroundColor:"purple"}
        return(
            <div className="Machine">
                <p 
                    style={{fontSize: '50px'}}
                >
                {randomAnimals1} {randomAnimals2} {randomAnimals3}
                </p>
                <p
                    style={color}
                >
                    {winner ? "Winner!" : "loser!"}
                </p>
                <p
                    className={winner? "Machine-winner": "Machine-loser"}
                >
                    {winner ? "good job!" : "try again!"}
                </p>

            </div>
        )
    }
}