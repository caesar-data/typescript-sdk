// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar-data';

export const metadata: Metadata = {
  resource: 'research',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/research',
  operationId: 'getResearchObjects',
};

export const tool: Tool = {
  name: 'list_research',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a paginated list of research objects.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'List of research objects.',\n      items: {\n        $ref: '#/$defs/research_list_response'\n      }\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean',\n          description: 'Whether another page is available.'\n        },\n        limit: {\n          type: 'integer',\n          description: 'Page size (items per page).'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number (1-based).'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total number of items (may be omitted).'\n        }\n      },\n      required: [        'has_next',\n        'limit',\n        'page'\n      ]\n    }\n  },\n  required: [    'data',\n    'pagination'\n  ],\n  $defs: {\n    research_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Research job identifier.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the job was created.',\n          format: 'date-time'\n        },\n        query: {\n          type: 'string',\n          description: 'Original query.'\n        },\n        results: {\n          type: 'array',\n          description: 'Ranked retrieval results and citations.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Result object identifier.'\n              },\n              score: {\n                type: 'number',\n                description: 'Relevance score (0–1).'\n              },\n              title: {\n                type: 'string',\n                description: 'Result title.'\n              },\n              url: {\n                type: 'string',\n                description: 'Canonical URL of the result.'\n              },\n              citation_index: {\n                type: 'integer',\n                description: 'Index used for inline citations (if present).'\n              }\n            },\n            required: [              'id',\n              'score',\n              'title',\n              'url'\n            ]\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the research job.',\n          enum: [            'queued',\n            'searching',\n            'summarizing',\n            'analyzing',\n            'completed',\n            'failed',\n            'researching'\n          ]\n        },\n        content: {\n          type: 'string',\n          description: 'Final content/synthesis (null until available).'\n        },\n        transformed_content: {\n          type: 'string',\n          description: 'Post-processed content (e.g., formatted/converted).'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'query',\n        'results',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Page size (items per page).',
      },
      page: {
        type: 'integer',
        description: '1-based page index.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Caesar, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.research.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
