let root = ReactDOM.createRoot(document.getElementById('myroot'))


class Greetings1 extends React.Component{
    
        render(){
            const names = this.props.names;
            const randomNum = Math.floor(Math.random() * names.length)
            
            return(
            <div>
            <h2 className="mx-5">Hello {names[randomNum]}!!</h2>
            </div>
            )
        }
    }
    function Greetings2(){
        // const names = props.names;
        // const randomNum = Math.floor(Math.random() * names.length)
        
    
        return (
            <h1 className="text-center m-5 bg-primary text-white rounded-3">Greetings Page</h1>
           
        )
    }


const names = ['Sireesha','Nagireddy','Jane','Mike','David','Shawn','Bal','Brendan','Immaculate','Bruce','Yan','Walter','Benson','Artin','Audriana','Falguni']
root.render([<Greetings2/>,<Greetings1 names={names}/>])
