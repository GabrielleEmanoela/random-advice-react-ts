import { api } from "../../services/api";
import { AppDispatch } from "../advice.store";
import { setAdivce } from "./adviceSlice";

export const actionAdvice = () => async (dispatch: AppDispatch) => {
    try {
      const { data } = await api.get("/advice");
      if (data) {
        return dispatch(setAdivce(data.slip));
      } 
       console.log("error");
      
    } catch (err) {
      console.log(err);
    }
  };
