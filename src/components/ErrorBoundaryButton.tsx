import { type FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const ErrorBoundaryButton = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error in ErrorBoundaryButton');
        }}
      >
        Throw error
      </button>
    </ErrorBoundary>
  );
};

const ErrorFallback: FC = () => {
  return <div role="alert">Error</div>;
};
