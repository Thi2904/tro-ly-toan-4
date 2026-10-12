import type { Question } from "../types";
import { mc, num, tf, n } from "./helpers";

type L = { intro: string; questions: Question[] };

const add = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} + ${n(b)} = ?`, a + b);
const sub = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} – ${n(b)} = ?`, a - b);
const cmp = (left: string, right: string, l: number, r: number) =>
  mc(`Chọn dấu thích hợp: ${left} ? ${right}`, l > r ? ">" : l < r ? "<" : "=", [">", "<", "="].filter((s) => s !== (l > r ? ">" : l < r ? "<" : "=")));

export const ch7: Record<number, L> = {
  // Bài 33. Ôn tập các số đến lớp triệu
  33: {
    intro: "Ôn lại cách đọc, viết, phân tích, so sánh và làm tròn các số đến lớp triệu.",
    questions: [
      mc("Các chữ số thuộc lớp nghìn của số 517 906 384 là:", "9, 0, 6", ["5, 1, 7", "3, 8, 4", "1, 7, 9"]),
      mc(
        "Số 517 906 384 đọc là:",
        "năm trăm mười bảy triệu chín trăm linh sáu nghìn ba trăm tám mươi tư",
        ["năm trăm mười bảy nghìn chín trăm linh sáu triệu ba trăm tám mươi tư", "năm mươi mốt triệu bảy trăm chín mươi nghìn sáu trăm ba mươi tư", "năm trăm mười bảy triệu chín mươi sáu nghìn ba trăm tám mươi tư"],
      ),
      num("Số ?  50 000 + 6 000 + 300 + 20 + ? = 56 327", 7),
      num("Số ?  800 000 + 2 000 + ? + 40 + 5 = 802 145", 100),
      num("Số ?  3 000 000 + 700 000 + 5 000 + ? = 3 705 090", 90),
      num("Giá trị của chữ số 4 trong số 46 875 là bao nhiêu?", 40000),
      num("Giá trị của chữ số 4 trong số 4 297 603 là bao nhiêu?", 4000000),
      num("Giá trị của chữ số 7 trong số 703 410 là bao nhiêu?", 700000),
      num("Giá trị của chữ số 7 trong số 4 297 603 là bao nhiêu?", 7000),
      cmp("98 979", "701 352", 98979, 701352),
      cmp("651 410", "639 837", 651410, 639837),
      cmp("200 895", "200 000 + 900 + 5", 200895, 200905),
      mc("Số lượt khách du lịch đến Việt Nam năm 2019: Cam-pu-chia 227 900; Lào 98 500; Thái Lan 509 800; Ma-lai-xi-a 606 200. Nước nào có nhiều khách nhất?", "Ma-lai-xi-a", ["Thái Lan", "Cam-pu-chia", "Lào"]),
      mc("Cũng theo số liệu trên, nước nào có số lượt khách đến Việt Nam ít nhất?", "Lào", ["Cam-pu-chia", "Thái Lan", "Ma-lai-xi-a"]),
      num("Số học sinh tiểu học cả nước là 8 891 344 học sinh. Làm tròn số đó đến hàng trăm.", 8891300, "Chữ số hàng chục là 4 (bé hơn 5) nên làm tròn xuống."),
      num("Làm tròn số 8 891 344 đến hàng trăm nghìn.", 8900000),
      num("Cho một số có ba chữ số. Khi viết thêm chữ số 2 vào trước số đó thì được số mới có bốn chữ số lớn hơn số đã cho bao nhiêu đơn vị?", 2000, "Thêm chữ số 2 vào trước số có ba chữ số thì được thêm 2 nghìn = 2 000."),
      num(
        "Bốn máy tính có giá: 21 900 000; 17 800 000; 22 300 000; 18 700 000 (đồng). Biết máy C rẻ nhất, máy B đắt hơn máy A nhưng rẻ hơn máy D. Giá của máy D là bao nhiêu đồng?",
        22300000,
        "C = 17 800 000; A = 18 700 000; B = 21 900 000; D = 22 300 000.",
        "đồng",
      ),
    ],
  },

  // Bài 34. Ôn tập phép cộng, phép trừ
  34: {
    intro: "Ôn lại phép cộng, phép trừ các số nhiều chữ số, tính nhẩm, tính chất giao hoán – kết hợp và giải toán lời văn.",
    questions: [
      num("Tính nhẩm: 70 000 + 60 000 = ?", 70000 + 60000),
      num("Tính nhẩm: 160 000 – 90 000 = ?", 160000 - 90000),
      num("Tính nhẩm: 500 000 + 700 000 = ?", 500000 + 700000),
      num("Tính nhẩm: 150 000 – 70 000 + 40 000 = ?", 150000 - 70000 + 40000),
      num("Tính nhẩm: 8 000 000 + 4 000 000 = ?", 12000000),
      num("Tính nhẩm: 130 000 000 – 60 000 000 + 50 000 000 = ?", 130000000 - 60000000 + 50000000),
      add(9658, 6290),
      add(56204, 74539),
      sub(14709, 5234),
      sub(159570, 81625),
      add(370528, 85706),
      sub(694851, 365470),
      mc("Biểu thức nào có giá trị lớn nhất? (A) 90 000 + 30 000 + 5 473; (B) 387 568 – (200 000 – 40 000); (C) 456 250 + 200 000 – 500 000; (D) 210 000 – 90 000 + 4 975", "B", ["A", "C", "D"], "A = 125 473; B = 227 568; C = 156 250; D = 124 975."),
      mc("Biểu thức nào có giá trị bé nhất? (A) 90 000 + 30 000 + 5 473; (B) 387 568 – (200 000 – 40 000); (C) 456 250 + 200 000 – 500 000; (D) 210 000 – 90 000 + 4 975", "D", ["A", "B", "C"], "A = 125 473; B = 227 568; C = 156 250; D = 124 975."),
      num(
        "Bố mua cho Nam bộ quần áo đồng phục, đôi giày và đôi tất hết 314 000 đồng. Tổng tiền bộ quần áo đồng phục và đôi giày là 306 000 đồng. Đôi giày nhiều hơn đôi tất 107 000 đồng. Giá tiền đôi giày là bao nhiêu đồng?",
        8000 + 107000,
        "Đôi tất: 314 000 – 306 000 = 8 000. Đôi giày: 8 000 + 107 000 = 115 000.",
        "đồng",
      ),
      num("Mai mua một đôi dép (70 000 đồng) và một hộp đồ chơi xếp hình (125 000 đồng), đưa cô bán hàng tờ 200 000 đồng. Cô phải trả lại Mai bao nhiêu đồng?", 200000 - (70000 + 125000), undefined, "đồng"),
      num("Tính bằng cách thuận tiện: 16 370 + 6 090 + 2 530 + 4 010 = ?", 16370 + 6090 + 2530 + 4010),
      tf("80 000 + 40 000 = 100 000", false, "80 000 + 40 000 = 120 000."),
      tf("9 000 000 + 3 000 000 – 2 000 000 = 10 000 000", true),
      num(
        "Tuyến đường sắt Hà Nội – Đà Nẵng dài 791 km. Đoạn Hà Nội – Đồng Hới dài hơn đoạn Đồng Hới – Đà Nẵng là 253 km. Đoạn Đồng Hới – Đà Nẵng dài bao nhiêu ki-lô-mét?",
        (791 - 253) / 2,
        "(791 – 253) : 2 = 269 km.",
        "km",
      ),
    ],
  },

  // Bài 35. Ôn tập hình học
  35: {
    intro: "Ôn lại góc nhọn, góc vuông, góc tù, góc bẹt; hai đường thẳng vuông góc, song song; hình bình hành, hình thoi.",
    questions: [
      mc("[[clock:8:00]]\nLúc 8 giờ, hai kim của đồng hồ tạo thành góc:", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[clock:1:00]]\nLúc 1 giờ, hai kim của đồng hồ tạo thành góc:", "góc nhọn", ["góc tù", "góc vuông", "góc bẹt"]),
      mc("[[clock:3:00]]\nLúc 3 giờ, hai kim của đồng hồ tạo thành góc:", "góc vuông", ["góc nhọn", "góc tù", "góc bẹt"]),
      mc("[[clock:6:00]]\nLúc 6 giờ, hai kim của đồng hồ tạo thành góc:", "góc bẹt", ["góc nhọn", "góc vuông", "góc tù"]),
      mc(
        "Tứ giác ABCD có góc đỉnh A và góc đỉnh C là các góc vuông. Cặp cạnh nào vuông góc với nhau?",
        "AB và AD",
        ["AB và BC", "AD và DC", "AB và CD"],
        "Góc đỉnh A vuông nên AB ⟂ AD.",
      ),
      mc("Hình nào dưới đây vừa có cặp cạnh song song, vừa có cặp cạnh vuông góc?", "hình chữ nhật", ["hình bình hành không có góc vuông", "hình thoi không có góc vuông", "hình tam giác thường"]),
      num("Hình bình hành ABCD có AB = 5 cm, AD = 3 cm. Cạnh BC dài bao nhiêu xăng-ti-mét?", 3, undefined, "cm"),
      num("Hình bình hành ABCD có AB = 5 cm, AD = 3 cm. Cạnh DC dài bao nhiêu xăng-ti-mét?", 5, undefined, "cm"),
      num("Hình thoi MNPQ có cạnh MN = 4 cm. Cạnh NP dài bao nhiêu xăng-ti-mét?", 4, "Hình thoi có bốn cạnh bằng nhau.", "cm"),
      num("Hình thoi MNPQ có cạnh MN = 4 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 16, undefined, "cm"),
      mc("[[angle:60]]\nGóc trong hình có số đo là:", "60°", ["30°", "90°", "120°"]),
      mc("[[angle:120]]\nGóc trong hình có số đo là:", "120°", ["60°", "90°", "180°"]),
      tf("Hai đường thẳng song song không bao giờ cắt nhau.", true),
      tf("Hình bình hành có bốn góc vuông.", false, "Hình bình hành không nhất thiết có góc vuông."),
    ],
  },

  // Bài 36. Ôn tập đo lường
  36: {
    intro: "1 yến = 10 kg; 1 tạ = 100 kg; 1 tấn = 1 000 kg. 1 cm² = 100 mm²; 1 dm² = 100 cm²; 1 m² = 100 dm². 1 phút = 60 giây; 1 thế kỉ = 100 năm.",
    questions: [
      num("1 tạ = ? yến", 10),
      num("1 tấn = ? tạ", 10),
      num("3 tạ 60 kg = ? kg", 360),
      num("4 tấn = ? kg", 4000),
      num("1 tấn 7 tạ = ? tạ", 17),
      num("5 yến + 7 yến = ? yến", 12),
      num("43 tấn – 25 tấn = ? tấn", 18),
      num("3 tạ × 5 = ? tạ", 15),
      num("15 tạ : 3 = ? tạ", 5),
      cmp("5 tạ 4 yến", "538 kg", 540, 538),
      cmp("2 tấn 2 tạ", "2 220 kg", 2200, 2220),
      num("Con bê nặng 1 tạ 40 kg, con bò nặng hơn con bê 220 kg. Con bò và con bê nặng tất cả bao nhiêu ki-lô-gam?", 140 + (140 + 220), "Con bò: 140 + 220 = 360 kg. Cả hai: 140 + 360 = 500 kg.", "kg"),
      num("Con bò và con bê nặng tất cả 500 kg. Một con voi nặng gấp đôi số đó. Con voi nặng mấy tấn?", 1, "500 × 2 = 1 000 kg = 1 tấn.", "tấn"),
      num("1 m² = ? cm²", 10000),
      num("1 dm² 6 cm² = ? cm²", 106),
      num("3 m² = ? dm²", 300),
      num("1 m² 5 dm² = ? dm²", 105),
      num("1 phút 30 giây = ? giây", 90),
      num("36 cm² – 17 cm² = ? cm²", 19),
      num("30 dm² : 5 = ? dm²", 6),
      num("Mảnh đất trồng rau hình chữ nhật có chiều dài 15 m, chiều dài hơn chiều rộng 6 m. Diện tích mảnh đất là bao nhiêu mét vuông?", 15 * (15 - 6), "Chiều rộng: 15 – 6 = 9 m. Diện tích: 15 × 9 = 135 m².", "m²"),
    ],
  },

  // Bài 37. Ôn tập chung
  37: {
    intro: "Ôn tập tổng hợp học kì 1: số và phép tính, đo lường, hình học và giải toán có lời văn.",
    questions: [
      num("Viết số gồm 1 triệu, 6 trăm nghìn, 2 chục nghìn, 1 nghìn, 4 trăm, 9 chục và 4 đơn vị.", 1621494),
      mc("Số 381 005 đọc là:", "ba trăm tám mươi mốt nghìn không trăm linh năm", ["ba trăm tám mươi nghìn một trăm linh năm", "ba mươi tám nghìn một trăm linh năm", "ba trăm tám mươi mốt nghìn năm"]),
      mc("Chữ số 7 trong số 1 571 210 thuộc hàng nào, lớp nào?", "hàng chục nghìn, lớp nghìn", ["hàng nghìn, lớp nghìn", "hàng trăm nghìn, lớp nghìn", "hàng triệu, lớp triệu"]),
      mc("Chữ số 7 trong số 7 042 500 thuộc hàng nào, lớp nào?", "hàng triệu, lớp triệu", ["hàng trăm nghìn, lớp nghìn", "hàng chục triệu, lớp triệu", "hàng trăm, lớp đơn vị"]),
      num("Giá trị của chữ số 6 trong số 1 263 015 là bao nhiêu?", 60000),
      num("Giá trị của chữ số 6 trong số 276 310 là bao nhiêu?", 6000),
      mc("Sắp xếp các số 5 612; 6 521; 6 251; 5 216 theo thứ tự từ bé đến lớn. Số đứng thứ hai là:", 5612, [5216, 6251, 6521]),
      mc("Sắp xếp các số 12 509; 21 025; 9 999; 20 152 theo thứ tự từ lớn đến bé. Số đứng thứ hai là:", 20152, [21025, 12509, 9999]),
      add(3675, 2918),
      add(40613, 47519),
      sub(7641, 2815),
      sub(62748, 35261),
      num("Đặt tính rồi tính: 23 152 × 4 = ?", 23152 * 4),
      num("Đặt tính rồi tính: 6 071 × 3 = ?", 6071 * 3),
      num("Đặt tính rồi tính: 24 185 : 5 = ?", 24185 / 5),
      num("Đặt tính rồi tính: 5 208 : 4 = ?", 5208 / 4),
      num("Khu vườn ươm hình chữ nhật có chiều rộng 45 m, chiều dài gấp 2 lần chiều rộng. Người ta làm hàng rào xung quanh và để cửa vào rộng 4 m. Hàng rào dài bao nhiêu mét?", (45 + 90) * 2 - 4, "Chiều dài: 45 × 2 = 90 m. Chu vi: (45 + 90) × 2 = 270 m. Hàng rào: 270 – 4 = 266 m.", "m"),
      mc("Hình nào có diện tích lớn nhất? (A) 1 m² 2 cm²; (B) 100 dm² 400 mm²; (C) 1 m² 300 mm²", "B", ["A", "C"], "A = 10 002 cm²; B = 10 004 cm²; C = 10 003 cm²."),
      mc("Ô tô nào chở nhẹ nhất? (A) 270 yến; (B) 2 tấn 5 tạ; (C) 25 tạ 7 yến", "B", ["A", "C"], "A = 2 700 kg; B = 2 500 kg; C = 2 570 kg."),
      num(
        "Trường của Mai có 120 học sinh học bơi và 60 học sinh học bóng đá, chia đều số học sinh của mỗi môn vào 5 lớp. Một lớp học bơi nhiều hơn một lớp học bóng đá bao nhiêu học sinh?",
        120 / 5 - 60 / 5,
        "Lớp bơi: 120 : 5 = 24; lớp bóng đá: 60 : 5 = 12; 24 – 12 = 12.",
        "học sinh",
      ),
      num("Một cánh đồng muối thu hoạch 5 tấn muối, chở bằng hai ô tô. Ô tô thứ nhất chở nhiều hơn ô tô thứ hai 4 tạ muối. Ô tô thứ nhất chở bao nhiêu tạ muối?", (50 + 4) / 2, "5 tấn = 50 tạ. Ô tô thứ nhất: (50 + 4) : 2 = 27 tạ.", "tạ"),
      cmp("1 m² 56 dm²", "27 dm² + 89 dm²", 156, 116),
      cmp("4 tấn 500 kg", "9 000 kg : 2", 4500, 4500),
      num("Tính giá trị của biểu thức: 78 060 : (10 – 7) + 300 045 = ?", 78060 / 3 + 300045),
      num("Tính giá trị của biểu thức: 26 000 + 9 015 × 6 = ?", 26000 + 9015 * 6),
      num("Người ta trồng tổng cộng 760 cây ổi và cây chuối. Số cây ổi nhiều hơn số cây chuối 40 cây. Có bao nhiêu cây chuối?", (760 - 40) / 2, undefined, "cây"),
    ],
  },
};
