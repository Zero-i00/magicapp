import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export interface IDataLoader extends Omit<UseQueryHookResult<any>, 'data'> {}
