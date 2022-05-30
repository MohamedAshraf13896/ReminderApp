import { ADD_REMINER, CLEAR_REMINDER } from "../Types/types";
import { REMOVE_REMINDER } from "../Types/types";

const Reminder = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINER) {
    reminders = [
      ...state,
      { text: action.text, datee: action.datee, id: Math.random() },
    ];
    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
    reminders = state.filter((item) => item.id != action.id);
    return reminders;
  } else if (action.type === CLEAR_REMINDER) {
    reminders = [];
    return reminders;
  } else {
    return state;
  }
};

export default Reminder;
