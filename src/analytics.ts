import posthog from 'posthog-js';

const apiKey = process.env.REACT_APP_POSTHOG_KEY;

if (apiKey) {
  posthog.init(apiKey, {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: false,
    respect_dnt: true,
  });
}

export { posthog };