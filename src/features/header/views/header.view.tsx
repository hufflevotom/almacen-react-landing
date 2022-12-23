import { Colors } from "../../../constants/styles";
import { Categories, Title } from "../components";

function Header() {
  return (
    <div
      className="w-full px-16 py-4 shadow-lg"
      style={{ backgroundColor: Colors[5], color: Colors[6] }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Title />
          <Categories />
        </div>
        {/* // TODO: Pending approval */}
        {/* <div className="flex flex-row items-center"><Cart /></div> */}
      </div>
    </div>
  );
}

export default Header;
