'use client';

import { navigateToElementId } from '@/utils/navigateToElementId';

export function HeaderButton() {
  return (
    <button
      onClick={() => navigateToElementId('#footer')}
      type="button"
      className="ContactUsButton reg:w-52 w-48 reg:h-12 h-10 rounded-3xl px-10 py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
    >
      <a
        href="#footer"
        className="ContactUs text-white reg:text-xl text-lg font-medium tracking-wide"
      >
        Fale conosco
      </a>
    </button>
  );
}
