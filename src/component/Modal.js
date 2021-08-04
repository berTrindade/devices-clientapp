import { FaTimes } from "react-icons/fa";

export default function Modal({
  title = 'Modal title',
  isOpen = false,
  setIsOpen = () => {},
  children
}) {
  return (
    <>
      {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-screen"
          >
            <div className="relative my-6 mx-auto max-w-3xl w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-600 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes className="h-6 w-8 fill-current"/>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {children}
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
