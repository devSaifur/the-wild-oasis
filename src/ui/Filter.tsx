const Filter = () => {
  return (
    <div className="flex gap-[0.4rem] rounded-sm border border-solid border-gray-100 bg-gray-0 p-[0.4rem] shadow-sm dark:border-gray-800">
      Filter
      <button className="rounded-r-sm bg-indigo-600 px-[0.8rem] py-[0.44rem] text-sm font-medium text-indigo-50 transition-all delay-300 hover:bg-indigo-600 hover:text-indigo-50 disabled:bg-gray-500">
        filter option label
      </button>
    </div>
  )
}

export default Filter
