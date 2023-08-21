import { connect } from "react-redux";
import { decrement, increment } from "./redux/counter/action";

const Counter = ({ count, increment, decrement }) => {



  return (
    <div>
      <div className="card">
        <button  onClick={()=> increment()}>Increment</button>
        <button  onClick={()=> decrement()}>Decrement</button>
        <p>Count is {count} </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
