/**
 * @license Apache-2.0
 * @copyright codewithavra
 */
import { BsQrCode } from "react-icons/bs";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import { useState } from "react";

const App = () => {
  const[preview, setPreview] = useState<boolean>(false);
  return (
    <div
  className="min-h-dvh w-full bg-neutral-200"
  style={{ fontFamily: '"Inter-", sans-serif' }}
>
  {/* heading */}
  <div className="w-full lg:w-[90%] lg:max-w-5xl mx-auto h-fit px-4 pt-4">
    <div className="flex gap-2 items-center text-3xl font-bold">
      <BsQrCode />
      <p>QR Code Generator</p>
    </div>
    <p className="text-sm text-neutral-500">Create custom QR codes for text, urls, upi ids, wifi network and more with advanced customization features</p>
  </div>

  {/* main section */}
  <div className="w-full lg:w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row lg:h-full gap-4 p-4">
    
    {/* Input section */}
    <section className="w-full lg:w-1/2 lg:overflow-y-auto min-h-64 lg:min-h-0">
      {/* content */}
      <InputSection preview={preview} setPreview={setPreview}/>
    </section>

    {/* Output section */}
    <section className="w-full lg:w-1/2 lg:overflow-y-auto  min-h-64 lg:min-h-0">
      {/* content */}
      <OutputSection preview={preview} />
    </section>

  </div>
</div>
  );
};

export default App;
