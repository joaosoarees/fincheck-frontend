import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@app/config/constants';
import { formatCurrency } from '@app/utils/formatCurrency';
import { CategoryIcon } from '@view/components/icons/categories/CategoryIcon';
import { FilterIcon } from '@view/components/icons/FilterIcon';
import { TransactionsIcon } from '@view/components/icons/TransactionsIcon';

import { SliderNavigation } from './SliderNavigation';
import { SliderOption } from './SliderOption';

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />

            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>

            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="expense" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Almoço
              </strong>
              <span className="text-sm text-gray-600">11/02/2023</span>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
            - {formatCurrency(123)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="income" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Salário
              </strong>
              <span className="text-sm text-gray-600">11/02/2023</span>
            </div>
          </div>

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            {formatCurrency(2500)}
          </span>
        </div>
      </div>
    </div>
  );
}
