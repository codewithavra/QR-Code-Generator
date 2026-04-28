/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */

import { useEffect, useRef, useState } from "react";
import type { Options } from "./types";

/**
 * Components
 */
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import { qrcodeGenerator } from "./utilities/qrcodeGenerator";

const App = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [option, setOption] = useState<Options>({
    width: 200,
    background: "#ffffff",
    foreground: "#000000",
    data: "https://example.com",
    ecl: "M",
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleGenerate = async () => {
    if (!canvasRef.current || !option.data) {
      setPreview(false);
      return;
    }
    await qrcodeGenerator(option, canvasRef.current);
    setPreview(true);
  };
  const [heading, setHeading] = useState<string>("Sample Heading");
  const [description, setDescription] = useState<string>(
    "This is a sample description"
  );

  useEffect(() => {
    if (!preview || !canvasRef.current || !option.data) return;
    void qrcodeGenerator(option, canvasRef.current);
  }, [option, preview]);

  return (
    <div
      className="min-h-dvh w-full bg-neutral-200"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      {/* heading */}
      <div className="mx-auto h-fit w-full px-4 pt-4 lg:w-[90%] lg:max-w-5xl">
        <div className="flex items-center gap-2 text-4xl font-bold">
        <img src="/qr-craft-logo.svg" width={36} height={36} alt="QR Craft" />
          <p>QR Craft</p>
        </div>
        <p className="text-sm text-neutral-500">
          Create custom QR codes for text, urls, upi ids, wifi network and more
          with advanced customization features
        </p>
      </div>

      {/* main section */}
      <div className="mx-auto flex w-full flex-col gap-4 p-4 lg:h-full lg:w-[90%] lg:max-w-5xl lg:flex-row">
        {/* Input section */}
        <section className="min-h-64 w-full lg:min-h-0 lg:w-1/2 lg:overflow-y-auto">
          {/* content */}
          <InputSection
            onGenerate={handleGenerate}
            option={option}
            setOption={setOption}
            heading={heading}
            setHeading={setHeading}
            description={description}
            setDescription={setDescription}
          />
        </section>

        {/* Output section */}
        <section className="min-h-64 w-full lg:min-h-0 lg:w-1/2 lg:overflow-y-auto">
          {/* content */}
          <OutputSection
            preview={preview}
            setOption={setOption}
            option={option}
            canvasRef={canvasRef}
            heading={heading}
            description={description}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
