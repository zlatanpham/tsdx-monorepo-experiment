import * as React from 'react';
import { Input } from '@sajari-dev/react-components';
import { useQuery } from '@sajari-dev/react-hooks';

const InputComposition = () => {
  const { query, setQuery } = useQuery();

  return (
    <>
      <Input value={query} onChange={setQuery} /> <br />
      Value: {query}
    </>
  );
};

export default InputComposition;
