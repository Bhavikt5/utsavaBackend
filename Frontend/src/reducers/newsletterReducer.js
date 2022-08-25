import {
  CREATE_SUBSCRIBER_REQUEST,
  CREATE_SUBSCRIBER_SUCCESS,
  CREATE_SUBSCRIBER_FAIL,
} from "../constants/newsletterContants";
import { CLEAR_ERRORS } from "../constants/productConstants";

export const newSubscriberReducer = (state = { newsletter: {} }, action) => {
  switch (action.type) {
    case CREATE_SUBSCRIBER_REQUEST:
      return {
        loading: true,
      };
    case CREATE_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        newsletter: action.payload,
      };
    case CREATE_SUBSCRIBER_FAIL:
      return {
        ...state,
        loading: false,
        newsletter: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
