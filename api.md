# Research

Types:

- <code><a href="./src/resources/research/research.ts">ResearchCreateResponse</a></code>
- <code><a href="./src/resources/research/research.ts">ResearchRetrieveResponse</a></code>
- <code><a href="./src/resources/research/research.ts">ResearchListResponse</a></code>

Methods:

- <code title="post /research">client.research.<a href="./src/resources/research/research.ts">create</a>({ ...params }) -> ResearchCreateResponse</code>
- <code title="get /research/{id}">client.research.<a href="./src/resources/research/research.ts">retrieve</a>(id) -> ResearchRetrieveResponse</code>
- <code title="get /research">client.research.<a href="./src/resources/research/research.ts">list</a>({ ...params }) -> ResearchListResponse</code>

## Files

Types:

- <code><a href="./src/resources/research/files.ts">FileCreateResponse</a></code>
- <code><a href="./src/resources/research/files.ts">FileListResponse</a></code>

Methods:

- <code title="post /research/files">client.research.files.<a href="./src/resources/research/files.ts">create</a>({ ...params }) -> FileCreateResponse</code>
- <code title="get /research/files">client.research.files.<a href="./src/resources/research/files.ts">list</a>({ ...params }) -> FileListResponse</code>

## Results

Types:

- <code><a href="./src/resources/research/results.ts">ResultRetrieveContentResponse</a></code>

Methods:

- <code title="get /research/{id}/results/{resultId}/content">client.research.results.<a href="./src/resources/research/results.ts">retrieveContent</a>(resultID, { ...params }) -> ResultRetrieveContentResponse</code>
