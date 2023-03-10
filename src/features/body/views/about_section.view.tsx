import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";

function AboutSection() {
  return PageContent.aboutUs ? (
    <div
      className="flex flex-col justify-center px-2 py-10 lg:px-10 gap-5"
      style={{ color: Colors[6] }}
    >
      <div className="flex flex-col justify-center">
        <div className="px-8 text font-bold text-4xl mb-6">
          {PageContent.aboutUs}
        </div>
      </div>
      <div className="flex flex-row gap-10 mx-10">
        <div className="flex flex-col  w-4/6">
          {/* Mission */}
          {PageContent.missionContent ? (
            <div className="flex flex-col mb-5">
              <div
                className="px-8 text font-bold text-2xl mb-6"
                style={{ color: Colors[2] }}
              >
                {PageContent.mission}
              </div>
              <div className="px-8 text font-medium text-lg mb-6">
                {PageContent.missionContent}
              </div>
            </div>
          ) : null}
          {/* Vision */}
          {PageContent.visionContent ? (
            <div className="flex flex-col mb-5">
              <div
                className="px-8 text font-bold text-2xl mb-6"
                style={{ color: Colors[2] }}
              >
                {PageContent.vision}
              </div>
              <div className="px-8 text font-medium text-lg mb-6">
                {PageContent.visionContent}
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col justify-center w-2/6">
          <img src="/logo.png" alt="about" className="w-full h-40" />
        </div>
      </div>
    </div>
  ) : null;
}

export default AboutSection;
