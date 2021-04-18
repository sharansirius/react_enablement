import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import withAdTimer from "../../../hoc/withAdTimer/withAdTimer";
import { VIDEO } from "../../../constants/appConstants";
import Video from "../video";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

const { TEASER, VIDEO_DEFAULTS } = VIDEO;

const TeaserWithAd = withAdTimer(Video, {
  adDuration: TEASER.AD_DURATION,
  adBanners: TEASER.AD_BANNERS,
  interval: TEASER.INTERVAL,
  forVideo: true,
  messages: { adStart: TEASER.AD_OFF_IN, adStop: TEASER.AD_ON_IN },
  hasAd: true,
});

const TimedTeaser = () => (
  <TeaserWithAd
    src="http://techslides.com/demos/sample-videos/small.mp4"
    type="video/mp4"
    poster={VIDEO_DEFAULTS.POSTER}
    classSelector="large"
  />
);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TimedTeaser />, div);
});
