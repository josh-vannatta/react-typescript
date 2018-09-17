import { connect } from 'react-redux';

import { CourseActions } from "./courses/CourseActions";
import { AuthorActions } from "./authors/AuthorActions";

export function dispatch(Component, mappings) {
  let map = {
    state: state => {
        if ( mappings.state == null || !mappings.state)
          return {};
        if ( typeof mappings.state === 'object' )
          return state;
        if ( typeof mappings.state === 'function')
          return state => mappings.state(state);
        let finalState = {};
        mappings.state.forEach(param => {
            finalState[param] = state[param]
        });
        return finalState;
    },
    dispatch: dispatch => {
      let types = Object.getOwnPropertyNames(mappings.actions.prototype);
      let actions = new mappings.actions();
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

export function loadStore(store) {
  let courseActions = new CourseActions();
  let authorActions = new AuthorActions();
  store.dispatch(courseActions.loadCourses());
  store.dispatch(authorActions.loadAuthors());
}
