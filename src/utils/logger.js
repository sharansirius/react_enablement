const logger = {
  oldLog: null,
  config: {
    enableLogger: () => {
      if (logger.oldLog == null) return;
      window["console"]["log"] = logger.oldLog;
    },

    disableLogger: () => {
        logger.oldLog = console.log;
      window["console"]["log"] = function () {};
    },
  },
};

export default logger;
