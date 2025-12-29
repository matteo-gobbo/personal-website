---
title: "MSW: The Best Way to Mock Your APIs"
description: "Learn how to use Mock Service Worker (MSW) to mock REST and GraphQL APIs, improve frontend development workflows, and work without a ready backend."
author: "Matteo Gobbo"
tags: ["msw", "mock-service-worker", "api-mocking", "graphql", "typescript", "developer-experience"]
language: "en"
publishedAt: 2025-12-28
editedAt: 2025-12-28
---

# MSW: The Best Way to Mock Your APIs

Recently at work, I needed to start working on a new feature while the backend was not ready yet. I think this is a common, or the usual, situation in which tons of developers experience every day. 
One way I've found quite effective is to work with the backend hand-by-hand and try to define at least an API contract.
Once you have it, you can start building something.

## What's MSW?
MSW can make this process of mocking the API way smoother. It lets you fake an API in a very simple way, and you don't have to replace your api client or hack around with your network layer.
MSW stands for Mock Service Worker, and as the name suggests, it relies on the same technology behind offline apps and caching strategies, for example.
If the request matches one of your mock handlers, in my case, a GraphQL query, MSW returns the mocked response you define, but if it doesn't match, it lets the request continue to the real API.

## MSW in action
As I mentioned before, I needed to integrate MSW into a Vue project, and it was really straightforward.
Let's see it in code.
``` typescript
const backend = graphql.link('http://localhost:5000/graphql') // 1
export const worker = setupWorker(...handlers) // 2
export const startWorker = async () => // 3
  await worker.start({
    onUnhandledRequest: 'warn',
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
  })
```
1. Pass the URL of your backend, from which you make GraphQL calls.
2. Set up the worker passing to it the handlers, and we will see in a moment what they are.
3. Export the method to start in practice the worker, and here we can see the onUnhandledRequest option to set the strategy the work should take for requests not caught by the worker, and the serviceWorker.url to specify where the app can find the service worker JavaScript file.

``` typescript
export const handlers = [
  backend.query('GetTasks', () => {
    return HttpResponse.json<{ data: { tasks: Task[] } }>({
      data: {
        tasks: [
          { id: '1', name: 'First task', status: 'TODO' },
          { id: '2', name: 'Second task', status: 'IN_PROGRESS' },
        ],
      },
    })
  }),
  backend.mutation('CreateTask', ({ variables }) => {
    return HttpResponse.json<{ data: { createTask: Task } }>({
      data: {
        createTask: {
          id: Math.round(Math.random()).toString(),
          name: variables.name,
          status: 'TODO',
          description: variables.description,
        },
      },
    })
  }),
]
```
Handlers are where all the magic happens and where you will effectively write your mocks.
In this example, GetTasks and CreateTasks are the names given to the corresponding query and mutation.

## Final Thoughts
Even in the simplicity of this example, it's clear how easy it is to set up and make MSW work within your codebase, and if you want to simulate more complex behavior, such as filtering and pagination, all these scenarios are covered too. 

MSW is a great tool whenever:
<ul>
<li>The backend or other services you depend on are not ready yet</li>
<li>You want to have a predictable API behaviour</li>
<li>You need a realistic mock that can be used for development and testing</li>
</ul>
