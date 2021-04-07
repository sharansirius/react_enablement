import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Heading, VideoWithAd } from "../../components";
import withAdTimer from "../../hoc/withAdTimer/WithAdTimer";
import * as _service from "../../services/MovieService";
import styles from "./teasersList.module.scss";
import { VIDEO } from "../../constants/appConstants";

function TeasersList() {
  const [teaserList, setTeaserList] = useState([]);
  const TeaserWithAd = withAdTimer(VideoWithAd, {
    adDuration: VIDEO.TEASER.AD_DURATION,
    adBanners: VIDEO.TEASER.AD_BANNERS,
    interval: VIDEO.TEASER.INTERVAL,
    forVideo: true,
    messages: {
      adStart: VIDEO.TEASER.AD_OFF_IN,
      adStop: VIDEO.TEASER.AD_ON_IN,
    },
  });
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
