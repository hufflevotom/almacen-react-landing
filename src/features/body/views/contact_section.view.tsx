import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";

function ContactSection() {
  return (
    <div
      className="flex flex-row justify-center px-2 py-10 lg:px-10"
      style={{ color: Colors[6] }}
    >
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col justify-center">
          <div className="px-8 text font-bold text-4xl mb-6">
            {PageContent.contactUs}
          </div>
        </div>
        <div className="flex flex-row mx-10">
          <div className="flex flex-col">
            <div className="px-8 text font-bold text-2xl mb-6">
              {PageContent.callUs}
            </div>
            <div className="px-8 text font-medium text-lg">
              {PageContent.phoneNumbers.map((item) => (
                <div className="flex flex-row gap-3 items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    style={{ color: Colors[2] }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-8 text font-bold text-2xl mb-6">
              {PageContent.location}
            </div>
            <div className="px-8 text font-medium text-lg mb-6 flex flex-row gap-3 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ color: Colors[2] }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>

              {PageContent.locationContent}
            </div>
          </div>
          {/* <div className="flex flex-col">
            <div className="px-8 text font-bold text-2xl mb-6">
              {PageContent.email}
            </div>
            <div className="px-8 text font-medium text-lg mb-6">
              {PageContent.emailContent}
            </div>
          </div> */}
          <div className="flex flex-col">
            <div className="px-8 text font-bold text-2xl mb-6">
              {PageContent.businessHours}
            </div>
            <div className="px-8 text font-medium text-lg mb-6 flex flex-row gap-3 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{ color: Colors[2] }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              {PageContent.businessHoursContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
