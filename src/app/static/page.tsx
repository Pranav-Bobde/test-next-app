import Link from 'next/link';

export default function TestPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>Static Page</div>
        <Link href="/" prefetch={true}>
          Home Page
        </Link>
      </div>
    </>
  );
}
