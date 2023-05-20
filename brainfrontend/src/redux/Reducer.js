import { GETDATA, EVENT_ERROR, EVENT_LOADING, EVENT_SUCCESS } from "./Type";

const initialState = {
  data: [],
  error: false,
  loading: true,
};
export const capSulesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETDATA: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case EVENT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case EVENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }
    case EVENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        events: payload,
      };
    }
    default: {
      return state;
    }
  }
};
