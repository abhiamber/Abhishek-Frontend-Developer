import { API } from "../API";
import { EVENT_ERROR, GETDATA } from "./Type";

export const getCapsules = () => async (dispatch) => {
  let res = await fetch(`${API}/capsules`);
  try {
    let data = await res.json();
    // console.log(data, "njbnhj");
    if (data.status === "Ok") {
      console.log("njbjbjhbhb");
      dispatch({ type: GETDATA, payload: data.messg });
    } else {
    }
  } catch (e) {
    console.log(e.message);
    dispatch({ type: EVENT_ERROR });
  }
};
