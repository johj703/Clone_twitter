import type { NextPage } from "next";

const Enter: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid w-full grid-cols-2 mt-8 border-b">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};
export default Enter;
