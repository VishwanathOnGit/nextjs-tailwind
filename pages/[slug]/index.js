import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogDetails() {
  const router = useRouter();
  return (
    <>
      <Link href="/">Back to home</Link>
    </>
  );
}
