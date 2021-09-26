import { connect } from 'react-redux';

// store initialState store初始值
const initialState = {
  count: 0
};

// reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_ONE':
      return { count: state.count + 1 };
    case 'MINUS_ONE':
      return { count: state.count - 1 };
    case 'CUSTOM_COUNT':
      return { count: state.count + action.payload.count };
    default:
      break;
  }

  return state;
};

export const index = (props) => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
