import { FETCH_MEMBERS_FAILURE, FETCH_MEMBERS_SUCCESS } from "./membersTypes";
const members = (state = [], action: MemberAction ) => {
  switch (action.type) {
    case FETCH_MEMBERS_FAILURE:
        return state
    case FETCH_MEMBERS_SUCCESS:
        return action.payload
    default:
      return state;
  }
};

export default members;
