import React, { MouseEvent, useEffect, useState } from "react";
import styles from "./members.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { Member, Modal } from "../";
import * as _services from "../../services/UserService";

function Members({clickToHide}:MembersProps) { 
  console.log("Members init");
  const [data, setData] = useState([]);
  useEffect(() => {
    _services.getUsers().then((res) => {
        setData(res.data);
    });
  }, []);  
  return (
    <Modal closeModal={clickToHide}>
        <div className={styles.members}>
        {
            (data && data.length > 0) ?
            data.map((item) => (
                <Member key={uuidv4()} data={item} />
            )) 
            : ''
        }
        </div>
    </Modal>
  );
}
interface MembersProps {
    clickToHide:(event: MouseEvent<HTMLElement>) => void,
}

export default Members;
