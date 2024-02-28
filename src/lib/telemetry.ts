import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

export function sdk() {
	const sdk = new HoneycombWebSDK({
		apiKey: 'YOUR_KEY_HERE',
		serviceName: 'my-svelte-app',
		instrumentations: [getWebAutoInstrumentations()] // add auto-instrumentation
	});
	sdk.start();
}
