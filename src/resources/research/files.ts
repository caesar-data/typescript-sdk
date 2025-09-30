// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, Pagination, type PaginationParams } from '../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const fileListResponse of client.research.files.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FileListResponsesPagination, FileListResponse> {
    return this._client.getAPIList('/research/files', Pagination<FileListResponse>, { query, ...options });
  }
}

export type FileListResponsesPagination = Pagination<FileListResponse>;

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

export interface FileCreateParams {
  file: Uploadable;
}

export interface FileListParams extends PaginationParams {}

export declare namespace Files {
  export {
    type FileCreateResponse as FileCreateResponse,
    type FileListResponse as FileListResponse,
    type FileListResponsesPagination as FileListResponsesPagination,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };
}
