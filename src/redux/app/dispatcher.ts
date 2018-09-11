import { connect } from 'react-redux';

export function dispatch(Component, mappings) {
  let map = {
    state: state => {
        let finalState = {};
        mappings.state.forEach(param => {
            finalState[param] = state[param]
        });
        return finalState;
    },
    dispatch: dispatch => {
      let types = Object.getOwnPropertyNames(mappings.actions.prototype);
      let actions= new mappings.actions();
      let newActions = {};
      types.forEach(type=>{
        if (type == 'constructor') return;
        newActions[type] = props => dispatch(actions[type](props));
      })
      return { actions: newActions }
    }
  }

  return connect(map.state, map.dispatch)(Component)
}
