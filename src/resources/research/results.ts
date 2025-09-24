// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Results extends APIResource {
  /**
   * Returns the raw content for a specific result within a research object.
   *
   * @example
   * ```ts
   * const response =
   *   await client.research.results.retrieveContent(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieveContent(
    resultID: string,
    params: ResultRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<ResultRetrieveContentResponse> {
    const { id } = params;
    return this._client.get(path`/research/${id}/results/${resultID}/content`, options);
  }
}

export interface ResultRetrieveContentResponse {
  /**
   * Raw extracted content for this result (may include HTML, markdown, or plain
   * text).
   */
  content: string;
}

export interface ResultRetrieveContentParams {
  /**
   * Research job identifier.
   */
  id: string;
}

export declare namespace Results {
  export {
    type ResultRetrieveContentResponse as ResultRetrieveContentResponse,
    type ResultRetrieveContentParams as ResultRetrieveContentParams,
  };
}
