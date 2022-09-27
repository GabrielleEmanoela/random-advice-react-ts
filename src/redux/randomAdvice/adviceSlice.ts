import { createSlice } from "@reduxjs/toolkit";

type TAdivceProps = {
  advice: {
    id: number;
    advice: string;
  }
};

const initialState: TAdivceProps = {
  advice: {
    id: 0,
    advice: "",
  },
};

const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
    setAdivce(state, { payload }) {
      state.advice = payload;
    },
  },
});

export const { setAdivce } = adviceSlice.actions;
export default adviceSlice.reducer;
