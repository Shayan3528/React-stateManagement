const initialvalue = 0;
export default function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = initialvalue) };
    default:
      return state;
  }
}
