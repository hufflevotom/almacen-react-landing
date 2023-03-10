import { useAppSelector } from "../../../app/store/hooks";
import { Colors } from "../../../constants/styles";
import { Categories, NavPages, Title } from "../components";

function Header() {
  const selectedPage = useAppSelector((state) => state.structure.selectedPage);

  return (
    <div
      className="w-full px-6 lg:px-16 py-4 shadow-lg"
      style={{ backgroundColor: Colors[5], color: Colors[6] }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Title />
          {/* {selectedPage && selectedPage.name === "Tienda" ? (
            <Categories />
          ) : null} */}
        </div>
        <div className="flex flex-row items-center">
          <NavPages />
          {/* // TODO: Pending approval */}
          {/* <Cart /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
