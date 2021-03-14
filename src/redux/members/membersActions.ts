import { FETCH_MEMBERS_FAILURE, FETCH_MEMBERS_SUCCESS } from "./membersTypes";
import * as _services from "../../services/UserService";
import { Dispatch } from "redux";
import { Member } from "../../components";

const fetchMembersSuccess = (members: Array<Member>) => {
  return {
    type: FETCH_MEMBERS_SUCCESS,
    payload: members,
  };
};

const fetchMembersFailure = (error: string) => {
  return {
    type: FETCH_MEMBERS_FAILURE,
    payload: error,
  };
};

export const fetchMembers = () => {
  return function (dispatch:Dispatch) {
    _services.getUsers()
    .then((response) => {
        const members:Array<Member> = response.data.map( (member:Member) => ({ 
            name: member.name,
            photo: member.photo,
            username: member.username
        }));
        dispatch(fetchMembersSuccess(members));
      })
      .catch((error) => {
        dispatch(fetchMembersFailure(error.message));
      });    
  };
};
