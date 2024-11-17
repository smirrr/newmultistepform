import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/userSlice"; // Import the action

const MultiStepForm = ({ currentStep, errors }) => {
  //   console.log("here", currentStep, currentStep == 1);
  const dispatch = useDispatch();

  // Access the Redux state
  const user = useSelector((state) => state.user);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Dispatch setUser to update the Redux store
    dispatch(setUser({ ...user, [name]: value }));
  };
  console.log("here", user);

  return (
    <div className="border border-solid border-[#90EE90] mt-10 mr-10 p-10  rounded-lg w-[90%] h-[35rem]">
      <form>
        <div className="space-y-12">
          <div className=" border-gray-900/10 pb-12 flex ">
            {currentStep == 2 && (
              <div className="">
                <h2 className="font-sans text-[#00008B] font-bold text-lg">
                  Account Details
                </h2>
                <p className="mt-1 font-sans text-[#00008B] italic font-light text-sm">
                  Choose a username and set a password for your account here{" "}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      //   for="username"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Username
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={user.username}
                          onChange={handleChange}
                          //   autocomplete="username"
                          className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      //   for="password"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Password
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        //   autocomplete="new-password"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                        placeholder="********"
                      />
                      {errors.password && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.password}
                        </p>
                      )}
                      {/* Password Guidelines */}
                      <ul className="mt-2 text-xs text-gray-500 list-disc pl-5">
                        <li>Password should be at least 6 characters long.</li>
                        <li>
                          Password must contain both alphabets and numbers.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      //   for="confirm-password"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        //   autocomplete="new-password"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                        placeholder="********"
                      />
                      {errors.confirmPassword && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep == 1 && (
              <div className="">
                <h2 className="font-sans text-[#00008B] font-bold text-lg">
                  Personal Details
                </h2>
                <p className="mt-1 font-sans text-[#00008B] italic font-light text-sm">
                  Please provide your personal information so we can personalize
                  your experience and ensure we can reach you when necessary.
                  This information will be kept secure and confidential.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      //   for="first-name"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      First name
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        // autocomplete="given-name"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                      {errors.firstName && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      //   for="last-name"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Last name
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={user.lastName}
                        // autocomplete="family-name"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                      {errors.lastName && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      //   for="email"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Email address
                    </label>
                    <div className="mt-2 relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        // autocomplete="email"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />

                      {errors.email && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      //   for="street-address"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={user.address}
                        onChange={handleChange}
                        // autocomplete="street-address"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      //   for="city"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={user.city}
                        onChange={handleChange}
                        // autocomplete="address-level2"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      //   for="region"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="state"
                        value={user.state}
                        onChange={handleChange}
                        id="state"
                        // autocomplete="address-level1"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      //   for="postal-code"
                      className="block text-sm/6 font-medium font-sans text-[#00008B]"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        value={user.zipcode}
                        onChange={handleChange}
                        // autocomplete="postal-code"
                        className="block w-full font-sans rounded-md border-0 py-1.5 text-sm text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#00008b] "
                      />
                      {errors.zipcode && (
                        <p className="absolute text-xs text-red-600  left-0 mt-0 mb-1 font-sans font-light">
                          {errors.zipcode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep == 3 && (
              <div className="">
                <h2 className="font-sans text-[#00008B] font-bold text-lg">
                  Preferences
                </h2>

                <div className="mt-10 flex flex-row gap-x-3 items-center">
                  <input
                    id="emailNotifications"
                    name="emailNotifications"
                    type="checkbox"
                    value={user.emailNotifications}
                    onChange={handleChange}
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />

                  <p className="mt-1 font-sans text-gray-600 italic font-light text-sm">
                    Stay up to date with the latest changes! Receive email
                    notifications about important updates, such as policy
                    changes, new offers, and upcoming promotions. We’ll keep you
                    informed about everything that matters
                  </p>
                </div>
                <div className="flex flex-row mt-10 gap-x-3 items-center ">
                  <input
                    id="pushNotifications"
                    name="pushNotifications"
                    type="checkbox"
                    value={user.pushNotifications}
                    onChange={handleChange}
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <p className="mt-1 font-sans text-gray-600 italic font-light text-sm">
                    Get instant updates on your phone! Enable push notifications
                    to receive real-time alerts about policy changes, new
                    offers, and more. Stay informed no matter where you are.{" "}
                  </p>
                </div>
                <div className="mt-10 flex flex-row gap-x-3 items-center relative">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    value={user.agreeToTerms}
                    onChange={handleChange}
                    type="checkbox"
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <p className="mt-1 font-sans text-gray-600 italic font-medium text-sm">
                    Please review and agree to our terms and conditions to
                    continue using our services. By agreeing, you acknowledge
                    and accept our policies. You can review them at any time by
                    clicking [here].
                  </p>
                  {errors.agreeToTerms && (
                    <p className="absolute text-xs text-red-600 mt-[4rem]  left-[1.8rem] mt-0 mb-1 font-sans font-light">
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
