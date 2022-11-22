import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Image from "next/image";

import { trpc } from "@/utils/trpc";
import type { IProfile } from "@/validation/validators";

const ProfileForm = () => {
  // const mutation = trpc.auth.register.useMutation({
  //   onError: (e) => console.log(e.message),
  //   onSuccess: () => console.log("success"),
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProfile>();

  const image = watch("image", undefined);
  const onSubmit: SubmitHandler<IProfile> = async (data) => {
    // await mutation.mutateAsync(data);
  };

  return (
    <div className="rounded-xl bg-white p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label>Username</label>
        <input
          className="rounded border py-1 px-4"
          type="username"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-center text-red-600">This field is required</p>
        )}

        {/* <div className="relative h-20 w-20">
          <Image
            className=""
            layout="fill"
            alt={"https://randomuser.me/api/portraits/lego/1.jpg"}
            src={"https://randomuser.me/api/portraits/lego/1.jpg"}
          />
          <div>
            <label>Picture</label>
            <input className="" type="file" {...register("image")} />
          </div>
        </div> */}

        <label>Email</label>
        <input
          className="rounded border py-1 px-4"
          type="text"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-center text-red-600">This field is required</p>
        )}
        <label>Password</label>
        <input
          className="rounded border py-1 px-4"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-center text-red-600">This field is required</p>
        )}

        <input
          type="submit"
          className="mx-auto w-44 rounded border py-1 px-4"
        />
      </form>
    </div>
  );
};

export default ProfileForm;
