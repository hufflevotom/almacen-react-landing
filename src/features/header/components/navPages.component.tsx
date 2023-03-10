import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { Colors } from "../../../constants/styles";
import { selectPage } from "../../body/redux/structure.slice";

function NavPages() {
  const pages = useAppSelector((state) => state.structure.pages);
  const selectedPage = useAppSelector((state) => state.structure.selectedPage);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row items-center">
      {pages.map((page) => (
        <a
          key={page.id}
          className={
            selectedPage === page
              ? "px-3 py-2 rounded-md text-base font-bold"
              : "px-3 hover:cursor-pointer py-2 rounded-md text-base font-medium"
          }
          style={{ color: selectedPage === page ? Colors[2] : Colors[1] }}
          onClick={() => dispatch(selectPage(page))}
        >
          {page.name}
        </a>
      ))}
    </div>
  );
}

export default NavPages;
