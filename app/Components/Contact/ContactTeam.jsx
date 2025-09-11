import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineThumbUp } from "react-icons/md";

export default function ContactTeam() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">
        Contact SyncIT – Always Here for Sylhet
      </h2>
      <p className="mb-6 text-sm text-gray-400">
        Reach us via WhatsApp, Facebook, Instagram, phone, or email – available
        24/7 for your internet needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto ">
        <Link
          href="https://wa.me/8801978169689?text=Hello%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
        >
          <FaWhatsapp className="text-green-600" size={20} />
          <span className="font-semibold">wa.me/8801978169689 </span>
          <span className="ml-auto">→</span>
        </Link>

        <Link
          href="tel:01965300500"
          target="_blanck"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
        >
          <FaPhone className="text-black" size={20} />
          <span className="font-semibold">01965300500 / 09638559900</span>
          <span className="ml-auto">→</span>
        </Link>

        <Link
          href={"https://www.facebook.com/syncitbd"}
          target="_blanck"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
        >
          <FaFacebookF className="text-blue-700" size={20} />
          <span className="font-semibold">Message us in Facebook</span>
          <span className="ml-auto">→</span>
        </Link>

        <Link
          href="mailto:support@syncit.com.bd"
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
        >
          <HiOutlineMail className="text-red-600" size={22} />
          <span className="font-semibold">support@syncit.com.bd</span>
          <span className="ml-auto">→</span>
        </Link>

        <Link
          href={"https://www.instagram.com/syncit"}
          target="_blank"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
        >
          <FaInstagram className="text-pink-500" size={20} />
          <span className="font-semibold">instagram.com/syncit</span>
          <span className="ml-auto">→</span>
        </Link>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-md  cursor-pointer bg-gradient-to-b from-[#ff0033] to-[#bd556a63]">
          <MdOutlineThumbUp className="text-cyan-400" size={20} />
          <span className="font-semibold">Hotline 09638233233</span>
          <span className="ml-auto">→</span>
        </button>
      </div>
    </section>
  );
}
