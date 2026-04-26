/**
 * @license Apache-2.0
 * @copyright codewithavra
 */
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

const App = () => {
  return (
    <div
  className="min-h-dvh w-full bg-neutral-200"
  style={{ fontFamily: '"Poppins", sans-serif' }}
>
  <div className="w-full lg:w-[90%] lg:max-w-7xl mx-auto flex flex-col lg:flex-row lg:h-dvh gap-4 p-4">
    
    {/* Input section */}
    <section className="w-full lg:w-1/2 lg:overflow-y-auto rounded-xl bg-mist-700 min-h-64 lg:min-h-0">
      {/* content */}
      <InputSection />
    </section>

    {/* Output section */}
    <section className="w-full lg:w-1/2 lg:overflow-y-auto rounded-xl bg-mist-700 min-h-64 lg:min-h-0">
      {/* content */}
      <OutputSection />
    </section>

  </div>
</div>
  );
};

export default App;
