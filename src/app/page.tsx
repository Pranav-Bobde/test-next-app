import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>Home Page</div>
        <Link href="/dynamic">Dynamic Page</Link>
        <Link href="/static">Static Page</Link>
      </div>
    </>
  );
}
