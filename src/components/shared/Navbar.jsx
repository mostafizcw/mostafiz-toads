import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import MenuBar from "./MenuBar";
import MenuBarV2 from "./MenuBarV2";

const Navbar = () => {
  const phoneNumber = "+8801971030281";
  const message = "Good Morning";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // const emailAddress = "khokan@toadsbd.com";
  const handleEmailClick = () => {
    // Replace with your Gmail address
    const gmailAddress = "khokan@toadsbd.com";

    // Compose a Gmail URL with the "to" parameter
    //  const gmailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${gmailAddress}`;
    // window.location.href = `mailto:${emailAddress}`;
    // Open Gmail in a new tab or window
    //  window.open(gmailURL, "_blank");
    //  const gmailAddress = "khokan@toadsbd.com";

    // Create a "mailto" link with the recipient's email address
    const mailtoLink = `mailto:${gmailAddress}?subject=Subject&body=Hello%2C%0A%0A`;

    // Open the default email client, which may include the Gmail app on mobile devices
    window.location.href = mailtoLink;
  };

  return (
    <>
      <section className="bg-[#f99d1b]">
        <div className="py-1.5 md:flex justify-between mx-auto max-w-7xl px-4 xl:px-0">
          <div>
            <button className="flex gap-2 items-center text-white mb-2 md:mb-0">
              <FaWhatsapp size={20} />
              <a
                href={whatsappLink}
                className="text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                +88-01971030281
              </a>
            </button>
          </div>
          <div>
            <button
              className="flex gap-2 font-medium items-center text-white text-sm"
              onClick={handleEmailClick}
            >
              <HiOutlineMail size={20} />
              tony@toads.fr, khokan@toadsbd.com
            </button>
          </div>
        </div>
      </section>
      <section className="">
        {/* <Menu /> */}
        {/* <MenuBar /> */}
        <MenuBarV2 />
      </section>
    </>
  );
};

export default Navbar;
