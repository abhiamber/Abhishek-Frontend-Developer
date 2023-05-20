import { API } from "../API";
import { EVENT_ERROR, GETDATA } from "./Type";

export const getCapsules = (page) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || null;
  if (token) {
    token = token.token;
  } else {
    return alert("plz registerd");
  }
  let res = await fetch(`${API}/capsules?page=${page}`, {
    headers: {
      "content-type": "application/json",
      token: token,
    },
  });
  try {
    let data = await res.json();
    console.log(data, "njbnhj");
    if (data.status === "Ok") {
      //   console.log("njbjbjhbhb");
      dispatch({ type: GETDATA, payload: data.messg });
    } else {
    }
  } catch (e) {
    console.log(e.message);
    dispatch({ type: EVENT_ERROR });
  }
};

export const serachCapsules = (search) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || null;
  if (token) {
    token = token.token;
  } else {
    return alert("plz registerd");
  }
  let res = await fetch(`${API}/capsules?search=${search}`, {
    headers: {
      "content-type": "application/json",
      token: token,
    },
  });
  try {
    let data = await res.json();
    console.log(data, "njbnhj");
    if (data.status === "Ok") {
      //   console.log("njbjbjhbhb");
      dispatch({ type: GETDATA, payload: data.messg });
    } else {
    }
  } catch (e) {
    console.log(e.message);
    dispatch({ type: EVENT_ERROR });
  }
};

export const statusCapsules = (status) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || null;
  if (token) {
    token = token.token;
  } else {
    return alert("plz registerd");
  }
  let res = await fetch(`${API}/capsules?status=${status}`, {
    headers: {
      "content-type": "application/json",
      token: token,
    },
  });
  try {
    let data = await res.json();
    console.log(data, "njbnhj");
    if (data.status === "Ok") {
      //   console.log("njbjbjhbhb");
      dispatch({ type: GETDATA, payload: data.messg });
    } else {
    }
  } catch (e) {
    console.log(e.message);
    dispatch({ type: EVENT_ERROR });
  }
};

export const typesCapsules = (type) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("userInfo")) || null;
  if (token) {
    token = token.token;
  } else {
    return alert("plz registerd");
  }
  let res = await fetch(`${API}/capsules?type=${type}`, {
    headers: {
      "content-type": "application/json",
      token: token,
    },
  });
  try {
    let data = await res.json();
    console.log(data, "njbnhj");
    if (data.status === "Ok") {
      //   console.log("njbjbjhbhb");
      dispatch({ type: GETDATA, payload: data.messg });
    } else {
    }
  } catch (e) {
    console.log(e.message);
    dispatch({ type: EVENT_ERROR });
  }
};
