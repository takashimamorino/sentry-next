import { type NextPage } from 'next';
import { ErrorButton } from '../components/ErrorButton';
import { ErrorBoundaryButton } from '../components/ErrorBoundaryButton';
import { captureMessage } from '@sentry/nextjs';

const HomePage: NextPage = () => {
  return (
    <>
      <h2>Home</h2>
      <ErrorButton />
      <ErrorBoundaryButton />
      <Fatal />
      <Error />
      <Warning />
      <Info />
      <Log />
      <Debug />
    </>
  );
};

export default HomePage;


const Fatal = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Fatal", "fatal")
      }}
    >
      fatal
    </button>
  )
}

const Error = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Error", "error")
      }}
    >
      error
    </button>
  )
}

const Warning = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Warning", "warning")
      }}
    >
      warning
    </button>
  )
}

const Log = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Log", "log")
      }}
    >
      log
    </button>
  )
}

const Info = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Info", "info")
      }}
    >
      info
    </button>
  )
}

const Debug = () => {
  return (
    <button
      type="button"
      onClick={() => {
        captureMessage("Debug", "debug")
      }}
    >
      debug
    </button>
  )
}
