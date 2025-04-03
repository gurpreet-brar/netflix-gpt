import React from "react";
import facebook from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";
import twitter from "../assets/X_twitter.svg";
function Footer() {
  return (
    <div className="bg-black py-15 px-12 flex flex-col gap-8 ">
      <div className="flex gap-5">
        <a href="http://www.facebook.com" target="_blank">
          {" "}
          <img src={facebook} />
        </a>
        <a target="_blank" href="http://www.instagram.com">
          <img src={insta} />
        </a>
        <a target="_blank" href="http://www.twitter.com">
          {" "}
          <img src={twitter} />
        </a>
      </div>
      <div className="text-white/50 text-sm flex gap-40 mt-10">
        <div className="flex gap-4 flex-col">
          <p>Privacy</p>
          <p>Contact Us</p>
          <p>Help center</p>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Jobs</p>
          <p>Netflix Shop</p>
          <p>Terms of use</p>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Legal Notices</p>
          <p>Audio Description</p>
          <p>Ad Choices</p>
        </div>
      </div>
      <p className="text-white/50 text-sm mt-20">
        © 2025 Netflix-gpt. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
