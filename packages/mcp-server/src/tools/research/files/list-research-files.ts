// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar';

export const metadata: Metadata = {
  resource: 'research.files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/research/files',
  operationId: 'getResearchFiles',
};

export const tool: Tool = {
  name: 'list_research_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a paginated list of Research File objects.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'List of file objects.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the file.'\n          },\n          content_type: {\n            type: 'string',\n            description: 'MIME type of the file as detected/stored.'\n          },\n          file_name: {\n            type: 'string',\n            description: 'Original uploaded filename.'\n          }\n        },\n        required: [          'id',\n          'content_type',\n          'file_name'\n        ]\n      }\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean',\n          description: 'Whether another page is available.'\n        },\n        limit: {\n          type: 'integer',\n          description: 'Page size (items per page).'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number (1-based).'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total number of items (may be omitted).'\n        }\n      },\n      required: [        'has_next',\n        'limit',\n        'page'\n      ]\n    }\n  },\n  required: [    'data',\n    'pagination'\n  ]\n}\n```",
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
  const response = await client.research.files.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
