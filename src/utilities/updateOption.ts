/**
 * @license Apache-2.0
 * @copyright codewithavra
 */


/**
 * Node modules
*/
import type { Dispatch, SetStateAction } from "react";

export const updateOption = <T, K extends keyof T>(
  setter: Dispatch<SetStateAction<T>>,
  key: K,
  value: T[K]
) => {
  setter((prev) => ({ ...prev, [key]: value }));
};
