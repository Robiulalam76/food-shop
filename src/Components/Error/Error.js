import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>

            <section class="bg-blue-50 text-blue-600 py-16 relative z-10">
                <div class="container">
                    <div class="flex -mx-4">
                        <div class="w-full px-4">
                            <div class="mx-auto max-w-[400px] text-center">
                                <h2
                                    class=" text-blue-600
                  font-bold
                  text-white
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  "
                                >
                                    404
                                </h2>
                                <h4
                                    class=" font-semibold text-[22px] text-blue-600 leading-tight mb-3"
                                >
                                    Oops! That page can’t be found
                                </h4>
                                <p class="text-lg text-black mb-8">
                                    The page you are looking for it maybe deleted
                                </p>
                                <Link to='/home'

                                    class="
                  text-base
                  font-semibold
                  text-white
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  transition
                  bg-primary
                  "
                                >
                                    Go To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
                >
                    <div
                        class="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
                    ></div>
                    <div class="w-1/3 h-full flex">
                        <div
                            class="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                        ></div>
                        <div
                            class="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                        ></div>
                    </div>
                    <div
                        class="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
                    ></div>
                </div>
            </section>

        </div>
    );
};

export default Error;