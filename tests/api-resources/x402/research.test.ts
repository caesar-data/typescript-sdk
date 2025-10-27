// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Caesar from 'caesar-data';

const client = new Caesar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource research', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.x402.research.create({ query: 'query', 'X-PAYMENT': 'X-PAYMENT' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.x402.research.create({
      query: 'query',
      'X-PAYMENT': 'X-PAYMENT',
      compute_units: 1,
      system_prompt: 'system_prompt',
    });
  });
});
