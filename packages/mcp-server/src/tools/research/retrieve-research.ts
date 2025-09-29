// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar';

export const metadata: Metadata = {
  resource: 'research',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/research/{id}',
  operationId: 'getResearchObject',
};

export const tool: Tool = {
  name: 'retrieve_research',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single research object by ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Research job identifier.'\n    },\n    created_at: {\n      type: 'string',\n      description: 'ISO 8601 timestamp when the job was created.',\n      format: 'date-time'\n    },\n    query: {\n      type: 'string',\n      description: 'Original query.'\n    },\n    results: {\n      type: 'array',\n      description: 'Ranked retrieval results and citations.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Result object identifier.'\n          },\n          score: {\n            type: 'number',\n            description: 'Relevance score (0–1).'\n          },\n          title: {\n            type: 'string',\n            description: 'Result title.'\n          },\n          url: {\n            type: 'string',\n            description: 'Canonical URL of the result.'\n          },\n          citation_index: {\n            type: 'integer',\n            description: 'Index used for inline citations (if present).'\n          }\n        },\n        required: [          'id',\n          'score',\n          'title',\n          'url'\n        ]\n      }\n    },\n    status: {\n      type: 'string',\n      description: 'Current status of the research job.',\n      enum: [        'queued',\n        'searching',\n        'summarizing',\n        'analyzing',\n        'completed',\n        'failed',\n        'researching'\n      ]\n    },\n    content: {\n      type: 'string',\n      description: 'Final content/synthesis (null until available).'\n    },\n    transformed_content: {\n      type: 'string',\n      description: 'Post-processed content (e.g., formatted/converted).'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'query',\n    'results',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Caesar, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.research.retrieve(id)));
};

export default { metadata, tool, handler };
