import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

type formData = z.infer<typeof schema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} id="email" type="email" />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} id="password" type="password" />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm</label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
