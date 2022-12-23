import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";

function Footer() {
  return (
    <div
      className="w-full px-16 py-2 mt-10"
      style={{ backgroundColor: Colors[3], color: Colors[6] }}
    >
      <div className="flex flex-row justify-center">{PageContent.footer}</div>
    </div>
  );
}

export default Footer;
