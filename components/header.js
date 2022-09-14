import Link from 'next/link';
import DarkModeToggleBtn from './dark-mode-toggle';
import { FcLinux } from "react-icons/fc";
export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div className="flex justify-center align-center text-2xl w-10 h-10 text-white p-2 bg-indigo-400 rounded-full">
               <FcLinux />
               </div>
            <span className="ml-3 text-xl">최영진 포트폴리오</span>
          </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>
            <a className="mr-5 hover:text-gray-900">연락하기</a>
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
}
