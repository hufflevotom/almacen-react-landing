import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { Colors } from "../../../constants/styles";
import { selectPage } from "../redux/structure.slice";

function Error404() {
  const pages = useAppSelector((state) => state.structure.pages);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-start flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                No encontramos la página que buscas
              </h1>
              <p className="my-2 text-gray-800">
                Lo sentimos! Vuelve a la página principal.
              </p>
              <button
                className="sm:w-full lg:w-auto my-2 border text-sm rounded md py-4 px-8 text-center text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: Colors[2] }}
                onClick={() => dispatch(selectPage(pages[0]))}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
      </div>
      {/* <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div> */}
    </div>
  );
}

export default Error404;
