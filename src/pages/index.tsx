import type { NextPage } from "next";
import { cls } from "../lib/client/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import Button from "../components/button";
import useMutation from "../lib/client/useMutation";

interface EnterForm {
  login?: string;
  create_account?: string;
}

interface MutationResult {
  ok: boolean;
}

const Enter: NextPage = () => {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const [method, setMethod] = useState<"login" | "create_account">("login");
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const onLoginClick = () => {
    reset();
    setMethod("login");
  };
  const onCreateAccountClick = () => {
    reset();
    setMethod("create_account");
  };
  return (
    <div className="px-4 mt-16">
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
          <button
            className={cls(
              "pb-4 font-medium text-sm border-b-2",
              method === "create_account"
                ? "border-sky-500 text-sky-500"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={onCreateAccountClick}
          >
            회원가입
          </button>
        </div>
      </div>
      <form>
        {method === "login" ? (
          <Input
            register={register("login", {
              required: true,
            })}
            name="login"
            label="Login"
            type="number"
            required
          />
        ) : null}
        {method === "create_account" ? (
          <Input
            register={register("create_account")}
            name="create_account"
            label="Create_account"
            type="number"
            required
          />
        ) : null}
        {method === "login" ? (
          <Button text={loading ? "Loading" : "로그인"} />
        ) : null}
        {method === "create_account" ? (
          <Button text={loading ? "Loading" : "계정 생성하기"} />
        ) : null}
      </form>
    </div>
  );
};
export default Enter;
