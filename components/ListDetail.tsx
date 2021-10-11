import * as React from 'react'


const Random = () => (
  <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:gap-8">
          <div className="col-span-1 px-4 py-4 bg-gray-700 rounded-lg lg:px-8 lg:py-6">
            <h2 className="mb-4 text-xl font-bold text-blue-200 lg:mb-6">Monthly target</h2>
            <div className="flex items-end mb-4 space-x-4 lg:mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg">
                <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <span className="mb-2 text-2xl text-blue-100">&euro;21.291,09</span>
              <span className="hidden mb-2 text-blue-100 whitespace-pre opacity-70 xl:inline-block">/ &euro;40.000</span>
            </div>
            <div className="overflow-hidden bg-gray-600 rounded-full h-7">
              <div style ={{"width": "65%"}}
                className="flex items-center justify-center text-center bg-green-400 rounded-full h-7 text-green-50">
                65%
              </div>
            </div>
          </div>
          <div className="col-span-1 px-4 py-4 bg-gray-700 rounded-lg lg:px-8 lg:py-6">
            <h2 className="mb-4 text-xl font-bold text-blue-200 lg:mb-6">Customers</h2>
            <div className="flex items-end mb-4 space-x-4 lg:mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg">
                <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
                  </path>
                </svg>
              </div>
              <span className="mb-2 text-2xl">491</span>
              <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&#8605; 32</span>
            </div>
            <p>Customers this month</p>
          </div>
          <div className="col-span-1 px-4 py-4 bg-gray-700 rounded-lg lg:px-8 lg:py-6">
            <h2 className="mb-4 text-xl font-bold text-blue-200 lg:mb-6">Sales</h2>
            <div className="flex items-end mb-4 space-x-4 lg:mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg">
                <svg className="w-6 h-6 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <span className="mb-2 text-2xl">230</span>
              <span className="px-3 mb-2 text-base text-red-600 bg-red-200 rounded-full border-full">
                <span className="inline-block transform rotate-180">
                  &#8604;
                </span>
                12
              </span>
            </div>
            <p>Sales this month</p>
          </div>
        </div>
        <div className="px-4 py-4 mt-8 bg-gray-700 rounded-lg lg:px-8 lg:py-6">
          <h2 className="mb-4 text-xl font-bold text-blue-200 lg:mb-6">Recent orders</h2>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden align-middle">
              <table className="min-w-full">
                <thead className="text-left bg-gray-600">
                  <tr>
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Product</th>
                    <th className="px-3 py-2">Customer</th>
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">&nbsp;</th>
                  </tr>
                </thead>
                <tbody className="text-blue-100 divide-y divide-gray-600 text-opacity-80 whitespace-nowrap">
                  <tr>
                    <td className="px-3 py-3">#12831</td>
                    <td className="px-3 py-3">Traditional Package</td>
                    <td className="px-3 py-3">Frances Nichols</td>
                    <td className="px-3 py-3">12-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-green-600 uppercase bg-green-200 rounded-full">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">#12830</td>
                    <td className="px-3 py-3">Pro Package</td>
                    <td className="px-3 py-3">Ronald George</td>
                    <td className="px-3 py-3">12-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-green-600 uppercase bg-green-200 rounded-full">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">#12829</td>
                    <td className="px-3 py-3">Pro Package</td>
                    <td className="px-3 py-3">Charlene Scott</td>
                    <td className="px-3 py-3">12-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-red-600 uppercase bg-red-200 rounded-full">Failed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">#12828</td>
                    <td className="px-3 py-3">Starter Package</td>
                    <td className="px-3 py-3">Beverley Owens</td>
                    <td className="px-3 py-3">11-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-green-600 uppercase bg-green-200 rounded-full">Done</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">#12827</td>
                    <td className="px-3 py-3">Pro Package</td>
                    <td className="px-3 py-3">Julian Hansen</td>
                    <td className="px-3 py-3">11-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-yellow-600 uppercase bg-yellow-200 rounded-full">Hold</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3">#12826</td>
                    <td className="px-3 py-3">Pro Package</td>
                    <td className="px-3 py-3">Nathan Howell</td>
                    <td className="px-3 py-3">11-01-2021</td>
                    <td className="px-3 py-3">
                      <span
                        className="inline-block w-16 px-3 py-1 text-xs text-center text-green-600 uppercase bg-green-200 rounded-full">Done</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a href="#" className="inline-block mt-5 font-bold text-blue-600 hover:underline">View all orders</a>
        </div>

        <div className="flex flex-col px-4 py-4 mt-8 space-y-4 bg-gray-700 rounded-lg lg:px-8 lg:py-6 lg:flex-row lg:space-y-0 lg:space-x-12">
          <div>
            <h2 className="mb-2 text-xl font-bold text-blue-200">Quick actions</h2>
            <p className="text-blue-100 opacity-70">Your recently most used actions</p>
          </div>
          <nav className="space-y-2 md:flex md:space-x-4 md:space-y-0">
            <a href="#" className="inline-flex flex-col items-center justify-center w-32 px-3 py-3 border border-gray-600 rounded-lg hover:bg-gray-800">
              <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
              </svg>
              <span className="text-blue-100 opacity-70">
                Create User
              </span>
            </a>
            <a href="#" className="inline-flex flex-col items-center justify-center w-32 px-3 py-3 border border-gray-600 rounded-lg hover:bg-gray-800">
              <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd"></path>
              </svg>
              <span className="text-blue-100 opacity-70">
                Create File
              </span>
            </a>
            <a href="#" className="inline-flex flex-col items-center justify-center w-32 px-3 py-3 border border-gray-600 rounded-lg hover:bg-gray-800">
              <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
              <span className="text-blue-100 opacity-70">
                Edit User
              </span>
            </a>
            <a href="#" className="inline-flex flex-col items-center justify-center w-32 px-3 py-3 border border-gray-600 rounded-lg hover:bg-gray-800">
              <svg className="w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clip-rule="evenodd"></path>
              </svg>
              <span className="text-blue-100 opacity-70">
                View Stats
              </span>
            </a>
          </nav>
        </div>
        <div className="px-4 py-4 mt-8 bg-gray-700 rounded-lg lg:px-8 lg:py-6">
          <h2 className="mb-4 text-xl font-bold text-blue-200 lg:mb-6">Top customers</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
            <div className="space-y-4 md:max-w-sm">
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer1.jpg" alt="Danielle Arnold" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Danielle Arnold</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;438</span>
              </a>
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer2.jpg" alt="Leta Washington" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Leta Washington</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;256</span>
              </a>
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer3.jpg" alt="Clinton Torres" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Clinton Torres</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;149</span>
              </a>
            </div>
            <div className="space-y-4 md:max-w-sm">
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer4.jpg" alt="Sonia Watkins" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Sonia Watkins</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;136</span>
              </a>
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer5.jpg" alt="Arthur Garcia" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Arthur Garcia</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;128</span>
              </a>
              <a href="" className="flex items-center w-full space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                <img src="../../images/customer6.jpg" alt="Clinton Torres" className="rounded-full w-14 h-14" />
                <div className="flex flex-col items-start flex-1 text-sm">
                  <span className="font-bold text-blue-100 ">Gerald Beck</span>
                  <span className="text-sm font-bold text-blue-200 opacity-50">View profile</span>
                </div>
                <span className="px-3 mb-2 text-base text-green-600 bg-green-200 rounded-full border-full">&euro;97</span>
              </a>
            </div>
          </div>
          <a href="#" className="inline-block mt-5 font-bold text-blue-600 hover:underline">View all customers</a>
        </div>
      </div>
)

export default Random
