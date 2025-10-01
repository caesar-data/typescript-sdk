// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Caesar from 'caesar-data';

const client = new Caesar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource research', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.research.create({
      query: 'Is lithium supply a bottleneck for EV adoption?',
    });
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
    const response = await client.research.create({
      query: 'Is lithium supply a bottleneck for EV adoption?',
      compute_units: 1,
      files: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      system_prompt: 'system_prompt',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.research.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.research.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.research.list({ limit: 1, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Caesar.NotFoundError);
  });
});
