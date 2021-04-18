import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading, Teaser } from "../../components";
import withAdTimer from "../../hoc/withAdTimer/withAdTimer";
import * as _service from "../../services/MovieService";
import { getAdConfigObject } from "../../utils/utils";
import styles from "./teasersList.module.scss";
import { VIDEO } from "../../constants/appConstants";

function TeasersList() {
  const [teaserList, setTeaserList] = useState([]);
  const TeaserWithAd = withAdTimer(
    Teaser,
    getAdConfigObject(VIDEO.TEASER, true, true)
  );
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
          teaserList.map((item: Teaser) => {
            return (
              <TeaserWithAd
                key={uuidv4()}
                classSelector="medium"
                src={item.link}
                name={item.name}
              />
            );
          })
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
