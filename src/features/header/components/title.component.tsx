import { PageContent } from "../../../constants/page_content";

function Title() {
  return (
    <div className="text font-bold text-2xl px-4 border-r-2 border-r-black">
      {PageContent.title}
    </div>
  );
}

export default Title;
