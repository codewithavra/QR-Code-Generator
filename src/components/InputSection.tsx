/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
*/
import { type Dispatch, type SetStateAction } from "react";

/**
 * icons
 */
import { BiPencil, BiQr } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

/**
 * types
 */
import type { Options } from "../types";

/**
 * constants
 */
import { ecl, presets, sizeOfQr } from "../constants";

/**utilities */
import { updateOption } from "../utilities/updateOption";
import { HiTemplate } from "react-icons/hi";

type prop = {
  option: Options;
  setOption: Dispatch<SetStateAction<Options>>;
  onGenerate: () => void;
};

const InputSection = ({ option, setOption, onGenerate }: prop) => {
  return (
    <form className="flex size-full flex-col items-center justify-start gap-4">
      <div className="flex h-fit w-full flex-col items-center justify-between rounded-md border border-neutral-700/40 bg-neutral-50 p-2">
        <div className="flex h-fit w-full items-center justify-start gap-2 text-lg font-bold text-neutral-700 pb-2">
          <BiPencil />
          <p>Content</p>
        </div>
        <textarea
          value={option.data}
          onChange={(e) => updateOption(setOption, "data", e.target.value)}
          className="min-h-30 w-full resize-none rounded-md border border-neutral-700/40 bg-neutral-400/40 p-4"
        />
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex h-fit w-full items-center justify-start gap-2 pb-2 text-lg font-bold text-neutral-700">
          <HiTemplate />
          <p>Templates</p>
        </div>

        <div className="grid h-fit w-full grid-cols-2 grid-rows-3 gap-2">
          {presets.map((item, index) => {
            return (
              <button
                type="button"
                className={`col-span-1 row-span-1 w-full rounded-md p-2 transition-transform duration-200 ease-in-out border border-neutral-700/40 active:scale-95 ${option.data === item.placeholder ? "bg-neutral-600/40" : "bg-neutral-400/40"}`}
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
      <div className="flex h-fit w-full items-center justify-between rounded-md border border-neutral-700/40 bg-neutral-50 p-2 flex-col">
        <div className="flex h-fit w-full items-center justify-start gap-2 pb-2 text-lg font-bold text-neutral-700">
          <LuSettings />
          <p>Setting</p>
        </div>
        <div className="flex h-fit w-full items-center justify-baseline gap-2">
        <div className="flex h-fit w-1/2 flex-col items-center justify-between">
          <label htmlFor="selectSize" className="w-full pb-2">Size</label>
          <select id="selectSize" className="bg-neutral-400/40 p-2 w-full h-fit rounded-md border border-neutral-700/40 focus:outline-none" value={option.width} onChange={(e)=>updateOption(setOption,"width", Number(e.target.value) as Options["width"])}>
            {sizeOfQr.map((item) => {
              return (
                <option value={item.width} key={item.size} className="bg-neutral-400/40">
                  {item.size}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex h-fit w-1/2 flex-col items-center justify-between">
          <label htmlFor="selectEcl" className="w-full pb-2">Error Correction</label>
          <select id="selectEcl" className="bg-neutral-400/40 p-2 w-full h-fit rounded-md border border-neutral-700/40 focus:outline-none" value={option.ecl} onChange={(e)=>updateOption(setOption,"ecl",e.target.value as Options["ecl"])}>
            {ecl.map((item) => {
              return (
                <option value={item.errorCorrectionLevel} key={item.label} className="bg-neutral-400/40">
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        </div>
        
      </div>
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
