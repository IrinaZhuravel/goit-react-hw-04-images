

import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
    <ThreeDots
      color="#3f51b5"
      height="40px"
      ariaLabel="infinity-spin-loading"
    />
  </LoaderWrapper>
  );
};
