import { PAGE_URL } from '@/constants';

export const getParam = (
  param: string | string[] | undefined,
  defaultValue: number
) => {
  if (!param || Array.isArray(param)) {
    return defaultValue;
  }
  const value = parseInt(param);
  return isNaN(value) ? defaultValue : value;
};

const isRouteDynamic = (route: string) => route.match(/\[[\.\-a-zA-Z0-9]+\]/);

export const isRouteActive = (pattern: string, route: string) => {
  const match = isRouteDynamic(pattern);
  if (!match) {
    return pattern === route;
  }
  const routeBase = pattern.substring(0, match.index);
  return route.startsWith(routeBase);
};

export const createQueryParams = (
  params: Record<string, string | number | undefined | null>
) => {
  const queryString = Object.keys(params)
    .map((k) => `${k}=${encodeURI(`${params[k]}`)}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
};

export const isExternalLink = (url: string) => {
  const URL_REGEX =
    /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;

  return URL_REGEX.test(url) && !url.startsWith(PAGE_URL);
};
