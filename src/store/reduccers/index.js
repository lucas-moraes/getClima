
const INITIAL_STATE = {
    item: [],
  };

export default function favorite(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {item: [action.title]};
      default:
        return state;
    }
  }