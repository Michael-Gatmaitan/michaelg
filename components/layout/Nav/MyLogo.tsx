"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const MyLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <div className="flex px-2" />;
  }

  return (
    <div className="flex px-2">
      {resolvedTheme === "dark" ?
        (
          <Image
            src="/my-logo/mg_logo_white.svg"
            width={20}
            alt="MyLogoLight"
            height={36}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src="/my-logo/mg_logo_black.svg"
            width={20}
            alt="MyLogoDark"
            height={36}
            style={{ objectFit: "cover" }}
          />
        )
      }
    </div>
  )
}

export default MyLogo
