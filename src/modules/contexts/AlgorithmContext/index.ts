import { createContext, Dispatch, SetStateAction } from "react";

type ContextProps = {
  algorithmName?: string;
  setAlgorithmName?: Dispatch<SetStateAction<string>>;
};

const AlgorithmContext = createContext<ContextProps>({});

export default AlgorithmContext;
