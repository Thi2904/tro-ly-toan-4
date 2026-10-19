import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch8a: Record<number, L> = {
  // Bài 38. Nhân với số có một chữ số
  38: {
    intro:
      "Nhân số có nhiều chữ số với số có một chữ số: đặt tính rồi nhân lần lượt từ phải sang trái, nhớ khi tích ở mỗi hàng từ 10 trở lên.",
    questions: [
      num("Đặt tính rồi tính: 168 275 × 4 = ?", 168275 * 4),
      num("Đặt tính rồi tính: 24 837 × 6 = ?", 24837 * 6),
      num("Đặt tính rồi tính: 308 509 × 5 = ?", 308509 * 5),
      num("Đặt tính rồi tính: 4 096 × 8 = ?", 4096 * 8),
      num("Đặt tính rồi tính: 250 408 × 7 = ?", 250408 * 7),
      num("Đặt tính rồi tính: 1 234 567 × 9 = ?", 1234567 * 9),
      tf("41 500 × 6 = 249 000", true),
      tf("125 000 × 7 = 785 000", false, "125 000 × 7 = 875 000."),
      num("Tính giá trị của biểu thức: 213 405 + 52 130 × 4 = ?", 213405 + 52130 * 4),
      num("Tính giá trị của biểu thức: 800 000 – 45 600 × 5 = ?", 800000 - 45600 * 5),
      num("Mỗi ngày nhà máy làm được 15 750 sản phẩm. Trong 6 ngày nhà máy làm được bao nhiêu sản phẩm?", 15750 * 6, undefined, "sản phẩm"),
      num("Mỗi xe tải chở 3 450 kg hàng. 7 xe tải như vậy chở được bao nhiêu ki-lô-gam hàng?", 3450 * 7, undefined, "kg"),
      num("Lúc đầu có 5 000 con vi khuẩn. Sau mỗi giờ, số vi khuẩn lại gấp đôi. Sau 3 giờ có bao nhiêu con vi khuẩn?", 5000 * 2 * 2 * 2, "Sau 1 giờ: 10 000; sau 2 giờ: 20 000; sau 3 giờ: 40 000.", "con"),
      mc("Mẹ mua 3 chiếc áo, mỗi chiếc giá 125 000 đồng và đưa người bán hàng 500 000 đồng. Mẹ được trả lại:", "125 000 đồng", ["375 000 đồng", "75 000 đồng", "225 000 đồng"], "3 × 125 000 = 375 000; 500 000 – 375 000 = 125 000."),
    ],
    adv: [
      num("Một số nhân với 7 thì được 999 999. Số đó là:", 999999 / 7),
      num("Tính nhanh: 125 × 8 × 7 = ?", 125 * 8 * 7, "125 × 8 = 1 000."),
      num("Số có năm chữ số bé nhất mà khi nhân với 3 được số có sáu chữ số là số nào?", 33334, "33 333 × 3 = 99 999 chưa đủ sáu chữ số; 33 334 × 3 = 100 002."),
      num("Tính nhanh: 5 × 17 × 20 = ?", 5 * 17 * 20),
      num("Trên bàn cờ, ô thứ nhất đặt 1 hạt thóc, các ô sau đặt số hạt gấp đôi ô liền trước. Ô thứ 10 đặt bao nhiêu hạt thóc?", 512, "Các ô lần lượt có 1; 2; 4; 8; 16; 32; 64; 128; 256; 512 hạt.", "hạt"),
    ],
  },

  // Bài 39. Chia cho số có một chữ số
  39: {
    intro:
      "Chia số có nhiều chữ số cho số có một chữ số: chia từng hàng từ trái sang phải; nếu còn dư thì hạ chữ số kế tiếp xuống để chia tiếp. Số dư luôn bé hơn số chia.",
    questions: [
      num("Đặt tính rồi tính: 246 810 : 5 = ?", 246810 / 5),
      num("Đặt tính rồi tính: 735 468 : 6 = ?", 735468 / 6),
      num("Đặt tính rồi tính: 98 765 : 4 = ? (chỉ ghi thương)", Math.floor(98765 / 4), "98 765 : 4 = 24 691 (dư 1)."),
      num("Phép chia 98 765 : 4 có số dư là bao nhiêu?", 98765 % 4),
      num("Đặt tính rồi tính: 1 000 000 : 8 = ?", 1000000 / 8),
      num("Đặt tính rồi tính: 405 060 : 9 = ? (chỉ ghi thương)", Math.floor(405060 / 9), "405 060 : 9 = 45 006 (dư 6)."),
      num("Đặt tính rồi tính: 2 345 678 : 7 = ? (chỉ ghi thương)", Math.floor(2345678 / 7)),
      mc("Khi chia một số tự nhiên cho 7, số dư lớn nhất có thể là:", 6, [7, 5, 1]),
      mc("Chia 100 cho 8 được số dư là:", 4, [0, 2, 8], "100 = 8 × 12 + 4."),
      num("Người ta chia đều 12 450 quyển vở cho 6 trường. Mỗi trường nhận được bao nhiêu quyển vở?", 12450 / 6, undefined, "quyển"),
      num("7 xe tải chở như nhau tất cả 18 900 kg gạo. Mỗi xe chở bao nhiêu ki-lô-gam gạo?", 18900 / 7, undefined, "kg"),
      num("Người ta trồng 1 005 cây thành các hàng, mỗi hàng 8 cây. Cần ít nhất bao nhiêu hàng để trồng hết số cây đó?", Math.ceil(1005 / 8), "1 005 : 8 = 125 (dư 5), còn 5 cây nữa phải trồng thêm một hàng.", "hàng"),
      num("Quyển truyện dày 300 trang. Mỗi ngày Lan đọc 8 trang. Lan cần ít nhất bao nhiêu ngày để đọc hết quyển truyện?", Math.ceil(300 / 8), "300 : 8 = 37 (dư 4), nên cần 38 ngày.", "ngày"),
    ],
    adv: [
      num("Số bé nhất lớn hơn 100 mà chia cho 9 thì dư 8 là số nào?", 107, "99 là số chia hết cho 9; 99 + 8 = 107."),
      num("Có bao nhiêu số có ba chữ số chia hết cho 5?", (995 - 100) / 5 + 1, "Từ 100 đến 995: (995 – 100) : 5 + 1 = 180."),
      num("Số lớn nhất có hai chữ số mà chia cho 7 thì dư 3 là số nào?", 94, "94 = 7 × 13 + 3."),
      num("Số 2 026 chia cho một số được thương 253 và số dư 2. Số chia là:", (2026 - 2) / 253),
      num("Chia 365 cho 7 được thương và số dư. Tổng của thương và số dư là:", Math.floor(365 / 7) + (365 % 7), "365 = 7 × 52 + 1."),
    ],
  },

  // Bài 40. Tính chất giao hoán và kết hợp của phép nhân
  40: {
    intro:
      "Tính chất giao hoán: a × b = b × a. Tính chất kết hợp: (a × b) × c = a × (b × c). Có thể đổi chỗ và nhóm các thừa số để tính thuận tiện (ví dụ 25 × 4 = 100, 125 × 8 = 1 000, 2 × 5 = 10).",
    questions: [
      num("Số ?  17 × 6 = 6 × ?", 17),
      num("Số ?  (4 × 25) × 9 = 4 × (25 × ?)", 9),
      num("Tính bằng cách thuận tiện: 2 × 157 × 5 = ?", 2 * 157 * 5),
      num("Tính bằng cách thuận tiện: 25 × 37 × 4 = ?", 25 * 37 * 4),
      num("Tính bằng cách thuận tiện: 125 × 9 × 8 = ?", 125 * 9 * 8),
      num("Tính bằng cách thuận tiện: 5 × 64 × 2 = ?", 5 * 64 * 2),
      num("Tính bằng cách thuận tiện: 250 × 7 × 4 = ?", 250 * 7 * 4),
      num("Tính bằng cách thuận tiện: 4 × 18 × 25 = ?", 4 * 18 * 25),
      num("Tính bằng cách thuận tiện: 20 × 9 × 5 = ?", 20 * 9 * 5),
      mc("Biểu thức nào dưới đây thể hiện tính chất kết hợp của phép nhân?", "(a × b) × c = a × (b × c)", ["a × b = b × a", "a × 1 = a", "a × (b + c) = a × b + a × c"]),
      tf("Với mọi số a, b ta có a × b = b × a.", true),
      num("Mỗi hộp có 25 cái bút, mỗi thùng có 4 hộp. 12 thùng như vậy có tất cả bao nhiêu cái bút?", 25 * 4 * 12, "Nhóm 25 × 4 = 100 trước.", "cái"),
      num("Một tủ sách có 5 kệ, mỗi kệ có 8 ngăn, mỗi ngăn xếp 25 quyển sách. Tủ có tất cả bao nhiêu quyển sách?", 5 * 8 * 25, undefined, "quyển"),
      num("Số ?  8 × (25 × 7) = (8 × 25) × ?", 7),
    ],
    adv: [
      num("Tính nhanh: 125 × 4 × 8 × 25 = ?", 125 * 4 * 8 * 25, "Ghép (125 × 8) × (4 × 25) = 1 000 × 100."),
      num("Tính nhanh: 2 × 3 × 5 × 4 × 25 = ?", 2 * 3 * 5 * 4 * 25),
      num("Tính nhanh: 1 × 2 × 3 × 0 × 5 × 6 = ?", 0, "Tích có một thừa số bằng 0 thì bằng 0."),
      num("Tính nhanh: 25 × 4 × 5 × 2 × 17 = ?", 25 * 4 * 5 * 2 * 17),
      num("Tích của hai số là 36. Nếu gấp thừa số thứ nhất lên 3 lần và giảm thừa số thứ hai đi 2 lần thì tích mới là bao nhiêu?", 36 * 3 / 2),
    ],
  },

  // Bài 41. Nhân, chia với 10, 100, 1 000,...
  41: {
    intro:
      "Muốn nhân một số với 10, 100, 1 000,... ta viết thêm vào bên phải số đó một, hai, ba,... chữ số 0. Muốn chia số tròn chục, tròn trăm, tròn nghìn,... cho 10, 100, 1 000,... ta bỏ bớt đi một, hai, ba,... chữ số 0 ở bên phải số đó.",
    questions: [
      num("4 253 × 100 = ?", 4253 * 100),
      num("70 × 1 000 = ?", 70 * 1000),
      num("380 000 : 100 = ?", 380000 / 100),
      num("62 000 000 : 1 000 = ?", 62000000 / 1000),
      num("7 tấn = ? kg", 7000),
      num("52 000 kg = ? tấn", 52),
      num("60 000 cm² = ? dm²", 600),
      num("Tính: 450 × 20 = ?", 450 * 20),
      num("Tính: 30 × 400 = ?", 30 * 400),
      num("Mỗi hộp có 100 chiếc bút. 245 hộp như vậy có tất cả bao nhiêu chiếc bút?", 245 * 100, undefined, "chiếc"),
      num("Có 36 000 viên bi xếp đều vào các hộp, mỗi hộp 100 viên. Xếp được bao nhiêu hộp?", 36000 / 100, undefined, "hộp"),
      mc("Phép tính nào dưới đây đúng?", "5 800 : 100 = 58", ["5 800 : 100 = 580", "5 800 : 100 = 5 800 000", "5 800 : 100 = 5,8"]),
      num("Số ?  ? × 1 000 = 9 000 000", 9000),
      num("Số ?  ? : 100 = 4 500", 450000),
      tf("30 × 70 = 2 100", true),
    ],
    adv: [
      num("Tính nhanh: 25 × 400 = ?", 25 * 400, "25 × 4 = 100, rồi nhân thêm 100."),
      num("Tính: 2 800 000 : (7 × 100) = ?", 2800000 / (7 * 100)),
      num("Một số khi chia cho 100 thì được thương là 12 và số dư là 35. Số đó là:", 12 * 100 + 35),
      num("Số 1 000 000 gấp số 1 000 bao nhiêu lần?", 1000),
      num("Tính nhanh: 5 × 200 × 10 × 3 = ?", 5 * 200 * 10 * 3),
    ],
  },
};
