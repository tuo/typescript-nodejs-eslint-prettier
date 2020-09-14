export function getArrayLength(arr: any[]): number;
export const maxInterval: number;

export type ArrayMetadata<ArrType> = {
  length: number;
  firstObject: ArrType | undefined;
};
export function getArrayMetadata<ArrType>(arr: ArrType[]): ArrayMetadata<ArrType>;

//This example is a good case for using generics to provide richer type information:
