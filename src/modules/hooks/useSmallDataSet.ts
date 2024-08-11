import { useState } from "react";

const useSmallDataSet = () =>
  useState<Array<number>>([9, 8, 3, 5, 2, 1, 4, 10, 7, 6]);

export default useSmallDataSet;
