import { useState } from 'react';

const useToggleState = (init: boolean) => {
  const [state, setState] = useState<boolean>(init);

  const toggleState = () => {
    setState((stateChange) => !stateChange);
  };

  return [state, toggleState] as const;
};

export default useToggleState;
