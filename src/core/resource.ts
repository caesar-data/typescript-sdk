// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Caesar } from '../client';

export abstract class APIResource {
  protected _client: Caesar;

  constructor(client: Caesar) {
    this._client = client;
  }
}
