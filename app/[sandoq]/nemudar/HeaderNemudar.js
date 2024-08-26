export default function HeadreNemudar({ name }) {
  return (
    <>
      {name === "" ? (
        <div className="mx-auto text-center items-center justify-center">
          <div className="container p-4 sm:p-1 text-center mx-auto  items-center justify-center">
            <div className="info">
              <div className="text1 skeleton"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-col space-y-2">
          <h3 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            اطلاعات صندوق {name}
          </h3>
        </div>
      )}
    </>
  );
}
