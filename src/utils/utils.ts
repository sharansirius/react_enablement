// eslint-disable-next-line consistent-return
export const cloneObject = (obj: string) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const getAdConfigObject = (
  CONFIG_OBJ: any,
  forVideo: boolean,
  hasAd: boolean
) => {
  return {
    adDuration: CONFIG_OBJ.AD_DURATION,
    adBanners: CONFIG_OBJ.AD_BANNERS,
    interval: CONFIG_OBJ.INTERVAL,
    forVideo,
    hasAd,
    messages: {
      adStart: CONFIG_OBJ.AD_OFF_IN,
      adStop: CONFIG_OBJ.AD_ON_IN,
    },
  };
};
