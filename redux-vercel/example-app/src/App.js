import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { flag: false },
  reducers: {
    toggle: (state) => {
      state.flag = !state.flag;
    },
  },
});

const { toggle } = toggleSlice.actions;
const toggleReducer = toggleSlice.reducer;

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

function Toggler() {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.toggle.flag);

  return (
    <button onClick={() => dispatch(toggle())}>{flag ? "On" : "Off"}</button>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Toggler />
    </Provider>
  );
}

export default App;
