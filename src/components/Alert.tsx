function Alert({ type, text }: { type: 'danger' | 'success', text: string }) {
  return (
    <div className="absolute top-10 left-0 right-0 z-80 flex justify-center items-center">
      <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} p-2 text-indigo-100 leading-none rounded-full flex lg:inline-flex items-center`} role="alert">
        <p className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
        <p className="mr-2 text-left">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Alert
