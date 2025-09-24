// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Files extends APIResource {
  /**
   * Upload a file via multipart form and create a Research File object.
   *
   * @example
   * ```ts
   * const file = await client.research.files.create({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  create(body: FileCreateParams, options?: RequestOptions): APIPromise<FileCreateResponse> {
    return this._client.post(
      '/research/files',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns a paginated list of Research File objects.
   *
   * @example
   * ```ts
   * const files = await client.research.files.list();
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/research/files', { query, ...options });
  }
}

export interface FileCreateResponse {
  /**
   * Unique identifier for the file.
   */
  id: string;

  /**
   * MIME type of the file as detected/stored.
   */
  content_type: string;

  /**
   * Original uploaded filename.
   */
  file_name: string;
}

export interface FileListResponse {
  /**
   * List of file objects.
   */
  data: Array<FileListResponse.Data>;

  pagination: FileListResponse.Pagination;
}

export namespace FileListResponse {
  export interface Data {
    /**
     * Unique identifier for the file.
     */
    id: string;

    /**
     * MIME type of the file as detected/stored.
     */
    content_type: string;

    /**
     * Original uploaded filename.
     */
    file_name: string;
  }

  export interface Pagination {
    /**
     * Whether another page is available.
     */
    has_next: boolean;

    /**
     * Page size (items per page).
     */
    limit: number;

    /**
     * Current page number (1-based).
     */
    page: number;

    /**
     * Total number of items (may be omitted).
     */
    total?: number;
  }
}

export interface FileCreateParams {
  file: Uploadable;
}

export interface FileListParams {
  /**
   * Page size (items per page).
   */
  limit?: number;

  /**
   * 1-based page index.
   */
  page?: number;
}

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileListResponse as FileListResponse,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };
}
