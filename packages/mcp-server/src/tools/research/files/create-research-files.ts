// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'caesar-mcp/filtering';
import { Metadata, asTextContentResult } from 'caesar-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Caesar from 'caesar-data';

export const metadata: Metadata = {
  resource: 'research.files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/research/files',
  operationId: 'createResearchFile',
};

export const tool: Tool = {
  name: 'create_research_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a file via multipart form and create a Research File object.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file_create_response',\n  $defs: {\n    file_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the file.'\n        },\n        content_type: {\n          type: 'string',\n          description: 'MIME type of the file as detected/stored.'\n        },\n        file_name: {\n          type: 'string',\n          description: 'Original uploaded filename.'\n        }\n      },\n      required: [        'id',\n        'content_type',\n        'file_name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['file'],
  },
  annotations: {},
};

export const handler = async (client: Caesar, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.research.files.create(body)));
};

export default { metadata, tool, handler };
