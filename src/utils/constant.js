export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
  },
};

export const movieCategory = [
  { endpoint: "now_playing", category: "Now Playing" },
  { endpoint: "top_rated", category: "Top Rated" },
  { endpoint: "popular", category: "Popular" },
  {endpoint: "upcoming", category: "Upcoming" },
];

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const SEARCH = [
  { value: "AI", label: "Gemini-AI" },
  { value: "Title", label: "Title" },
];

export const urls = (movieId) => [
  `https://api.themoviedb.org/3/movie/${movieId}`,
  `https://api.themoviedb.org/3/movie/${movieId}/credits`,
  `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
];
