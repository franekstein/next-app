export const getParam = (
  param: string | string[] | undefined,
  defaultValue: number
) => {
  if (!param || Array.isArray(param)) {
    return defaultValue
  }
  const value = parseInt(param)
  return isNaN(value) ? defaultValue : value
}

const isRouteDynamic = (route: string) => route.match(/\[[\.\-a-zA-Z0-9]+\]/)

export const isRouteActive = (pattern: string, route: string) => {
  const match = isRouteDynamic(pattern)
  if (!match) {
    return pattern === route
  }
  const routeBase = pattern.substring(0, match.index)
  return route.startsWith(routeBase)
}

export const createQueryParams = (
  params: Record<string, string | number | undefined | null>
) => {
  const queryString = Object.keys(params)
    .map((k) => `${k}=${encodeURI(`${params[k]}`)}`)
    .join('&')
  return queryString ? `?${queryString}` : ''
}
