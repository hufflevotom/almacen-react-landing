import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";

function Footer() {
  return (
    <div
      className="w-full px-4 lg:px-16 py-2 mt-10"
      style={{ backgroundColor: Colors[2], color: Colors[5] }}
    >
      <div className="flex flex-row justify-center text-xs lg:text-md">{PageContent.footer}</div>
    </div>
  );
}

export default Footer;
