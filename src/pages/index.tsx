import { type NextPage } from 'next';
import { ErrorButton } from '../components/ErrorButton';
import { ErrorBoundaryButton } from '../components/ErrorBoundaryButton';

const HomePage: NextPage = () => {
  return (
    <>
      <h2>Home</h2>
      <ErrorButton />
      <ErrorBoundaryButton />
    </>
  );
};

export default HomePage;
