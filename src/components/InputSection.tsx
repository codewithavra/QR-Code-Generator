/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */

/**
 * icons
 */
import { BiPencil, BiQr } from "react-icons/bi";

/**
 * types
 */
import type { Options } from "../types";
import { presets } from "../constants";
import { type Dispatch, type SetStateAction } from "react";
import { updateOption } from "../utilities/updateOption";

type prop = {
  option: Options;
  setOption: Dispatch<SetStateAction<Options>>;
  onGenerate: () => void;
};

const InputSection = ({ option, setOption, onGenerate }: prop) => {
  return (
    <form className="flex size-full flex-col items-center justify-start gap-4">
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-50 p-2 flex flex-col justify-between items-center">
        <div className="flex h-fit w-full items-center justify-start gap-2">
          <BiPencil />
          <p>Content</p>
        </div>
        <textarea
          value={option.data}
          onChange={(e) => updateOption(setOption, "data", e.target.value)}
          className="resize-none rounded-md border border-neutral-700/40 min-h-30 bg-neutral-400/40 w-full p-4"
        />
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex h-fit w-full items-center justify-start gap-2 pb-2">
          <BiPencil />
          <p>Templates</p>
        </div>

        <div className="grid h-fit w-full grid-cols-2 grid-rows-3 gap-2">
          {presets.map((item, index) => {
            return (
              <button
                type="button"
                className={`col-span-1 row-span-1 w-full rounded-md p-2 transition-transform duration-200 ease-in-out active:scale-95 ${option.data === item.placeholder ? "bg-neutral-600/40" : "bg-neutral-400/40"}`}
                key={index}
                onClick={() =>
                  updateOption(setOption, "data", item.placeholder)
                }
              >
                {item.template}
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-50 p-2"></div>
      <div className="h-fit w-full">
        <button
          type="button"
          className="flex h-fit w-full items-center justify-center gap-2 rounded-md bg-neutral-800 p-2 text-neutral-50 transition-transform duration-200 ease-in-out active:scale-95"
          onClick={onGenerate}
        >
          <BiQr />
          <p>Generate QR code</p>
        </button>
      </div>
    </form>
  );
};

export default InputSection;
