'use client';

import { navigateToElementId } from '@/utils/navigateToElementId';

export function IntroButton() {
  return (
    <button
      onClick={() => navigateToElementId('#footer')}
      type="button"
      className="ContactUsButton w-full h-12 rounded-3xl px-10 py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
    >
      <p className="ContactUs text-white text-xl font-medium tracking-wide">
        Fale conosco
      </p>
    </button>
  );
}
