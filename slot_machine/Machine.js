class Machine extends React.Component{

    render(){
        //props can't change so use const instead of let 
        const {s1,s2,s3} = this.props;
        const winner = (s1===s2) && (s2===s3)

        return(
            <div>
                <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                <p>{winner ? "Winner!" : "loser!"}</p>
            </div>
        )
    }
}