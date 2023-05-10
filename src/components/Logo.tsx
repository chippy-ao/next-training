import Link from "next/link";
import clsx from "clsx";

interface Props {
  boxOn?: boolean;
}
export const Logo = ({ boxOn = false }: Props) => {
  const _BOX = ["inline-block", "px-8", "py-4", "bg-gray-75", "text-white", "text-small-heading2"];

  return (
    <Link href="/" className={clsx("text-heading2", "font-[700]", "tracking-[.15em]", boxOn && _BOX)}>
      CUBE
    </Link>
  );
};
Logo.displayName = "Logo";
