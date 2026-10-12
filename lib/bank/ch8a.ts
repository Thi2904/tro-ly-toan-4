import type { Question } from "../types";
import { mc, num, tf, n } from "./helpers";

type L = { intro: string; questions: Question[] };

const mul = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} × ${b} = ?`, a * b);
const div = (a: number, b: number) => num(`Đặt tính rồi tính: ${n(a)} : ${b} = ? (chỉ ghi thương)`, Math.floor(a / b));

export const ch8a: Record<number, L> = {
  // Bài 38. Nhân với số có một chữ số
  38: {
    intro:
      "Nhân số có nhiều chữ số với số có một chữ số: đặt tính rồi nhân lần lượt từ phải sang trái, nhớ khi tích ở mỗi hàng từ 10 trở lên.",
    questions: [
      mul(160140, 7),
      mul(27283, 3),
      mul(40819, 5),
      mul(374519, 2),
      mul(48102, 5),
      mul(32419, 4),
      mul(172923, 3),
      tf("31 090 × 2 = 26 180", false, "31 090 × 2 = 62 180."),
      tf("250 000 × 3 = 650 000", false, "250 000 × 3 = 750 000."),
      tf("41 800 × 5 = 209 000", true),
      num("Bóng đèn trong nhà có tuổi thọ 12 250 giờ. Bóng đèn đường có tuổi thọ gấp 3 lần. Tuổi thọ của bóng đèn đường là bao nhiêu giờ?", 12250 * 3, undefined, "giờ"),
      mc("Rô-bốt có 200 000 đồng, mua 2 bộ cờ vua, mỗi bộ giá 80 000 đồng. Rô-bốt còn lại bao nhiêu tiền?", "40 000 đồng", ["20 000 đồng", "60 000 đồng", "120 000 đồng"]),
      num("Tính giá trị của biểu thức: 460 839 + 29 210 × 3 = ?", 460839 + 29210 * 3),
      num("Tính giá trị của biểu thức: 648 501 – 20 810 × 4 = ?", 648501 - 20810 * 4),
      num(
        "Rô-bốt đặt hạt thóc vào bàn cờ: ô thứ nhất 1 hạt, ô thứ hai 2 hạt, ô thứ ba 4 hạt, cứ như vậy số hạt ở ô sau gấp đôi ô trước. Ô thứ mười tám đặt 131 072 hạt. Ô thứ mười chín đặt bao nhiêu hạt thóc?",
        131072 * 2,
        undefined,
        "hạt",
      ),
    ],
  },

  // Bài 39. Chia cho số có một chữ số
  39: {
    intro:
      "Chia số có nhiều chữ số cho số có một chữ số: chia từng hàng từ trái sang phải; nếu còn dư thì hạ chữ số kế tiếp xuống để chia tiếp. Số dư luôn bé hơn số chia.",
    questions: [
      div(125730, 5),
      num("125 734 : 5 = 25 146 (dư mấy)?", 4),
      div(38295, 3),
      div(729316, 4),
      div(872905, 6),
      num("872 905 : 6 có số dư là bao nhiêu?", 872905 % 6),
      div(489325, 5),
      div(542827, 6),
      div(826391, 7),
      num("Thực hiện 32 024 : 7. Thương là bao nhiêu?", Math.floor(32024 / 7), "7 × 4 574 = 32 018; 32 024 – 32 018 = 6 (dư 6)."),
      num("Thực hiện 135 612 : 6. Thương là bao nhiêu?", 135612 / 6),
      num("Cô Lan có 150 000 đồng. Sau khi mua 3 kg xoài thì cô còn 15 000 đồng. Mỗi ki-lô-gam xoài giá bao nhiêu đồng?", (150000 - 15000) / 3, "Tiền mua xoài: 150 000 – 15 000 = 135 000. Mỗi ki-lô-gam: 135 000 : 3 = 45 000.", "đồng"),
      num("Tìm số lớn, biết tổng của hai số là 34 500 và hiệu của chúng là 4 500.", (34500 + 4500) / 2),
      num("Cứ 4 hộp sữa đóng thành một vỉ sữa. Hỏi 819 635 hộp sữa đóng được nhiều nhất bao nhiêu vỉ sữa?", Math.floor(819635 / 4), "819 635 : 4 = 204 908 (dư 3), còn thừa 3 hộp.", "vỉ"),
      mc("A-li-ba-ba có 250 000 đồng tiền vàng. Ông chia số tiền đó thành 5 phần bằng nhau rồi lấy một phần cho những người dân nghèo. Ông còn lại bao nhiêu đồng?", "200 000 đồng", ["50 000 đồng", "150 000 đồng", "250 000 đồng"]),
      mc("Cây cầu chỉ cho xe có tổng cân nặng không quá 20 tấn đi qua. Xe nào đi qua được? (A: 42 230 : 2 kg; B: 125 040 : 6 kg; C: 137 550 : 7 kg)", "Xe C", ["Xe A", "Xe B", "Cả ba xe"], "A = 21 115 kg; B = 20 840 kg; C = 19 650 kg."),
    ],
  },

  // Bài 40. Tính chất giao hoán và kết hợp của phép nhân
  40: {
    intro:
      "Tính chất giao hoán: a × b = b × a. Tính chất kết hợp: (a × b) × c = a × (b × c). Dùng các tính chất này để tính thuận tiện, nhóm các thừa số cho ra số tròn chục, tròn trăm.",
    questions: [
      tf("Khi đổi chỗ các thừa số trong một tích thì tích không thay đổi.", true),
      num("Số ?  4 × 9 = 9 × ?", 4),
      num("Số ?  5 × 10 = ? × 5", 10),
      num("Số ?  3 112 × 8 = ? × 3 112", 8),
      num("Số ?  41 320 × 3 = 3 × ?", 41320),
      mc("Biểu thức nào có giá trị bằng 9 × 510?", "510 × 9", ["51 × 9", "7 × 120", "1 200 × 7"]),
      num("Tính bằng cách thuận tiện: 4 × 2 × 5 = ?", 4 * 2 * 5),
      num("Tính bằng cách thuận tiện: 7 × 2 × 3 = ?", 7 * 2 * 3),
      num("Tính bằng cách thuận tiện: 6 × 3 × 3 = ?", 6 * 3 * 3),
      num("Tính bằng cách thuận tiện: 2 136 × 5 × 2 = ?", 2136 * 5 * 2, "Nhóm 5 × 2 = 10 rồi nhân: 2 136 × 10."),
      mc("Biểu thức nào có giá trị bằng 8 × 5 × 2?", "40 × 2", ["9 × 6", "27 × 2", "9 × 3 × 2"], "8 × 5 × 2 = 80 = 40 × 2."),
      num("Rô-bốt làm 3 chiếc bánh kem. Mỗi chiếc bánh được cắt thành 5 phần, mỗi phần có 2 quả dâu tây. Rô-bốt đã dùng tất cả bao nhiêu quả dâu tây?", 3 * 5 * 2, undefined, "quả"),
      num("Số ?  (6 × 15) × 21 = 6 × (? × 21)", 15),
      num("Biết 9 × 68 130 = 613 170 và 613 170 × 5 = 3 065 850. Không thực hiện phép tính, hãy cho biết giá trị của 9 × 68 130 × 5.", 3065850),
      num("Với a = 7, b = 5, c = 2, tính giá trị của biểu thức (a × b) × c.", (7 * 5) * 2),
      num("Với a = 10, b = 2, c = 4, tính giá trị của biểu thức a × (b × c).", 10 * (2 * 4)),
    ],
  },

  // Bài 41. Nhân, chia với 10, 100, 1 000,...
  41: {
    intro:
      "Khi nhân một số tự nhiên với 10, 100, 1 000,... ta viết thêm một, hai, ba,... chữ số 0 vào bên phải số đó. Khi chia số tròn chục, tròn trăm, tròn nghìn,... cho 10, 100, 1 000,... ta bỏ bớt đi một, hai, ba,... chữ số 0 ở bên phải số đó.",
    questions: [
      num("36 × 10 = ?", 360),
      num("36 × 100 = ?", 3600),
      num("14 × 10 = ?", 140),
      num("1 348 × 100 = ?", 134800),
      num("5 629 × 1 000 = ?", 5629000),
      num("18 390 : 10 = ?", 1839),
      num("328 000 : 100 = ?", 3280),
      num("378 000 : 1 000 = ?", 378),
      num("Rô-bốt chạy 10 vòng quanh sân vận động, mỗi vòng dài 375 m. Rô-bốt đã chạy bao nhiêu mét?", 3750, undefined, "m"),
      num("Hội trường có hai bên lối đi, mỗi bên có 10 hàng ghế, mỗi hàng có 8 chỗ ngồi. Hội trường có tất cả bao nhiêu chỗ ngồi?", 10 * 8 * 2, undefined, "chỗ"),
      num("Số ?  57 000 : ? = 1 000", 57),
      num("Số ?  ? : 35 = 1 000", 35000),
      num("500 kg = ? tạ", 5),
      num("400 yến = ? tạ", 40),
      num("8 000 kg = ? tấn", 8),
      num("Tính bằng cách thuận tiện: 5 × 3 598 × 2 = ?", 5 * 3598 * 2),
      num("Một đoàn tàu hoả có 25 toa. Người ta dùng các toa từ toa 16 đến toa 25 để chở hàng, mỗi toa chở 12 tấn hàng. Đoàn tàu chở tất cả bao nhiêu tấn hàng?", 10 * 12, "Từ toa 16 đến toa 25 có 25 – 16 + 1 = 10 toa; 10 × 12 = 120 tấn.", "tấn"),
      num("Trên đoạn đường dài 500 m, cứ 10 m có một cột đèn, cả hai đầu đoạn đường đều có cột đèn. Có tất cả bao nhiêu cột đèn?", 500 / 10 + 1, "500 : 10 = 50 khoảng cách, nên có 50 + 1 = 51 cột đèn.", "cột"),
    ],
  },
};
