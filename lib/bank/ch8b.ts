import type { Question } from "../types";
import { mc, num, tf, n } from "./helpers";

type L = { intro: string; questions: Question[] };

const mul = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} × ${b} = ?`, a * b);
const divq = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} : ${b} = ? (chỉ ghi thương)`, Math.floor(a / b));

export const ch8b: Record<number, L> = {
  // Bài 42. Tính chất phân phối của phép nhân đối với phép cộng
  42: {
    intro:
      "a × (b + c) = a × b + a × c   và   (a + b) × c = a × c + b × c. Khi nhân một số với một tổng, ta có thể nhân số đó với từng số hạng của tổng rồi cộng các kết quả lại.",
    questions: [
      num("Một đội đồng diễn có 3 hàng mặc áo đỏ và 2 hàng mặc áo vàng, mỗi hàng 15 người. Đội có tất cả bao nhiêu người?", 15 * (3 + 2), "15 × (3 + 2) = 15 × 5 = 75.", "người"),
      num("Tính: 43 × (2 + 6) = ?", 43 * (2 + 6)),
      num("Tính: (15 + 21) × 7 = ?", (15 + 21) * 7),
      num("Với m = 4, n = 5, p = 3, tính giá trị của biểu thức m × (n + p).", 4 * (5 + 3)),
      num("Với m = 4, n = 5, p = 3, tính giá trị của biểu thức (m + n) × p.", (4 + 5) * 3),
      mc("Với m = 4, n = 5, p = 3, biểu thức nào có giá trị bằng m × (n + p)?", "m × n + m × p", ["(m + n) × p", "m × p + n × p", "m + n × p"], "Cả hai đều bằng 32."),
      num("Khối lớp Bốn có 2 lớp học vẽ, khối lớp Ba có 3 lớp học vẽ, mỗi lớp có 12 bạn. Cả hai khối có bao nhiêu bạn học vẽ?", (2 + 3) * 12, undefined, "bạn"),
      num("Tính bằng cách thuận tiện: 61 × 4 + 61 × 5 = ?", 61 * 4 + 61 * 5),
      num("Tính bằng cách thuận tiện: 67 × 3 + 67 × 7 = ?", 67 * 3 + 67 * 7),
      num("Tính bằng cách thuận tiện: 45 × 6 + 45 × 4 = ?", 45 * 6 + 45 * 4),
      num("Tính bằng cách thuận tiện: 27 × 6 + 73 × 6 = ?", 27 * 6 + 73 * 6),
      num("Tính: 321 × 3 + 321 × 5 + 321 × 2 = ?", 321 * 3 + 321 * 5 + 321 * 2),
      num("Đợt một chuyển được 3 chuyến, mỗi chuyến 44 thùng hàng. Đợt hai chuyển được 3 chuyến, mỗi chuyến 56 thùng hàng. Cả hai đợt chuyển được bao nhiêu thùng hàng?", 3 * 44 + 3 * 56, "3 × (44 + 56) = 300.", "thùng"),
      num("Tính: 23 × (7 – 4) = ?", 23 * (7 - 4)),
      num("Tính: (8 – 3) × 9 = ?", (8 - 3) * 9),
      num("Tính bằng cách thuận tiện: 48 × 9 – 48 × 8 = ?", 48 * 9 - 48 * 8),
      num("Tính bằng cách thuận tiện: 156 × 7 – 156 × 2 = ?", 156 * 7 - 156 * 2),
      num("Một cửa hàng có 9 tấm vải hoa, mỗi tấm dài 36 m. Cửa hàng đã bán 5 tấm. Hỏi còn lại bao nhiêu mét vải hoa?", (9 - 5) * 36, undefined, "m"),
    ],
  },

  // Bài 43. Nhân với số có hai chữ số
  43: {
    intro:
      "Nhân với số có hai chữ số: nhân với chữ số hàng đơn vị được tích riêng thứ nhất; nhân với chữ số hàng chục được tích riêng thứ hai (viết lùi sang trái một cột); cộng hai tích riêng.",
    questions: [
      mul(34, 12),
      mul(87, 23),
      mul(134, 32),
      mul(2021, 36),
      mul(24, 16),
      mul(45, 13),
      mul(34, 47),
      mul(62, 19),
      mul(425, 34),
      num("Tính: 24 × 30 = ?", 24 * 30),
      num("Tính: 72 × 60 = ?", 72 * 60),
      num("Tính: 130 × 20 = ?", 130 * 20),
      num("Tính: 2 300 × 50 = ?", 2300 * 50),
      num("Cửa hàng có 18 bao ngô, mỗi bao cân nặng 35 kg. Cửa hàng có tất cả bao nhiêu ki-lô-gam ngô?", 18 * 35, undefined, "kg"),
      num("Hình chữ nhật có chiều dài a = 25 m, chiều rộng b = 18 m. Diện tích S = a × b là bao nhiêu mét vuông?", 25 * 18, undefined, "m²"),
      num("Một cửa hàng bán được 12 kg xoài và 20 kg cam. 1 kg xoài giá 30 000 đồng, 1 kg cam giá 25 000 đồng. Cửa hàng bán xoài và cam được bao nhiêu đồng?", 12 * 30000 + 20 * 25000, "12 × 30 000 = 360 000; 20 × 25 000 = 500 000; tổng 860 000.", "đồng"),
      num("Số ?  62 → × 11 → ? → – 253 → ?  (kết quả cuối cùng là bao nhiêu?)", 62 * 11 - 253),
      num("Hộp A đựng 18 gói kẹo chanh, mỗi gói 25 cái. Hộp B đựng 22 gói kẹo dừa, mỗi gói 20 cái. Số kẹo ở hai hộp hơn kém nhau bao nhiêu cái?", 22 * 20 - 18 * 25, "Hộp A: 450 cái; hộp B: 440 cái; hơn kém 10 cái.", "cái"),
      tf("27 × 11 = 297", true),
      num("Khi nhân một số với 11, Nam đã đặt hai tích riêng thẳng cột nên kết quả là 36. Số đó là số nào?", 18, "Hai tích riêng đều bằng số đó nên số đó là 36 : 2 = 18."),
    ],
  },

  // Bài 44. Chia cho số có hai chữ số
  44: {
    intro:
      "Chia cho số có hai chữ số: chia từng bước từ trái sang phải; ước lượng thương rồi nhân, trừ. Số dư luôn bé hơn số chia. Khi chia cho số tròn chục, tròn trăm có thể cùng xoá bớt các chữ số 0 ở tận cùng của số bị chia và số chia.",
    questions: [
      divq(216, 12),
      num("218 : 18 = 12 (dư mấy)?", 2),
      divq(322, 14),
      divq(325, 14),
      num("325 : 14 có số dư là bao nhiêu?", 325 % 14),
      divq(1554, 37),
      divq(2294, 62),
      divq(2625, 75),
      divq(27360, 36),
      divq(4896, 12),
      num("Tính: 450 : 90 = ?", 450 / 90),
      num("Tính: 45 000 : 900 = ?", 45000 / 900),
      num("Tính: 62 700 : 300 = ?", 62700 / 300),
      num("Trong một hội trường, người ta xếp 384 cái ghế vào các dãy, mỗi dãy 24 ghế. Xếp được bao nhiêu dãy ghế?", 384 / 24, undefined, "dãy"),
      num("Một sân bóng đá hình chữ nhật có diện tích 7 140 m², chiều rộng 68 m. Chiều dài sân bóng là bao nhiêu mét?", 7140 / 68),
      num("Một sân bóng đá hình chữ nhật có diện tích 7 140 m², chiều rộng 68 m. Chu vi sân bóng là bao nhiêu mét?", (7140 / 68 + 68) * 2, "Chiều dài: 7 140 : 68 = 105 m. Chu vi: (105 + 68) × 2 = 346 m.", "m"),
      num("Một đội đồng diễn xếp thành 28 hàng, mỗi hàng 15 người. Nếu xếp mỗi hàng 20 người thì xếp được bao nhiêu hàng?", (28 * 15) / 20, undefined, "hàng"),
      num("Mỗi bánh xe đạp cần 36 nan hoa. Với 2 115 nan hoa, lắp được nhiều nhất cho bao nhiêu chiếc xe đạp hai bánh?", Math.floor(2115 / 72), "Mỗi xe cần 36 × 2 = 72 nan hoa; 2 115 : 72 = 29 (dư 27).", "xe"),
      num("Thực hiện phép chia 2 920 : 62. Số dư là bao nhiêu?", 2920 % 62),
      num("Số ?  60 : (2 × 5) = ?", 60 / 10),
    ],
  },

  // Bài 45. Thực hành và trải nghiệm ước lượng trong tính toán
  45: {
    intro:
      "Ước lượng kết quả phép tính: làm tròn các số đến hàng thích hợp (chục, trăm, nghìn, chục nghìn) rồi tính nhẩm với các số đã làm tròn.",
    questions: [
      mc("Ước lượng 7 960 + 1 980 bằng cách làm tròn đến hàng nghìn, kết quả khoảng:", "10 nghìn", ["8 nghìn", "9 nghìn", "12 nghìn"], "8 000 + 2 000 = 10 000."),
      mc("Ước lượng 5 985 – 3 897 bằng cách làm tròn đến hàng nghìn, kết quả khoảng:", "2 nghìn", ["1 nghìn", "3 nghìn", "9 nghìn"], "6 000 – 4 000 = 2 000."),
      mc("Ước lượng 19 870 + 30 480 bằng cách làm tròn đến hàng chục nghìn, kết quả khoảng:", "5 chục nghìn", ["4 chục nghìn", "6 chục nghìn", "3 chục nghìn"], "20 000 + 30 000 = 50 000."),
      mc("Ước lượng 50 217 – 21 052 bằng cách làm tròn đến hàng chục nghìn, kết quả khoảng:", "3 chục nghìn", ["2 chục nghìn", "4 chục nghìn", "7 chục nghìn"], "50 000 – 20 000 = 30 000."),
      num("Ngày hôm qua, công viên có 5 978 lượt khách buổi sáng và 2 967 lượt khách buổi chiều. Làm tròn đến hàng nghìn rồi ước lượng tổng số lượt khách trong cả ngày.", 9000),
      num("Ước lượng bằng cách làm tròn đến hàng chục: 39 × 19 khoảng bao nhiêu? (làm tròn 39 thành 40, 19 thành 20)", 800),
      tf("Khẳng định sau đúng hay sai: 89 × 26 > 2 700 (gợi ý: 90 × 30 = 2 700).", false, "89 × 26 bé hơn 90 × 30 = 2 700."),
      tf("Khẳng định sau đúng hay sai: 9 170 : 30 < 300 (gợi ý: 9 000 : 30 = 300).", false, "9 170 : 30 lớn hơn 9 000 : 30 = 300."),
      tf("3 970 + 4 980 = 9 850", false, "3 970 + 4 980 = 8 950."),
      tf("15 × 4 = 60", true),
      tf("821 : 39 = 19", false, "39 × 19 = 741; 821 : 39 = 21 (dư 2)."),
      tf("51 × 103 = 4 973", false, "51 × 103 = 5 253."),
      tf("8 000 : 2 = 4 000", true),
      tf("4 980 + 2 970 = 8 350", false, "4 980 + 2 970 = 7 950."),
    ],
  },
};
