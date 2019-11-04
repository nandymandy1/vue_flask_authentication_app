import axios from "axios";
import { baseURL } from "../Constants";

// Create axios instance
axios.defaults.baseURL = baseURL;

/**
 * @DESC Dedicated function to make POST Request with any data
 */
export const postData = async (endPt, fields) => {
  try {
    return await axios.post(endPt, fields);
  } catch (err) {
    return err.response;
  }
};

/**
 * @DESC Dedicated function to make PUT Request with any data
 */
export const putData = async (endPt, fields) => {
  try {
    return await axios.post(endPt, fields);
  } catch (err) {
    return err.response;
  }
};

/**
 * @DESC Dedicated function to make any GET request with any params
 */
export const getData = async endPt => {
  try {
    return await axios.get(endPt);
  } catch (err) {
    return err.response;
  }
};

/**
 * @DESC Dedicated function to make any DELETE request with any params
 */
export const deleteData = async endPt => {
  try {
    return await axios.delete(endPt);
  } catch (err) {
    return err.response;
  }
};
