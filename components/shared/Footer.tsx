import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-4 text-center sm:flex-row">
        <Link href="/">
          <Image src={logo} alt="logo" width={128} height={38} />
        </Link>
        <p>2023 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
