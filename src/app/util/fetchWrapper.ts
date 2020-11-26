import {
  IAppFetchResponse,
  IFetchResponseHandler,
} from '@typings/util/fetchWrapper';

const defaultResponseHandler = <R extends IAppFetchResponse>() => (
  response: Response
): Promise<R> => {
  return response.text().then((text) => {
    const data: R = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const get = <R extends IAppFetchResponse>(
  url: string,
  responseHandler?: IFetchResponseHandler<R>
): Promise<R> => {
  const requestOptions = {
    method: 'GET',
  };
  const handler = responseHandler || defaultResponseHandler<R>();
  return fetch(url, requestOptions).then(handler);
};

const post = <R extends IAppFetchResponse, B extends Record<string, any>>(
  url: string,
  body: B,
  responseHandler?: IFetchResponseHandler<R>
) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  const handler = responseHandler || defaultResponseHandler<R>();
  return fetch(url, requestOptions).then(handler);
};

export { get, post };
