

const EarnPointExistingAccount = () => {
  return (
    <div className="w-80 h-24 bg-blue-200 p-6 rounded gap-4 absolute top-6 left-6 flex items-center justify-between">
      <div>
        <p className="font-inter text-base font-semibold text-gray-600">Enter the correct details of your transaction below</p>
        <p className="font-inter text-base font-semibold text-gray-600">By filling this form, you agree to the terms and conditions guiding the award of points</p>
      </div>

      <form className="w-72 h-48 gap-4">
        <div>
          <label htmlFor="amountSpent" className="font-inter text-sm font-semibold text-gray-600">Amount Spent</label>
          <input type="text" id="amountSpent" className="w-full h-10 border-gray-300 border rounded px-3" placeholder="Enter amount spent" />
        </div>
        <div>
          <label htmlFor="facilityName" className="font-inter text-sm font-semibold text-gray-600">Name Of Facility</label>
          <input type="text" id="facilityName" className="w-full h-10 border-gray-300 border rounded px-3" placeholder="Enter facility name" />
        </div>
        <div>
          <label htmlFor="date" className="font-inter text-sm font-semibold text-gray-600">Date</label>
          <input type="text" id="date" className="w-full h-10 border-gray-300 border rounded px-3" placeholder="--/--/--" />
        </div>
        <div className="flex justify-end">
          <button className="w-48 h-10 bg-gray-300 rounded px-3 text-white">Cancel</button>
          <button className="w-48 h-10 bg-blue-500 rounded px-3 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EarnPointExistingAccount;
