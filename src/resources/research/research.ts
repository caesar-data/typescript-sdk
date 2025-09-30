// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import {
  FileCreateParams,
  FileCreateResponse,
  FileListParams,
  FileListResponse,
  FileListResponsesPagination,
  Files,
} from './files';
import * as ResultsAPI from './results';
import { ResultRetrieveContentParams, ResultRetrieveContentResponse, Results } from './results';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, Pagination, type PaginationParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Research extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);

  /**
   * Start a new research job using a query and optional file IDs.
   *
   * @example
   * ```ts
   * const research = await client.research.create({
   *   query: 'Is lithium supply a bottleneck for EV adoption?',
   * });
   * ```
   */
  create(body: ResearchCreateParams, options?: RequestOptions): APIPromise<ResearchCreateResponse> {
    return this._client.post('/research', { body, ...options });
  }

  /**
   * Retrieve a single research object by ID.
   *
   * @example
   * ```ts
   * const research = await client.research.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ResearchRetrieveResponse> {
    return this._client.get(path`/research/${id}`, options);
  }

  /**
   * Returns a paginated list of research objects.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const researchListResponse of client.research.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ResearchListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ResearchListResponsesPagination, ResearchListResponse> {
    return this._client.getAPIList('/research', Pagination<ResearchListResponse>, { query, ...options });
  }
}

export type ResearchListResponsesPagination = Pagination<ResearchListResponse>;

export interface ResearchCreateResponse {
  /**
   * Research job identifier.
   */
  id: string;

  /**
   * Current status of the research job.
   */
  status: 'queued' | 'searching' | 'summarizing' | 'analyzing' | 'completed' | 'failed' | 'researching';
}

export interface ResearchRetrieveResponse {
  /**
   * Research job identifier.
   */
  id: string;

  /**
   * ISO 8601 timestamp when the job was created.
   */
  created_at: string;

  /**
   * Original query.
   */
  query: string;

  /**
   * Ranked retrieval results and citations.
   */
  results: Array<ResearchRetrieveResponse.Result>;

  /**
   * Current status of the research job.
   */
  status: 'queued' | 'searching' | 'summarizing' | 'analyzing' | 'completed' | 'failed' | 'researching';

  /**
   * Final content/synthesis (null until available).
   */
  content?: string | null;

  /**
   * Post-processed content (e.g., formatted/converted).
   */
  transformed_content?: string | null;
}

export namespace ResearchRetrieveResponse {
  export interface Result {
    /**
     * Result object identifier.
     */
    id: string;

    /**
     * Relevance score (0–1).
     */
    score: number;

    /**
     * Result title.
     */
    title: string;

    /**
     * Canonical URL of the result.
     */
    url: string;

    /**
     * Index used for inline citations (if present).
     */
    citation_index?: number;
  }
}

export interface ResearchListResponse {
  /**
   * Research job identifier.
   */
  id: string;

  /**
   * ISO 8601 timestamp when the job was created.
   */
  created_at: string;

  /**
   * Original query.
   */
  query: string;

  /**
   * Ranked retrieval results and citations.
   */
  results: Array<ResearchListResponse.Result>;

  /**
   * Current status of the research job.
   */
  status: 'queued' | 'searching' | 'summarizing' | 'analyzing' | 'completed' | 'failed' | 'researching';

  /**
   * Final content/synthesis (null until available).
   */
  content?: string | null;

  /**
   * Post-processed content (e.g., formatted/converted).
   */
  transformed_content?: string | null;
}

export namespace ResearchListResponse {
  export interface Result {
    /**
     * Result object identifier.
     */
    id: string;

    /**
     * Relevance score (0–1).
     */
    score: number;

    /**
     * Result title.
     */
    title: string;

    /**
     * Canonical URL of the result.
     */
    url: string;

    /**
     * Index used for inline citations (if present).
     */
    citation_index?: number;
  }
}

export interface ResearchCreateParams {
  /**
   * Primary research question or instruction.
   */
  query: string;

  /**
   * Optional compute budget for the job. Defaults to 1.
   */
  compute_units?: number;

  /**
   * IDs of previously uploaded files to include.
   */
  files?: Array<string>;

  /**
   * Optional system prompt to steer the assistant.
   */
  system_prompt?: string;
}

export interface ResearchListParams extends PaginationParams {}

Research.Files = Files;
Research.Results = Results;

export declare namespace Research {
  export {
    type ResearchCreateResponse as ResearchCreateResponse,
    type ResearchRetrieveResponse as ResearchRetrieveResponse,
    type ResearchListResponse as ResearchListResponse,
    type ResearchListResponsesPagination as ResearchListResponsesPagination,
    type ResearchCreateParams as ResearchCreateParams,
    type ResearchListParams as ResearchListParams,
  };

  export {
    Files as Files,
    type FileCreateResponse as FileCreateResponse,
    type FileListResponse as FileListResponse,
    type FileListResponsesPagination as FileListResponsesPagination,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };

  export {
    Results as Results,
    type ResultRetrieveContentResponse as ResultRetrieveContentResponse,
    type ResultRetrieveContentParams as ResultRetrieveContentParams,
  };
}
