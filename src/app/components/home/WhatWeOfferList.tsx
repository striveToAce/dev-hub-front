import { WhatWeOfferCard } from "./HomeContents";
import { offerings } from "@/utils/constants";


const WhatWeOfferSection = () => {
  return (
    <div className="m-4 mt-16">
      <div className="text-3xl font-semibold mb-2">What we offer</div>
      <div className="flex gap-4 flex-wrap">
        {offerings.map((_, idx) => (
          <WhatWeOfferCard key={idx} content={_} />
        ))}
      </div>
    </div>
  );
};
export default WhatWeOfferSection;
