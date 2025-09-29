// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar';

export const metadata: Metadata = {
  resource: 'research',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/research',
  operationId: 'createResearchObject',
};

export const tool: Tool = {
  name: 'create_research',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart a new research job using a query and optional file IDs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Research job identifier.'\n    },\n    status: {\n      type: 'string',\n      description: 'Current status of the research job.',\n      enum: [        'queued',\n        'searching',\n        'summarizing',\n        'analyzing',\n        'completed',\n        'failed',\n        'researching'\n      ]\n    }\n  },\n  required: [    'id',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Primary research question or instruction.',
      },
      compute_units: {
        type: 'integer',
        description: 'Optional compute budget for the job. Defaults to 1.',
      },
      files: {
        type: 'array',
        description: 'IDs of previously uploaded files to include.',
        items: {
          type: 'string',
        },
      },
      system_prompt: {
        type: 'string',
        description: 'Optional system prompt to steer the assistant.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
  annotations: {},
};

export const handler = async (client: Caesar, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.research.create(body)));
};

export default { metadata, tool, handler };
