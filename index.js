import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


// functionality way fo writing
// const App =() => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//    this html content inside the return method gets rendered well before we get the position result
//    so once we get the position value we are in a situation to make re-render to happen so we switch 
//    for class based component since this feature of re-rendering is not possible in function based components(but in latest hooks possible)
//   return(
//     <div>
//       Location:   
//     </div>
//   );
// };

// class which we create will contain only one method which is render() method, so we in order to get access
// to the remaining in built functions/methods we do "extends" to react.component
class App extends React.Component {
 // App class basically extends the React component base class which basically contains
// constructor method(parent method) which we are trying to override here, but at the same time we also need the
//setup code present at the parent constructor to get called here, so we do super(props)
  // constructor(props){
  //   super(props)
  //   this.state = {lat: null, errorMessage: ''};
  // }

  //another way of state initialization, babel converts this single line of state initialization into
  //the whole code as bove with constructor.(to check try in babeljs.io)
  state = { lat: null, errorMessage: ''}

  //this method gets called automatically first time when our component shows up on the screen
  //whcih means like on after very first render this method will get called thats it
  //this will be called only one time. Any data loading needs to be done here like geolocation
  //which needs to be called only one time. we can also write data loading coe inside constructor which
  //is also right but it is recommended to do it here
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat : position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //this method gets called after every single update - whcih means after eact setstate happens render() 
  // gets called followed by this method
  //Ex - Every single time if u want to make an network req on clicking a button
  //Ex - do some action on every single time if we receive props from parent component
  // componentDidUpdate(){
  //   console.log('component gets called for update')
  // }

  //This method is used when we want to remove the component from the screen
  // componentWillUnmout()

//shouldComponentUpdate(),getDerivedStateFromProps()---> some of rarely used component life cycle methods


//function Declartion Sample ---> they are hoisted
// function functionName(){} 

//function expresion Sample -----> they are not hoisted
// const functionName = function (){} or
// const functionName = () => {}

// IMP ---> Methods on the class cannot be written as function expressions or declarations.

// Below is a class property methos so inorder to acces them also we need to use "this"
renderContent() // or renderContent =() => {} 
{
  if(this.state.lat && !this.state.errorMessage){
    return (
      <div>
        <SeasonDisplay lat={this.state.lat}/>
      </div>
    )
  }else if (!this.state.lat && this.state.errorMessage){
    return <div>Error : {this.state.errorMessage}</div>
  }
  return <div><Spinner/></div>
}  

 //we should avoid multiple logic and return statements inside render().
render(){
  return(
   <div>
     {/* the reason why we use "this" is, the methods which we write under class based compoents are called
      class property methods which needs to be treated same as like a state */}
     {this.renderContent()}; 
   </div>
   )
  };
}

ReactDOM.render(<App/>, document.querySelector('#root'))
