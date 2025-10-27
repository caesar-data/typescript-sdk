// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResearchAPI from './research';
import { Research, ResearchCreateParams, ResearchCreateResponse } from './research';

export class X402 extends APIResource {
  research: ResearchAPI.Research = new ResearchAPI.Research(this._client);
}

X402.Research = Research;

export declare namespace X402 {
  export {
    Research as Research,
    type ResearchCreateResponse as ResearchCreateResponse,
    type ResearchCreateParams as ResearchCreateParams,
  };
}
