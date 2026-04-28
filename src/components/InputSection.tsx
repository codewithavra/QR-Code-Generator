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
import { BiQr } from "react-icons/bi";
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
  heading: string;
  description: string;
  setHeading: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
};

const InputSection = ({
  option,
  setOption,
  onGenerate,
  heading,
  description,
  setDescription,
  setHeading,
}: prop) => {
  return (
    <form className="flex size-full flex-col items-center justify-start gap-4">
      <div className="flex h-fit w-full flex-col items-center justify-between gap-2 rounded-md border border-neutral-700/40 bg-neutral-50 p-2">
        {/* Heading */}
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm">
          <p className="w-full px-1 text-lg font-bold text-neutral-700">
            Heading
          </p>
          <textarea
            className="h-fit w-full resize-none rounded-md border border-neutral-700/40 bg-neutral-400/40 p-2 focus:outline-none"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm">
            <p className="w-full px-1 text-lg font-bold text-neutral-700">Content</p>
          <textarea
            value={option.data}
            onChange={(e) => updateOption(setOption, "data", e.target.value)}
            className="min-h-30 w-full resize-none rounded-md border border-neutral-700/40 bg-neutral-400/40 p-4 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm">
            <p className="w-full px-1 text-lg font-bold text-neutral-700">Description</p>
          <textarea
            className="min-h-15 w-full resize-none rounded-md border border-neutral-700/40 bg-neutral-400/40 p-4 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-100 p-2">
        <div className="flex h-fit w-full items-center justify-start gap-2 pb-2 text-lg font-bold text-neutral-700">
          <HiTemplate />
          <p>Templates</p>
        </div>

        <div className="grid h-fit w-full grid-cols-2 grid-rows-3 gap-2">
          {presets.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                key={index}
                className={`col-span-1 row-span-1 w-full rounded-md border border-neutral-700/40 p-2 transition-transform duration-200 ease-in-out active:scale-95 ${
                  option.data === item.placeholder
                    ? "bg-neutral-800 text-neutral-50"
                    : "bg-neutral-400/40 text-neutral-900"
                }`}
                onClick={() =>
                  updateOption(setOption, "data", item.placeholder)
                }
              >
                <div className="flex items-center gap-2 text-sm">
                  <Icon />
                  <span>{item.template}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-between rounded-md border border-neutral-700/40 bg-neutral-50 p-2">
        <div className="flex h-fit w-full items-center justify-start gap-2 pb-2 text-lg font-bold text-neutral-700">
          <LuSettings />
          <p>Setting</p>
        </div>
        <div className="flex h-fit w-full items-center justify-baseline gap-2">
          <div className="flex h-fit w-1/2 flex-col items-center justify-between">
            <label htmlFor="selectSize" className="w-full pb-2 pl-1 text-sm">
              Size
            </label>
            <select
              id="selectSize"
              className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-400/40 p-2 text-sm focus:outline-none"
              value={option.width}
              onChange={(e) =>
                updateOption(
                  setOption,
                  "width",
                  Number(e.target.value) as Options["width"]
                )
              }
            >
              {sizeOfQr.map((item) => {
                return (
                  <option
                    value={item.width}
                    key={item.size}
                    className="bg-neutral-400/40 text-sm"
                  >
                    {item.size}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex h-fit w-1/2 flex-col items-center justify-between">
            <label htmlFor="selectEcl" className="w-full pb-2 pl-1 text-sm">
              Error Correction
            </label>
            <select
              id="selectEcl"
              className="h-fit w-full rounded-md border border-neutral-700/40 bg-neutral-400/40 p-2 text-sm focus:outline-none"
              value={option.ecl}
              onChange={(e) =>
                updateOption(setOption, "ecl", e.target.value as Options["ecl"])
              }
            >
              {ecl.map((item) => {
                return (
                  <option
                    value={item.errorCorrectionLevel}
                    key={item.label}
                    className="bg-neutral-400/40 text-sm"
                  >
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
