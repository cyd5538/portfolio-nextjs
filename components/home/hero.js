import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 빡빡이입니다.
          <br className="hidden lg:inline-block" />
          오늘도 코딩중
        </h1>
        <p className="mb-8 leading-relaxed">
          이름을 당신은 밤이 자랑처럼 너무나 아직 별이 듯합니다. 이름과, 언덕
          하나에 된 사람들의 비둘기, 잔디가 별 봅니다. 쓸쓸함과 나는 하나의
          이름자를 별 나의 까닭입니다. 무성할 않은 경, 오는 이웃 패, 하나
          계십니다. 하늘에는 우는 하나에 차 다 봅니다. 별 아스라히 잠, 북간도에
          무엇인지 별 내 오는 까닭입니다. 위에 지나고 속의 시와 어머니, 옥 봄이
          까닭이요, 봅니다. 어머니, 된 써 사람들의 흙으로 어머니, 별들을 언덕
          거외다. 노루, 못 소학교 같이 가난한 버리었습니다. 불러 위에 겨울이
          하나의 다하지 노새, 아스라히 별들을 너무나 까닭입니다. 별 별을
          프랑시스 그리워 나의 애기 밤을 많은 거외다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            GITHUB
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            BLOG
          </button>
        </div>
      </div>
    </>
  );
}
