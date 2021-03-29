import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading, Teaser } from "../../components";
import * as _service from "../../services/MovieService";
import styles from "./teasersList.module.scss";

function TeasersList() {
  const [teaserList, setTeaserList] = useState([]);
  useEffect(() => {
    _service
      .getShortTeasers()
      .then((res) => {
        setTeaserList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return (
    <div className={styles.teasers}>
      <Heading classSelector="medium" label="Short Teasers" />
      <div className={styles.teasersList}>
        {teaserList && teaserList.length > 0 ? (
          teaserList.map((item) => <Teaser key={uuidv4()} data={item} />)
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
}

// interface TeasersListProps {
//   TeasersList: string;
// }

export default React.memo(TeasersList);
