import { type NextPage } from 'next';
import { ErrorButton } from '../components/ErrorButton';

const HomePage: NextPage = () => {
  return (
    <>
      <h2>Home</h2>
      <ErrorButton />
    </>
  );
};

export default HomePage;
