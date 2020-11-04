function randomNum (){
    return Math.floor(Math.random() * 10) +1;
}
class NumPicker extends React.Component {
    
    render(){
        const num = randomNum();
        let message;
        if(num === 5){
            message = 
                <div>
                    <h2>congratulations, you got 5!</h2>
                </div>
        }else {
            message = 
                <p>sorry, you didn't get 5</p>
        }
        return (
            <div>
                <h1>number picker</h1>
                <h2>your number is: {num}</h2>
                <p>{num === 7 ? "this is the golden number!": "this is a silver number!"}</p>
                {message}
                {num === 7 ? <img src="https://media.giphy.com/media/mF7pWyfpUm8fuYVOHi/giphy.gif"/> : null}
            </div>
        )
    }
}