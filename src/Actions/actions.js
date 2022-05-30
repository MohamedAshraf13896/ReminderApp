import { ADD_REMINER } from "../Types/types";
import { REMOVE_REMINDER } from "../Types/types";
import { CLEAR_REMINDER } from "../Types/types";

export const add_reminder = (text, datee) => {
  const action = {
    type: ADD_REMINER,
    text,
    datee,
  };
  return action;
};

export const remove_reminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id,
  };
  console.log("remove", action);
  return action;
};

export const clear_reminder = () => {
  const action = {
    type: CLEAR_REMINDER,
  };
  return action;
};
