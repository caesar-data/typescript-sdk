// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar-data';

export const metadata: Metadata = {
  resource: 'research.results',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/research/{id}/results/{resultId}/content',
  operationId: 'getResearchResultContent',
};

export const tool: Tool = {
  name: 'retrieve_content_research_results',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the raw content for a specific result within a research object.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/result_retrieve_content_response',\n  $defs: {\n    result_retrieve_content_response: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'string',\n          description: 'Raw extracted content for this result (may include HTML, markdown, or plain text).'\n        }\n      },\n      required: [        'content'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      resultId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'resultId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Caesar, args: Record<string, unknown> | undefined) => {
  const { resultId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.research.results.retrieveContent(resultId, body)),
  );
};

export default { metadata, tool, handler };
