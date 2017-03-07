import React ,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import Input from "../components/Input";
import Btn from "../components/Btn";


//引入方法与常量
import {addNum,subNum} from "../actions/actions";

//

class App extends Component {
  render(){
    const {number,dispatch} =this.props;
    return(
      <div>
          <Input number ={number}/>
          <div style={{float:"left"}}>
            <Btn text="加" handleClick={()=>dispatch(addNum())}></Btn>
          </div>
          <div style={{float:"left"}}>
            <Btn text="减" handleClick={()=>dispatch(subNum())}></Btn>
          </div>

      </div>
    )
  }
}


function select(state){
  return{
    number:state.number
  }

}


export default connect(select)(App);
