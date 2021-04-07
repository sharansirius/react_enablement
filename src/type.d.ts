/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 *
 * It's the core runtime of what Google LightHouse is build atop.
 *
 * @see https://web.dev/vitals/ Essential metrics for a healthy site
 * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */
type NextWebVitalsMetrics = {
  id: string;
  label: string;
  name: string;
  startTime: number;
  value: number;
};

/**
 * Group all vital metrics together, using their own "name" property as key.
 *
 * Meant to help regroup multiple reports together to send them all at once, to reduce API calls.
 *
 * @see https://web.dev/vitals/ Essential metrics for a healthy site
 * @see https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */
type NextWebVitalsMetricsReport = {
  reportedCount: number; // Number of times a report has been sent, kinda help to trace how long a same client-side session was
  reportId: string; // ID of the "report", helps grouping reports with different data but same reportId together when analysing data
  metrics: {
    CLS?: NextWebVitalsMetrics; // First contentful paint, triggers on page load
    FCP?: NextWebVitalsMetrics; // First contentful paint, triggers on page load
    FID?: NextWebVitalsMetrics; // First input delay, trigger on first end-user interaction (click)
    LCP?: NextWebVitalsMetrics; // Largest contentful paint, triggers on first end-user interaction (sometimes doesn't trigger)
    "Next.js-hydration"?: NextWebVitalsMetrics; // Triggers on page load
    "Next.js-render"?: NextWebVitalsMetrics; // Triggers on client-side redirection (<Link>)
    "Next.js-route-change-to-render"?: NextWebVitalsMetrics; // Triggers on client-side redirection (<Link>)
    TTFB?: NextWebVitalsMetrics; // Time to first byte, triggers on page load
  };
};

type UserAuth = {
  isLoggedIn: boolean;
};

type UserAuthAction = {
  type: string;
};

type MovieAction = {
  type: string;
  data: Movie | Array<Movie>;
};

type CineStore = {
  auth: UserAuth;
  movie: {
    list: Array<Movie>;
    selectedMovie: Movie;
  };
};

type Teaser = {
  name: string;
  link: string;
};

type LotteryState = {
  isSubmitted: boolean;
  payload: any;
};

type LotteryAction = {
  type: string;
  payload: any;
};

type Movie = {
  actors: Array<string>;
  averageRating: number;
  contentRating: string;
  duration: string;
  genres: Array<string>;
  imdbRating: number;
  originalTitle: string;
  poster: string;
  posterurl: string;
  ratings: Array<number>;
  releaseDate: string;
  storyline: string;
  title: string;
  year: string;
  image: string;
  name: string;
  likes: number;
  index: number;
};

type PrivateRouteProps = {
  authenticationPath: string;
} & RouteProps;

type AdTimerConfig = {
  adDuration: number;
  interval: number;
  adBanners: string[];
  messages: { adStart: string; adStop: string };
  forVideo: boolean;
};
