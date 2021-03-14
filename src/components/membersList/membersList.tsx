import React, { MouseEvent } from "react";
import styles from "./membersList.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Member, Modal } from "..";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchMembers } from "../../redux";

function MembersList({ clickToHide }: MembersListProps) {
  console.log("MembersList init");
  const data = useSelector((state: BlogAppStore) => state.members);
  const dispatch: Dispatch = useDispatch();
  if (data && data.length === 0) {
    dispatch<any>(fetchMembers());
  }

  return (
    <Modal closeModal={clickToHide}>
      <div className={styles.membersList}>
        {data && data.length > 0
          ? data.map((item) => <Member key={uuidv4()} data={item} />)
          : ""}
      </div>
    </Modal>
  );
}
interface MembersListProps {
  clickToHide: (event: MouseEvent<HTMLElement>) => void;
}

export default MembersList;
