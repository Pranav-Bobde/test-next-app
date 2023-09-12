import Link from 'next/link';

export default function DynamicPage() {
  fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>Dynamic Page</div>
        {Math.random()}
        <Link href="/" prefetch={true}>
          Home Page
        </Link>
      </div>
    </>
  );
}
