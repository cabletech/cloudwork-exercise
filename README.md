# Cable CloudWork Exercise

## The goals of this exercise

Demonstrate skill in writing clientside state management code and provide a topic of converation during the interview proccess.

The code patterns and frameworks used in this repo offer a good representation of our existing codebase and the problems we most want

## The Exercise

### Problem

The CloudWork app is a management panel that allows users to manage _workloads_. Workloads are jobs which run in the cloud. They are created with a complexity which increases the amount of time the workload takes to complete. A workload will complete with a success or failure status.

The app should allow users to:

- View their workloads
- Create new workloads
- See a workload’s up-to-date status
- Cancel workloads that have not complete

### Code provided

This is a bare-bones app with some code to get you started. Please feel free to change anything you like about the code already written.

The frameworks included are:

- [Mobx](https://mobx.js.org) and [mobx-react-lite](https://mobx.js.org/react-integration.html)
- [Next.js](https://nextjs.org)

Key files:

- `components/App` - The main `App` component and `AppController` state controller. Probably a good starting point.
- `lib/MockCloudworkService.ts` - A fake network service which should be used develop against.

### Getting started with the code

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
