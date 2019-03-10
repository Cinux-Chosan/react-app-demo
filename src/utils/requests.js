import { fetch } from 'whatwg-fetch';
import { parseUrl, stringify } from 'query-string';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default async (url, payloads, method = 'GET') => {
  const { url: pureUrl, query } = parseUrl(url);
  const options = { method };
  let reqUrl = url;
  switch (method.toUpperCase()) {
    case 'GET':
    case 'HEAD':
      reqUrl = `${pureUrl}?${stringify({ ...query, ...payloads })}`;
      break;
    default:
      options.body = payloads;
      break;
  }
  const response = await fetch(reqUrl, options);
  try {
    checkStatus(response);
    return response.json();
  } catch (error) {
    console.error(response.statusText);
    return null;
  }
};
