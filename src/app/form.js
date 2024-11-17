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
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            {currentStep == 2 && (
              <>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Account Details
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Choose a username and set a password for your account here{" "}
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      //   for="username"
                      className="block text-sm/6 font-medium text-gray-900"
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
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      //   for="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={user.password}
                          onChange={handleChange}
                          //   autocomplete="new-password"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          placeholder="********"
                        />
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.password}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      //   for="confirm-password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={user.confirmPassword}
                          onChange={handleChange}
                          //   autocomplete="new-password"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                          placeholder="********"
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {currentStep == 1 && (
              <>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Details
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Please provide your personal information so we can personalize
                  your experience and ensure we can reach you when necessary.
                  This information will be kept secure and confidential.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      //   for="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        // autocomplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      //   for="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={user.lastName}
                        // autocomplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      //   for="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        // autocomplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />

                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      //   for="street-address"
                      className="block text-sm/6 font-medium text-gray-900"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      //   for="city"
                      className="block text-sm/6 font-medium text-gray-900"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      //   for="region"
                      className="block text-sm/6 font-medium text-gray-900"
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      //   for="postal-code"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        value={user.zipcode}
                        onChange={handleChange}
                        // autocomplete="postal-code"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                      {errors.zipcode && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.zipcode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
            {currentStep == 3 && (
              <>
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Preferenxes
                </h2>

                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="emailNotifications"
                              name="emailNotifications"
                              type="checkbox"
                              value={user.emailNotifications}
                              onChange={handleChange}
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="text-sm/6">
                            <label
                              //   for="comments"
                              className="font-medium text-gray-900"
                            >
                              Email
                            </label>
                            <p className="text-gray-500">
                              Stay up to date with the latest changes! Receive
                              email notifications about important updates, such
                              as policy changes, new offers, and upcoming
                              promotions. We’ll keep you informed about
                              everything that matters
                            </p>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="pushNotifications"
                              name="pushNotifications"
                              type="checkbox"
                              value={user.pushNotifications}
                              onChange={handleChange}
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="text-sm/6">
                            <label
                              //   for="candidates"
                              className="font-medium text-gray-900"
                            >
                              Push Notifications
                            </label>
                            <p className="text-gray-500">
                              Get instant updates on your phone! Enable push
                              notifications to receive real-time alerts about
                              policy changes, new offers, and more. Stay
                              informed no matter where you are.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="agreeToTerms"
                              name="agreeToTerms"
                              value={user.agreeToTerms}
                              onChange={handleChange}
                              type="checkbox"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="text-sm/6">
                            <p className="text-gray-500">
                              Please review and agree to our terms and
                              conditions to continue using our services. By
                              agreeing, you acknowledge and accept our policies.
                              You can review them at any time by clicking
                              [here].
                            </p>
                          </div>
                          {errors.agreeToTerms && (
                            <p className="text-red-500 text-sm">
                              {errors.agreeToTerms}
                            </p>
                          )}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
