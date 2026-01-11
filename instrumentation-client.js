// instrumentation-client.js
import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  person_profiles: 'always', // or 'identified_only'
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') posthog.debug()
  }
});
