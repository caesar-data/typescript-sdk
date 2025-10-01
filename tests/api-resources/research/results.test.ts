// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Caesar from 'caesar-data';

const client = new Caesar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource results', () => {
  // Prism tests are disabled
  test.skip('retrieveContent: only required params', async () => {
    const responsePromise = client.research.results.retrieveContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieveContent: required and optional params', async () => {
    const response = await client.research.results.retrieveContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
