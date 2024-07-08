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
  "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg";

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
