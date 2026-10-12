import { getStore } from "@/lib/store";
import { setSession } from "@/lib/session";
import { validName, validDob } from "@/lib/identity";
import { body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const { name, dob } = await body<{ name?: string; dob?: string }>(req);
  const nameErr = validName(name ?? "");
  if (nameErr) return fail(nameErr);
  const iso = validDob(dob ?? "");
  if (!iso) return fail("Ngày sinh chưa đúng, em chọn lại ngày, tháng, năm nhé.");
  const { student, created } = await getStore().loginStudent(name!, iso);
  await setSession({ role: "student", sid: student.id, name: student.name });
  return ok({ name: student.name, created });
}
