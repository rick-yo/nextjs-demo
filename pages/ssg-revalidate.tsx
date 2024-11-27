import { GetStaticProps } from 'next';

type Props = {
  message: string;
};

const SSGPage = ({ message }: Props) => {
  return (
    <div>
      <h1>Static Site Generation (SSG) Page</h1>
      <p>{message}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      message: 'SSG revalidate page: 1 hour revalidation.',
    },
    revalidate: 60 * 60,
  };
};

export default SSGPage;
