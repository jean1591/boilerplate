"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
  };

  const { error } = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/private`,
    },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
