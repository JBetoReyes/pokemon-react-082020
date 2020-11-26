export interface IAppFetchResponse {
  message?: string;
}

export type IFetchResponseHandler<R> = <R extends IAppFetchResponse>(
  response: Response
) => Promise<R>;
