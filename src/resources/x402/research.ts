// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Research extends APIResource {
  /**
   * Start a new research job using x402 payment. This endpoint mints a temporary API
   * key that is returned in the response and is billed via the x402 settlement flow
   * instead of your Caesar API credits.
   *
   * @example
   * ```ts
   * const research = await client.x402.research.create({
   *   query: 'query',
   *   'X-PAYMENT': 'X-PAYMENT',
   * });
   * ```
   */
  create(params: ResearchCreateParams, options?: RequestOptions): APIPromise<ResearchCreateResponse> {
    const { 'X-PAYMENT': xPayment, ...body } = params;
    return this._client.post('/x402/research', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-PAYMENT': xPayment }, options?.headers]),
    });
  }
}

export interface ResearchCreateResponse {
  /**
   * Research job identifier.
   */
  id: string;

  /**
   * Current status of the research job.
   */
  status: 'queued' | 'searching' | 'summarizing' | 'analyzing' | 'completed' | 'failed' | 'researching';

  /**
   * Temporary API key secret created for this x402 request.
   */
  api_key_secret?: string;
}

export interface ResearchCreateParams {
  /**
   * Body param: Primary research question or instruction.
   */
  query: string;

  /**
   * Header param: Base64-encoded x402 payment payload.
   */
  'X-PAYMENT': string;

  /**
   * Body param: Optional compute budget for the job. Defaults to 1.
   */
  compute_units?: number;

  /**
   * Body param: Optional system prompt to steer the assistant.
   */
  system_prompt?: string;
}

export declare namespace Research {
  export {
    type ResearchCreateResponse as ResearchCreateResponse,
    type ResearchCreateParams as ResearchCreateParams,
  };
}
