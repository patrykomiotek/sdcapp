import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.scss'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://90a84ccddb2f4d16b3a1e38a9a4fe573@o325249.ingest.sentry.io/4504690416156672",
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
