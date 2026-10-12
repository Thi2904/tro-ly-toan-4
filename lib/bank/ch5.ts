import type { Question } from "../types";
import { mc, num, tf, n } from "./helpers";

type L = { intro: string; questions: Question[] };

const add = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} + ${n(b)} = ?`, a + b);
const sub = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} – ${n(b)} = ?`, a - b);

export const ch5: Record<number, L> = {
  // Bài 22. Phép cộng các số có nhiều chữ số
  22: {
    intro:
      "Muốn cộng các số có nhiều chữ số: đặt tính sao cho các chữ số cùng hàng thẳng cột, rồi cộng từ phải sang trái (nhớ khi tổng ở một hàng từ 10 trở lên).",
    questions: [
      add(180510, 210365),
      add(327456, 190835),
      add(3246, 4721),
      add(47282, 2514),
      add(139820, 240134),
      add(482824, 420546),
      add(5839, 712),
      add(548393, 28110),
      add(319256, 378028),
      mc("Xô A: 11 000 + 3 000 ml; xô B: 9 360 + 5 450 ml; xô C: 10 072 + 3 580 ml. Xô nào chứa nhiều sữa bò nhất?", "Xô B", ["Xô A", "Xô C"], "A: 14 000; B: 14 810; C: 13 652."),
      mc("Trong ba xô trên, xô nào chứa ít sữa bò nhất?", "Xô C", ["Xô A", "Xô B"], "A: 14 000; B: 14 810; C: 13 652."),
      num(
        "Trong 1 phút, vệ tinh màu xanh bay được quãng đường dài 474 000 m, vệ tinh màu đỏ bay được quãng đường dài hơn vệ tinh màu xanh là 201 km. Hỏi trong 1 phút, vệ tinh màu đỏ bay được bao nhiêu mét?",
        474000 + 201000,
        "201 km = 201 000 m; 474 000 + 201 000 = 675 000 m.",
        "m",
      ),
      mc(
        "Với 100 000 đồng, mua cặp sách (90 000 đồng) thì còn mua thêm được đồ dùng nào? (Bút máy 24 600 đồng; vở học sinh 9 500 đồng; bộ thước kẻ 15 000 đồng)",
        "Vở học sinh",
        ["Bút máy", "Bộ thước kẻ"],
        "Còn lại 10 000 đồng, chỉ đủ mua vở học sinh (9 500 đồng).",
      ),
    ],
  },

  // Bài 23. Phép trừ các số có nhiều chữ số
  23: {
    intro:
      "Muốn trừ các số có nhiều chữ số: đặt tính thẳng cột, trừ từ phải sang trái; nếu chữ số ở số bị trừ bé hơn chữ số ở số trừ thì mượn 1 chục ở hàng bên cạnh (nhớ lại khi trừ ở hàng kế tiếp).",
    questions: [
      sub(438589, 235072),
      sub(648390, 382547),
      sub(36724, 3291),
      sub(637891, 412520),
      sub(895332, 282429),
      num("Muỗi đập cánh khoảng 180 000 lần trong 5 phút, ong đập cánh khoảng 60 000 lần. Muỗi đập cánh nhiều hơn ong bao nhiêu lần?", 180000 - 60000, undefined, "lần"),
      num("Khoang chứa nhiên liệu của máy bay xanh có 240 373 l, của máy bay hồng có 25 350 l. Khoang của máy bay xanh nhiều hơn bao nhiêu lít?", 240373 - 25350, undefined, "lít"),
      num(
        "Tiền vé của bốn bạn Mai, Nam, Việt và Rô-bốt là 320 000 đồng, tiền vé của Mi là 50 000 đồng. Rô-bốt đưa tờ 500 000 đồng. Người bán vé phải trả lại bao nhiêu đồng?",
        500000 - (320000 + 50000),
        "Tiền vé cả năm bạn: 320 000 + 50 000 = 370 000. Trả lại: 500 000 – 370 000 = 130 000.",
        "đồng",
      ),
      num("Số bị trừ 538 239, số trừ 27 018. Hiệu là bao nhiêu?", 538239 - 27018),
      num("Số bị trừ 347 287, số trừ 20 026. Hiệu là bao nhiêu?", 347287 - 20026),
      num("Số bị trừ 432 000, hiệu 231 000. Số trừ là bao nhiêu?", 432000 - 231000),
      num("Số trừ 227 000, hiệu 452 000. Số bị trừ là bao nhiêu?", 227000 + 452000),
      num("Xoá đi một chữ số bất kì của số 2 130 574 để được số có sáu chữ số. Số lớn nhất có thể nhận được là số nào?", 230574),
      num("Xoá đi một chữ số bất kì của số 2 130 574 để được số có sáu chữ số. Số bé nhất có thể nhận được là số nào?", 130574),
    ],
  },

  // Bài 24. Tính chất giao hoán và kết hợp của phép cộng
  24: {
    intro:
      "Tính chất giao hoán: a + b = b + a. Tính chất kết hợp: (a + b) + c = a + (b + c). Dùng các tính chất này để tính thuận tiện: nhóm các số có tổng tròn chục, tròn trăm.",
    questions: [
      tf("Khi đổi chỗ các số hạng trong một tổng thì tổng không thay đổi.", true),
      num("Biết 450 + 279 = 729. Vậy 279 + 450 = ?", 729),
      num("Biết 7 142 + 462 = 7 604. Vậy 462 + 7 142 = ?", 7604),
      num("Số ?  746 + ? = 487 + 746", 487),
      num("Số ?  26 + c + 74 = (26 + ?) + c", 74),
      num("Tính bằng cách thuận tiện: 30 + 192 + 70 = ?", 30 + 192 + 70),
      num("Tính bằng cách thuận tiện: 75 + 219 + 25 = ?", 75 + 219 + 25),
      num("Tính bằng cách thuận tiện: 425 + 199 + 175 = ?", 425 + 199 + 175),
      num("Tính bằng cách thuận tiện: 68 + 207 + 3 = ?", 68 + 207 + 3),
      num("Tính bằng cách thuận tiện: 372 + 290 + 10 + 28 = ?", 372 + 290 + 10 + 28),
      num("Tính bằng cách thuận tiện: 12 + 14 + 16 + 18 = ?", 12 + 14 + 16 + 18),
      num("Tính giá trị của biểu thức (a + b) + c với a = 1 975, b = 1 991 và c = 2 025.", 1975 + 1991 + 2025),
      num("Tính giá trị của biểu thức a + (b + 5) với a = 15 và b = 7.", 15 + (7 + 5)),
      num(
        "Từ nhà Việt đến cổng làng 182 m, từ cổng làng đến cây cổ thụ 75 m, từ cây cổ thụ đến nhà Nam 218 m. Quãng đường Việt cần đi dài bao nhiêu mét?",
        182 + 75 + 218,
        undefined,
        "m",
      ),
    ],
  },

  // Bài 25. Tìm hai số biết tổng và hiệu của hai số đó
  25: {
    intro: "Số bé = (Tổng – Hiệu) : 2.   Số lớn = (Tổng + Hiệu) : 2.   Hoặc tìm số bé rồi lấy số bé + hiệu = số lớn.",
    questions: [
      mc("Muốn tìm số bé khi biết tổng và hiệu của hai số, ta tính:", "(Tổng – Hiệu) : 2", ["(Tổng + Hiệu) : 2", "Tổng : 2", "Tổng – Hiệu"]),
      num("Hai số có tổng là 25 và hiệu là 5. Số lớn là số nào?", (25 + 5) / 2),
      num("Hai số có tổng là 25 và hiệu là 5. Số bé là số nào?", (25 - 5) / 2),
      num("Mẹ bán 80 quả trứng vịt và trứng gà, trứng gà nhiều hơn trứng vịt 10 quả. Có bao nhiêu quả trứng gà?", (80 + 10) / 2, undefined, "quả"),
      num("Mẹ bán 80 quả trứng vịt và trứng gà, trứng gà nhiều hơn trứng vịt 10 quả. Có bao nhiêu quả trứng vịt?", (80 - 10) / 2, undefined, "quả"),
      num("Mai hơn em Mi 3 tuổi. Tổng số tuổi của hai chị em là 15 tuổi. Năm nay Mai mấy tuổi?", (15 + 3) / 2, undefined, "tuổi"),
      num("Một lớp học võ có 40 bạn, số bạn nữ ít hơn số bạn nam là 10 bạn. Lớp đó có bao nhiêu bạn nữ?", (40 - 10) / 2, undefined, "bạn"),
      num("Khối lớp Bốn có 175 học sinh đi tham quan làng nghề trong hai đợt, đợt thứ nhất nhiều hơn đợt thứ hai 15 bạn. Đợt thứ nhất có bao nhiêu học sinh?", (175 + 15) / 2, undefined, "học sinh"),
      num("Hình chữ nhật có chu vi 40 cm, chiều dài hơn chiều rộng 4 cm. Chiều dài là bao nhiêu xăng-ti-mét?", (20 + 4) / 2, "Nửa chu vi: 40 : 2 = 20 cm; chiều dài: (20 + 4) : 2 = 12 cm.", "cm"),
      num("Hình chữ nhật có chu vi 40 cm, chiều dài hơn chiều rộng 4 cm. Chiều rộng là bao nhiêu xăng-ti-mét?", (20 - 4) / 2, undefined, "cm"),
      num("Hai số lẻ liên tiếp có tổng là 20. Số lẻ lớn hơn là số nào?", 11, "Hai số lẻ liên tiếp hơn kém nhau 2 đơn vị: (20 + 2) : 2 = 11."),
      num("Mai và em Mi tiết kiệm được 80 000 đồng. Mai tiết kiệm nhiều hơn Mi 10 000 đồng. Mi tiết kiệm được bao nhiêu đồng?", (80000 - 10000) / 2, undefined, "đồng"),
      num("Mai và Mi cùng gấp được 154 con hạc giấy. Mai gấp nhiều hơn Mi 12 con. Mai gấp được bao nhiêu con?", (154 + 12) / 2, undefined, "con"),
      num("Hai trường tiểu học trồng được tất cả 450 cây. Trường Lê Lợi trồng ít hơn trường Kim Đồng 28 cây. Trường Lê Lợi trồng được bao nhiêu cây?", (450 - 28) / 2, undefined, "cây"),
    ],
  },

  // Bài 26. Luyện tập chung
  26: {
    intro: "Ôn lại phép cộng, phép trừ các số nhiều chữ số, tính chất của phép cộng và bài toán tìm hai số biết tổng và hiệu.",
    questions: [
      num("Tính nhẩm: 1 000 000 + 600 000 – 200 000 = ?", 1000000 + 600000 - 200000),
      num("Tính nhẩm: 200 000 + 400 000 – 30 000 = ?", 200000 + 400000 - 30000),
      num("Tính nhẩm: 20 000 000 + (4 000 + 400 000) = ?", 20000000 + (4000 + 400000)),
      num("Tính nhẩm: 1 000 000 + (90 000 – 70 000) = ?", 1000000 + (90000 - 70000)),
      tf("298 391 220 + 200 000 = 498 391 220", false, "298 391 220 + 200 000 = 298 591 220."),
      tf("8 685 920 – 685 920 = 8 000 000", true),
      tf("3 123 000 – 209 000 = 3 126 000", false, "3 123 000 – 209 000 = 2 914 000."),
      tf("83 881 329 + 109 452 = 83 990 781", true),
      sub(96271, 83738),
      sub(1039874, 902138),
      add(137736, 902138),
      num("Tính bằng cách thuận tiện: 73 833 + 3 992 – 3 833 = ?", 73833 + 3992 - 3833),
      num("Tính bằng cách thuận tiện: 85 600 + 2 500 – 5 600 = ?", 85600 + 2500 - 5600),
      num(
        "Một quỹ nhân ái: ngày thứ nhất nhận được 28 500 000 đồng, ngày thứ hai nhận được 47 250 000 đồng, ngày thứ ba nhận được 80 250 000 đồng. Cả ba ngày quỹ nhận được bao nhiêu đồng?",
        28500000 + 47250000 + 80250000,
        undefined,
        "đồng",
      ),
      num("Hoá đơn siêu thị: củ cải 12 000 đồng, sữa tươi 39 000 đồng, ngũ cốc 124 000 đồng. Tổng hoá đơn là bao nhiêu đồng?", 12000 + 39000 + 124000, undefined, "đồng"),
      num("Hoá đơn siêu thị: cà phê 72 500 đồng, kẹo 43 000 đồng, bộ ấm chén 452 500 đồng. Tổng hoá đơn là bao nhiêu đồng?", 72500 + 43000 + 452500, undefined, "đồng"),
    ],
  },
};
