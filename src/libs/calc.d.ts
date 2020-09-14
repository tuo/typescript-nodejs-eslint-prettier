export function getArrayLength(arr: any[]): number;
export const maxInterval: number;

export type ArrayMetadata = {
  length: number;
  firstObject: any | undefined;
};
export function getArrayMetadata(arr: any[]): ArrayMetadata;

//This example is a good case for using generics to provide richer type information:
