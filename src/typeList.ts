/* eslint-disable @typescript-eslint/no-unused-vars */

/** Typescriptの基本の型 */

// boolean 真偽値
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "ABC";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 複数の値を保持
let tuple: [number, string] = [0, "ABC"];

// any 型指定無し
let any1: any = false;

// void 値を返さないメソッドの戻り値の型
const funcA = (): void => {
  const test = "test";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "ABC" };
