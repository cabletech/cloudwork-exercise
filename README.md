# Cable CloudWork Exercise

## The goals of this exercise

The goal of this exercise is to establish the ability to understand a brief and demonstrate general web development skills. We would like participants to respond to this brief by writing us a sample of code. You are not expected to complete all aspects of the brief.

This exercise will also provide content for the subsequent technical interview.

We ask that you give this exercise an amount of time that makes sense for your schedule. Ideally this would be a couple of hours with a goal of solving 3-4 of the problems described below.

The code patterns and frameworks used in this repo offer a good representation of our existing codebase and the problems we most want help solving. However, please feel free to change anything about the existing code - this exercise should not be a test on a library you have no experience with.

## Setting the scene

CloudWork is a fictitious web app that allows user to manage _workloads_. Workloads are jobs which run in the cloud. They are created with a complexity number which increases the amount of time the workload takes to complete. A workload will complete with a success or failure status.

![Wireframe of the app](./wireframe.png)

The app should allow users to:

- View their workloads
- Create new workloads
- View a workload’s up-to-date status
- Cancel workloads that are incomplete

## The code we have provided

This repo contains some code. Please feel free to change anything you like about the code already written.

What’s included:

- A bare bones Next.js app
- A mock `CloudWorkService` class which behaves like a CloudWork backend service - if it existed. It offers Typescript interfaces of the data the service returns.
- Some functional but unstyled UI components.
- A functional `WorkloadForm` component written with [Mobx](https://mobx.js.org).

## Problems to solve

We would like for you to demonstrate a range of web development skills by solving a few different problems.

Don't feel like you must solve all of these problems but please complete at least one from each of the sections.

For styling/UI components we use [Chakra UI](https://chakra-ui.com/). Consider using this framework otherwise feel free to use any approach to styling that you‘re comfortable with.

For data fetching we use [`react-query`](https://tanstack.com/query) so consider using that.

- State management
  - Wire-up the `WorkloadForm` component so that users can create workloads
  - Give users feedback if there was an error when creating a workload
  - Fetch the workloads from the cloud and display the the user.
- Styling
  - Add responsive layout to lay the app out like the wire-frame but able fit on any size screen
  - Give the `WorkloadItem` and `WorkloadList` components some basic styling to make it more pleasant on the eyes
- Interaction
  - Display an updating count-down of the time remaining until a workload completes
  - Give users the ability to cancel a workload only before it is complete

## Getting started with the code

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
