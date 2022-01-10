import React from 'react';
import Image01 from '../../../assets/images/simulation/bio/12/01/bio1.png';
import Image02 from '../../../assets/images/simulation/bio/12/01/bio2.png';
import Image03 from '../../../assets/images/simulation/bio/12/01/bio3.png';

const BioTheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> পরীক্ষণের নাম: </h2>
        <p> সালোকসংশ্লেষণ প্রক্রিয়ায় ক্লোরোফিল ও আলোর অপরিহার্যতার পরীক্ষণ। </p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold"> পরীক্ষণের উদ্দেশ্য: </h2>
        <p>
          আমাদের উদ্দেশ্য পরীক্ষামূলকভাবে দেখানো যে আলো সালোকসংশ্লেষণের জন্য
          প্রয়োজনীয়।
        </p>
      </div>
      {/* Content 2 */}
      <div className="mb-4">
        <div className="flex flex-wrap">
          <h2 className="font-semibold pr-4"> মূলতত্ত্ব: </h2>
          <img src={Image01} alt="simulation-theory" className="py-1 pb-4" />
        </div>
        <p>
          সালোকসংশ্লেষণ হল সেই প্রক্রিয়া যেখানে আলোক শক্তি রাসায়নিক শক্তিতে
          রূপান্তরিত হয়। আলোর শক্তি ব্যবহার করে, কার্বোহাইড্রেট যেমন শর্করা
          কার্বন ডাই অক্সাইড এবং জল থেকে সংশ্লেষিত হয়।
        </p>
        <p className="mt-2">
          সালোকসংশ্লেষণ নামটি গ্রীক শব্দ থেকে এসেছে, 'আলো'র জন্য ফটো এবং
          সংশ্লেষণের অর্থ 'একত্র করা'। বর্জ্য পণ্য হিসাবে অক্সিজেনও মুক্তি পায়।
          আলো হল সালোকসংশ্লেষণের প্রধান কারণ এবং এই পরীক্ষা করার মাধ্যমে আমাদের
          প্রমাণ করতে হবে যে আলো সালোকসংশ্লেষণের জন্য প্রয়োজনীয়।
        </p>
      </div>
      {/* Content 3 */}
      <div className="mt-3">
        <h2 className="font-semibold">সালোকসংশ্লেষণের প্রক্রিয়া: </h2>
        <p>
          সালোকসংশ্লেষণের প্রক্রিয়াটি ঘটে যখন সবুজ গাছপালা আলোর শক্তি ব্যবহার
          করে কার্বন ডাই অক্সাইড (CO2) এবং জল (H2O) কে কার্বোহাইড্রেটে রূপান্তর
          করে। আলোক শক্তি ক্লোরোফিল দ্বারা শোষিত হয়, উদ্ভিদের একটি
          সালোকসংশ্লেষক রঙ্গক, যখন কার্বন ডাই অক্সাইড এবং অক্সিজেনযুক্ত বায়ু
          পাতার স্টোমাটা দিয়ে উদ্ভিদে প্রবেশ করে। সালোকসংশ্লেষণের একটি অত্যন্ত
          গুরুত্বপূর্ণ উপজাত হল অক্সিজেন, যার উপর বেশিরভাগ জীব নির্ভর করে।
        </p>
        <p className="mt-2">
          গ্লুকোজ, সালোকসংশ্লেষণের সময় প্রক্রিয়াকৃত একটি কার্বোহাইড্রেট,
          বেশিরভাগ গাছপালা পাতা, ফুল, ফল এবং বীজ তৈরিতে শক্তির উত্স হিসাবে
          ব্যবহার করে। গ্লুকোজের অণুগুলি পরে একে অপরের সাথে একত্রিত হয়ে স্টার্চ
          এবং সেলুলোজের মতো আরও জটিল কার্বোহাইড্রেট তৈরি করে। সেলুলোজ হল
          কাঠামোগত উপাদান যা উদ্ভিদ কোষের দেয়ালে ব্যবহৃত হয়। সালোকসংশ্লেষণ
          কার্যত সমস্ত জীবের জন্য মৌলিক শক্তির উৎস প্রদান করে।
        </p>
        <p className="mt-2">
          আমরা সালোকসংশ্লেষণের সামগ্রিক প্রতিক্রিয়াকে এভাবে প্রকাশ করতে পারি:
        </p>
        <img src={Image02} alt="simulation-theory" className="py-2" />
        <img src={Image03} alt="simulation-theory" className="py-2" />
      </div>
      {/* Content 4 */}
      <div className="mt-3">
        <h2 className="font-semibold">
          সালোকসংশ্লেষণের সময় আলোর রঙের ভূমিকা:{' '}
        </h2>
        <p>
          আপনি কি জানেন যে আলোর রঙ সালোকসংশ্লেষণের সময় একটি গুরুত্বপূর্ণ ভূমিকা
          পালন করে? হ্যাঁ এটা করে. উদ্ভিদ সালোকসংশ্লেষণ প্রক্রিয়ার জন্য আলো
          থেকে শুধুমাত্র নির্দিষ্ট রং ব্যবহার করে। ক্লোরোফিল নীল, লাল এবং বেগুনি
          আলোক রশ্মি শোষণ করে। সালোকসংশ্লেষণ নীল এবং লাল আলো রশ্মিতে বেশি ঘটে
          এবং সবুজ আলো রশ্মিতে কম, বা একেবারেই নয়।
        </p>
        <p className="mt-2">
          যে আলোটি সর্বোত্তম শোষিত হয় তা হল নীল, তাই এটি সালোকসংশ্লেষণের
          সর্বোচ্চ হার দেখায়, তারপরে লাল আলো আসে। সবুজ আলো উদ্ভিদ দ্বারা শোষণ
          করা যায় না, এবং এইভাবে সালোকসংশ্লেষণের জন্য ব্যবহার করা যায় না।
          ক্লোরোফিল সবুজ দেখায় কারণ এটি লাল এবং নীল আলো শোষণ করে, এই রংগুলিকে
          আমাদের চোখে দেখা যায় না। এটি সবুজ আলো যা শোষিত হয় না যা অবশেষে
          আমাদের চোখে পৌঁছায়, ক্লোরোফিলকে সবুজ দেখায়।
        </p>
      </div>
      {/* Content 5 */}
      <div className="mt-5">
        <h2 className="font-semibold">সালোকসংশ্লেষণকে প্রভাবিতকারী উপাদান: </h2>
        <p>
          সালোকসংশ্লেষণের একটি ধ্রুবক হারের জন্য, সর্বোত্তম স্তরে বিভিন্ন কারণের
          প্রয়োজন হয়। এখানে সালোকসংশ্লেষণকে প্রভাবিত করে এমন কিছু কারণ রয়েছে।
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>
            আলোর তীব্রতা: একটি বর্ধিত আলোর তীব্রতা সালোকসংশ্লেষণের উচ্চ হারের
            দিকে পরিচালিত করে এবং কম আলোর তীব্রতার অর্থ হল সালোকসংশ্লেষণের কম
            হার।
          </li>
          <li>
            CO2 এর ঘনত্ব: উচ্চতর কার্বন ডাই অক্সাইড ঘনত্ব সালোকসংশ্লেষণের হার
            বাড়ায়। সাধারণত 0.03 থেকে 0.04 শতাংশ কার্বন ডাই অক্সাইড ঘনত্ব
            সালোকসংশ্লেষণের জন্য যথেষ্ট।
          </li>
          <li>
            তাপমাত্রা: একটি দক্ষ সালোকসংশ্লেষণের জন্য 25 থেকে 35oC এর মধ্যে
            সর্বোত্তম তাপমাত্রা পরিসীমা প্রয়োজন।
          </li>
          <li>
            পানি: সালোকসংশ্লেষণের জন্য পানি একটি অপরিহার্য উপাদান। পানির অভাব
            কার্বন ডাই অক্সাইড গ্রহণের সাথেও সমস্যা সৃষ্টি করে। জলের অভাব হলে,
            পাতাগুলি তাদের স্টমাটা খুলতে অস্বীকার করে যাতে তারা ভিতরে জমা জল
            রাখে।
          </li>
          <li>
            দূষিত বায়ুমণ্ডল: দূষক এবং গ্যাস (অশুদ্ধ কার্বন) পাতার উপর বসতি
            স্থাপন করে এবং স্টোমাটা ব্লক করে, যা কার্বন ডাই অক্সাইড গ্রহণ করা
            কঠিন করে তোলে। একটি দূষিত বায়ুমণ্ডল সালোকসংশ্লেষণের হার 15 শতাংশ
            হ্রাস করতে পারে।
          </li>
        </ul>
      </div>
      {/* Content 6 */}
      <div className="mt-5 pb-5">
        <h2 className="font-semibold mb-1"> শেখার ফলাফল: </h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            শিক্ষার্থীরা ধারণাটি বুঝতে পারে যে সালোকসংশ্লেষণের জন্য আলো
            প্রয়োজনীয়।
          </li>
          <li>
            শিক্ষার্থীরা সালোকসংশ্লেষণের নীতি এবং সালোকসংশ্লেষণকে প্রভাবিত করার
            কারণগুলি বোঝে।
          </li>
          <li>
            শিক্ষার্থীরা অ্যানিমেশন এবং সিমুলেশনের মাধ্যমে পদক্ষেপগুলি বুঝতে
            পারলে বাস্তব ল্যাবে পরীক্ষাটি আরও নিখুঁতভাবে করতে সক্ষম হবে।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BioTheoryTemplate;