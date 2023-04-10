import { Button } from '@/components/Button/Button';
import { Layout } from '@/components/Layout/Layout';
import { useCart } from '@/hooks/useCart';
import { MinusIcon } from '@/icons/MinusIcon';
import { PlusIcon } from '@/icons/PlusIcon';
import { TrashIcon } from '@/icons/TrashIcon';
import Image from 'next/image';
import React from 'react';

const CheckoutPage = () => {
  const { getTotals, items, addItem, removeItem } = useCart();
  const { price } = getTotals();

  return (
    <Layout>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              {items.length === 0 && (
                <div>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    ${price}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    For the purchase of
                  </p>
                </div>
              )}

              <div className="flex flex-col items-start justify-between">
                <div className="max-w-xl pb-6">
                  <h3 className="font-semibold text-[16px]">Cart</h3>
                </div>
                <ul className="space-y-6 w-full">
                  {items.length === 0 && (
                    <li className="flex items-center gap-6">Cart is empty</li>
                  )}
                  {items.map(({ product, quantity }) => {
                    const { id, title, price, image } = product;
                    return (
                      <li key={id} className="flex items-center gap-6">
                        <Image
                          src={image}
                          className="h-36 w-36 rounded object-cover border border-gray-200"
                          alt={title}
                          width={640}
                          height={712}
                        />

                        <div className="flex flex-1 flex-col">
                          <h3 className="text-sm text-gray-900">{title}</h3>

                          <dl className="mt-2 space-y-2 text-[14px] text-gray-600">
                            <div>
                              <dt className="inline">Price:</dt>
                              <dd className="ml-1 inline font-bold">
                                ${price * quantity}
                              </dd>
                            </div>

                            <div className="flex mt-2 items-center">
                              <button
                                onClick={() =>
                                  removeItem({ product, quantity: 1 })
                                }
                              >
                                <MinusIcon />
                              </button>
                              <dt className="mx-1 inline">Qty:</dt>
                              <dd className="mx-1 inline font-bold">
                                {quantity}
                              </dd>
                              <button
                                onClick={() =>
                                  addItem({ product, quantity: 1 })
                                }
                              >
                                <PlusIcon />
                              </button>
                              <button
                                className="ml-auto"
                                onClick={() =>
                                  removeItem({ product, quantity })
                                }
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </dl>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    className="mt-1 p-2 w-full rounded border border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    className="mt-1 p-2 w-full rounded border border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="mt-1 p-2 w-full rounded border border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    className="mt-1 p-2 w-full rounded border border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Card Details
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label htmlFor="CardNumber" className="sr-only">
                        {' '}
                        Card Number{' '}
                      </label>

                      <input
                        type="text"
                        id="CardNumber"
                        placeholder="Card Number"
                        className="relative mt-1 p-2 w-full rounded border border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label htmlFor="CardExpiry" className="sr-only">
                          {' '}
                          Card Expiry{' '}
                        </label>

                        <input
                          type="text"
                          id="CardExpiry"
                          placeholder="Expiry Date"
                          className="relative w-full p-2 rounded border border-gray-200 focus:z-10 sm:text-sm"
                        />
                      </div>

                      <div className="flex-1">
                        <label htmlFor="CardCVC" className="sr-only">
                          {' '}
                          Card CVC{' '}
                        </label>

                        <input
                          type="text"
                          id="CardCVC"
                          placeholder="CVC"
                          className="relative w-full p-2 rounded border border-gray-200 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Billing Address
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label htmlFor="Country" className="sr-only">
                        Country
                      </label>

                      <select
                        id="Country"
                        className="relative p-2 w-full rounded border border-gray-200 focus:z-10 sm:text-sm"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="PostalCode">
                        {' '}
                        ZIP/Post Code{' '}
                      </label>

                      <input
                        type="text"
                        id="PostalCode"
                        placeholder="ZIP/Post Code"
                        className="relative mt-4 p-2 w-full rounded border border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <Button variant="primary" className="w-full">
                    Pay Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
