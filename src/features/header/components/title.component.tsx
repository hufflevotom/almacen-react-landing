// import { PageContent } from "../../../constants/page_content";

function Title() {
  return (
    <div className="text font-bold text-2xl px-2 lg:px-4">
      {/* {PageContent.title} */}
      <a href="https://jambelectronics.com">
        <img src="/logoTitle.png" alt="logo" className="h-8 inline-block" />
      </a>
    </div>
  );
}

export default Title;
