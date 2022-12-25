import { PageContent } from "../../../constants/page_content";

function Title() {
  return (
    <div className="text font-bold text-2xl px-2 lg:px-4 lg:border-r-2 lg:border-r-black">
      {PageContent.title}
    </div>
  );
}

export default Title;
