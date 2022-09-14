import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">최영진 포트폴리오</span>
            </a>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2022 portfolio
            </p>
            
          </div>
        </div>
      </footer>
    </>
  );
}
