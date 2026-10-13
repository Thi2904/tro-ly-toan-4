import { getStore } from "@/lib/store";
import { setSession } from "@/lib/session";
import { validName, validDob, cleanClass, cleanSchool, validClass, validSchool } from "@/lib/identity";
import { body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const { name, dob, className, school } = await body<{ name?: string; dob?: string; className?: string; school?: string }>(req);
  const nameErr = validName(name ?? "");
  if (nameErr) return fail(nameErr);
  const iso = validDob(dob ?? "");
  if (!iso) return fail("Ngày sinh chưa đúng, em chọn lại ngày, tháng, năm nhé.");

  // Lớp và trường: bắt buộc ở lần đầu; những lần sau có thể bỏ trống (giữ thông tin đã lưu).
  const cls = cleanClass(className ?? "");
  const sch = cleanSchool(school ?? "");
  if (cls) {
    const e = validClass(cls);
    if (e) return fail(e);
  }
  if (sch) {
    const e = validSchool(sch);
    if (e) return fail(e);
  }

  const res = await getStore().loginStudent(name!, iso, { className: cls, school: sch });
  if (res.needProfile) {
    return fail("Lần đầu vào học, em nhập thêm lớp và trường của em để tạo tài khoản nhé.");
  }
  await setSession({ role: "student", sid: res.student.id, name: res.student.name });
  return ok({ name: res.student.name, created: res.created });
}
