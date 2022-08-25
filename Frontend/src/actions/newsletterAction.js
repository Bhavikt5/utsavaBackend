import {
  CREATE_SUBSCRIBER_FAIL,
  CREATE_SUBSCRIBER_REQUEST,
  CREATE_SUBSCRIBER_SUCCESS,
} from "../constants/newsletterContants";
import axios from "axios";

export const subscriber = (subscriberData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SUBSCRIBER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/newsletter`,
      subscriberData,
      config
    );

    dispatch({
      type: CREATE_SUBSCRIBER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SUBSCRIBER_FAIL,
      payload: error.response.data.message,
    });
  }
};
