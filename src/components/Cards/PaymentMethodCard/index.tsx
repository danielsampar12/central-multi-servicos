import { CreditCardCard } from '../CreditCardCard';

import card from '@/assets/card.svg';
import card1 from '@/assets/card1.svg';

export function PaymentMethodCard() {
  return (
    <div className="PMethodContainer flex flex-col px-5 py-6 drop-shadow-2xl w-full bg-white rounded-xl">
      <div className="TitleContiner flex flex-row justify-start items-center">
        <span className="PMethodTitle text-black text-base font-semibold font-inter mb-7">
          Métodos de pagamento
        </span>
      </div>

      <div className="flex flex-col h-full gap-3">
        <CreditCardCard cardImage={card} cardName="Mastercard" />
        <CreditCardCard cardImage={card1} cardName="Visa" />
      </div>
    </div>
  );
}
