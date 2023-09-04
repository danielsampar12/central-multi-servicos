'use client';

import { navigateToElementId } from '@/utils/navigateToElementId';

export function IntroButton() {
  return (
    <button
      onClick={() => navigateToElementId('#footer')}
      type="button"
      className="ContactUsButton w-full reg:h-12 h-10 rounded-3xl py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
    >
      <p className="ContactUs text-white reg:text-xl text-base font-medium tracking-wide">
        Fale conosco
      </p>
    </button>
  );
}
