# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Instrumenting for Honeycomb

### Install Packages

```sh
npm install --save \
@honeycombio/opentelemetry-web \
@opentelemetry/auto-instrumentations-web
```

### Get a Honeycomb API Key

[Get a Honeycomb API key](https://docs.honeycomb.io/quickstart/#create-a-honeycomb-account).

### Create Telemetry file

Add `telemetry.ts` with SDK setup, including your API Key, in the `src/lib` directory:

```ts
// telemetry.ts
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

export function sdk() {
  const sdk = new HoneycombWebSDK({
    apiKey: 'YOUR_KEY_HERE',
    serviceName: 'create-react-app',
    instrumentations: [getWebAutoInstrumentations()], // add auto-instrumentation
  });
  sdk.start();
};
```

### Initialize Tracing

Initialize tracing at the start of your application by updating `+page.svelte`:

```html
<script>
  import Counter from './Counter.svelte';
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcome_fallback from '$lib/images/svelte-welcome.png';
  import { onMount } from 'svelte';
  onMount(async () => {
    const {sdk} = await import('$lib/telemetry');
    sdk();
  })
</script>
```

### Run

Build and run your application, and then look for data in Honeycomb.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
