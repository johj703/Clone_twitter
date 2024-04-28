import type { NextPage } from "next";
import { cls } from "../lib/client/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface EnterForm {
  login?: string;
  create_account?: string;
}

const Enter: NextPage = () => {
  const [method, setMethod] = useState<"login" | "create_account">("login");
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const onLoginClick = () => {
    reset();
    setMethod("login");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="grid w-full grid-cols-2 mt-8 border-b">
        <button
          className={cls(
            "pb-4 font-medium text-sm border-b-2",
            method === "login"
              ? "border-sky-500 text-sky-500"
              : "border-transparent hover:text-gray-400 text-gray-500"
          )}
          onClick={onLoginClick}
        >
          로그인
        </button>
        <button>회원가입</button>
      </div>
    </div>
  );
};
export default Enter;
