'use client';

import { navigateToElementId } from '@/utils/navigateToElementId';

export function PhoneCardButton() {
  return (
    <button
      onClick={() => navigateToElementId('#footer')}
      type="button"
      className="ContactUsButtonOnCard w-full reg:h-12 rounded-3xl reg:px-10 px-5 reg:py-4 p-2 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
    >
      <p className="ContactUsOnCard text-white reg:text-lg text-xs font-medium tracking-wide">
        Entre em contato
      </p>
    </button>
  );
}
