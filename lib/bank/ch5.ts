import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch5: Record<number, L> = {
  // Bài 22. Phép cộng các số có nhiều chữ số
  22: {
    intro:
      "Muốn cộng các số có nhiều chữ số: đặt tính sao cho các chữ số cùng hàng thẳng cột, rồi cộng từ phải sang trái (nhớ khi tổng ở một hàng từ 10 trở lên).",
    questions: [
      num("Đặt tính rồi tính: 254 678 + 135 429 = ?", 254678 + 135429),
      num("Đặt tính rồi tính: 487 905 + 36 478 = ?", 487905 + 36478),
      num("Đặt tính rồi tính: 6 859 + 3 764 = ?", 6859 + 3764),
      num("Đặt tính rồi tính: 705 238 + 194 762 = ?", 705238 + 194762),
      num("Đặt tính rồi tính: 1 245 300 + 836 475 = ?", 1245300 + 836475),
      num("Đặt tính rồi tính: 3 506 128 + 4 893 872 = ?", 3506128 + 4893872),
      num("Tính: 250 000 + 340 000 + 125 000 = ?", 250000 + 340000 + 125000),
      mc("Tổng của 369 215 và 40 785 là:", "410 000", ["409 000", "410 100", "400 000"]),
      num(
        "Tháng Một nhà máy sản xuất 215 400 sản phẩm, tháng Hai sản xuất nhiều hơn tháng Một 28 600 sản phẩm. Cả hai tháng nhà máy sản xuất được bao nhiêu sản phẩm?",
        215400 + 244000,
        "Tháng Hai: 215 400 + 28 600 = 244 000. Cả hai tháng: 215 400 + 244 000 = 459 400.",
        "sản phẩm",
      ),
      num("Một khu du lịch đón 12 450 lượt khách ngày thứ nhất, 15 780 lượt khách ngày thứ hai và 9 860 lượt khách ngày thứ ba. Cả ba ngày khu du lịch đón bao nhiêu lượt khách?", 12450 + 15780 + 9860, undefined, "lượt"),
      num(
        "Xã A có 18 750 người. Xã B nhiều hơn xã A 2 345 người. Xã C ít hơn xã B 1 260 người. Cả ba xã có bao nhiêu người?",
        18750 + 21095 + 19835,
        "Xã B: 18 750 + 2 345 = 21 095. Xã C: 21 095 – 1 260 = 19 835. Tổng: 18 750 + 21 095 + 19 835 = 59 680.",
        "người",
      ),
      mc("Phép cộng nào dưới đây có kết quả lớn nhất?", "200 000 + 158 024", ["123 456 + 234 567", "300 000 + 58 000", "357 999 + 1"], "358 023; 358 000; 358 024; 358 000."),
      num("Số ?  345 678 + ? = 400 000. Số thích hợp là:", 400000 - 345678),
      num("Mẹ mua máy tính 12 500 000 đồng, chuột 350 000 đồng và tai nghe 1 150 000 đồng. Mẹ phải trả tất cả bao nhiêu đồng?", 12500000 + 350000 + 1150000, undefined, "đồng"),
    ],
    adv: [
      num("Tổng của hai số là 1 000 000. Số thứ nhất là 468 275. Số thứ hai là:", 1000000 - 468275),
      num("Tổng của số lớn nhất có sáu chữ số và số bé nhất có sáu chữ số là:", 999999 + 100000),
      num("Một số cộng với 258 436 thì được 700 000. Số đó là:", 700000 - 258436),
      num("Tính bằng cách thuận tiện: 125 + 478 + 875 + 522 = ?", 125 + 478 + 875 + 522, "Ghép (125 + 875) + (478 + 522) = 1 000 + 1 000."),
      num("Dùng bốn chữ số 1, 2, 3, 4 (mỗi chữ số dùng đúng một lần) để lập hai số có hai chữ số. Tổng lớn nhất của hai số đó là:", 42 + 31, "Các chữ số hàng chục là 4 và 3, các chữ số hàng đơn vị là 2 và 1: 42 + 31 = 73."),
      num("Ba bạn An, Bình, Chi có tổng 90 viên bi. An và Bình có 55 viên, Bình và Chi có 60 viên. Bình có bao nhiêu viên bi?", 55 + 60 - 90, "Chi có 90 – 55 = 35 viên, An có 90 – 60 = 30 viên, Bình có 55 – 30 = 25 viên.", "viên"),
    ],
  },

  // Bài 23. Phép trừ các số có nhiều chữ số
  23: {
    intro:
      "Muốn trừ các số có nhiều chữ số: đặt tính thẳng cột, trừ từ phải sang trái; nếu chữ số ở số bị trừ bé hơn chữ số ở số trừ thì mượn 1 chục ở hàng bên cạnh (nhớ lại khi trừ ở hàng kế tiếp).",
    questions: [
      num("Đặt tính rồi tính: 782 345 – 356 128 = ?", 782345 - 356128),
      num("Đặt tính rồi tính: 905 000 – 487 653 = ?", 905000 - 487653),
      num("Đặt tính rồi tính: 12 350 – 4 678 = ?", 12350 - 4678),
      num("Đặt tính rồi tính: 2 000 000 – 1 234 567 = ?", 2000000 - 1234567),
      num("Đặt tính rồi tính: 5 480 206 – 2 719 358 = ?", 5480206 - 2719358),
      num("Tính: 900 000 – 250 000 – 130 000 = ?", 900000 - 250000 - 130000),
      num("Số bị trừ là 600 000, hiệu là 245 800. Số trừ là:", 600000 - 245800),
      num("Số trừ là 123 456, hiệu là 654 321. Số bị trừ là:", 123456 + 654321),
      num(
        "Dân số tỉnh A là 3 250 000 người. Dân số tỉnh B ít hơn tỉnh A 480 000 người. Dân số tỉnh C ít hơn tỉnh B 125 000 người. Dân số tỉnh C là bao nhiêu người?",
        3250000 - 480000 - 125000,
        "Tỉnh B: 3 250 000 – 480 000 = 2 770 000. Tỉnh C: 2 770 000 – 125 000 = 2 645 000.",
        "người",
      ),
      num("Chiếc xe máy giá 18 500 000 đồng. Bác Ba trả trước 7 800 000 đồng, sau đó trả thêm 2 350 000 đồng. Bác Ba còn phải trả bao nhiêu đồng?", 18500000 - 7800000 - 2350000, undefined, "đồng"),
      mc("Phép trừ nào dưới đây có hiệu bé nhất?", "500 000 – 249 990", ["700 000 – 399 999", "600 000 – 250 000", "450 000 – 150 000"], "300 001; 350 000; 250 010; 300 000."),
      num("Hiệu của số lớn nhất có sáu chữ số và số bé nhất có sáu chữ số là:", 999999 - 100000),
      num("Đường bay từ thành phố A đến thành phố B dài 1 250 km. Máy bay đã bay được 785 km. Máy bay còn phải bay bao nhiêu ki-lô-mét nữa?", 1250 - 785, undefined, "km"),
    ],
    adv: [
      num("Tìm x biết: x – 245 678 = 354 322. Số x là:", 245678 + 354322),
      num("Tìm x biết: 800 000 – x = 275 400. Số x là:", 800000 - 275400),
      num("Tính nhanh: 1 000 000 – 123 456 – 876 544 = ?", 0, "123 456 + 876 544 = 1 000 000."),
      num("Hiệu của hai số là 25 000. Nếu thêm 8 000 vào số bị trừ và thêm 3 000 vào số trừ thì hiệu mới là bao nhiêu?", 25000 + 8000 - 3000),
      num("Bác Tư có 2 500 000 đồng. Bác mua ti vi giá 1 890 000 đồng, mua quạt giá 450 000 đồng rồi cho con 100 000 đồng. Bác Tư còn lại bao nhiêu đồng?", 2500000 - 1890000 - 450000 - 100000, undefined, "đồng"),
      num("Lan có nhiều hơn Mai 25 viên bi. Nếu Lan cho Mai 10 viên bi thì Lan có nhiều hơn Mai bao nhiêu viên bi?", 25 - 20, "Lan giảm 10, Mai tăng 10 nên hiệu giảm 20: 25 – 20 = 5.", "viên"),
    ],
  },

  // Bài 24. Tính chất giao hoán và kết hợp của phép cộng
  24: {
    intro:
      "Tính chất giao hoán: a + b = b + a. Tính chất kết hợp: (a + b) + c = a + (b + c). Có thể đổi chỗ và nhóm các số hạng để tính thuận tiện (ghép các số có tổng tròn chục, tròn trăm, tròn nghìn).",
    questions: [
      num("Số ?  235 + 478 = 478 + ?", 235),
      num("Số ?  (150 + 275) + 325 = 150 + (275 + ?)", 325),
      num("Tính bằng cách thuận tiện: 2 345 + 4 123 + 7 655 = ?", 2345 + 4123 + 7655, "Ghép (2 345 + 7 655) + 4 123 = 10 000 + 4 123."),
      num("Tính bằng cách thuận tiện: 15 + 38 + 85 + 62 = ?", 15 + 38 + 85 + 62),
      num("Tính bằng cách thuận tiện: 3 600 + 2 900 + 400 + 1 100 = ?", 3600 + 2900 + 400 + 1100),
      num("Tính bằng cách thuận tiện: 456 + 789 + 544 = ?", 456 + 789 + 544),
      mc("Biểu thức nào sau đây thể hiện tính chất kết hợp của phép cộng?", "(a + b) + c = a + (b + c)", ["a + b = b + a", "a + 0 = a", "a × b = b × a"]),
      tf("Với mọi số a, b ta có a + b = b + a.", true),
      num("Lớp 4A quyên góp 125 000 đồng, lớp 4B quyên góp 238 000 đồng, lớp 4C quyên góp 175 000 đồng. Ba lớp quyên góp được tất cả bao nhiêu đồng?", 125000 + 175000 + 238000, "Ghép (125 000 + 175 000) + 238 000.", "đồng"),
      num("Tính nhanh: 1 + 99 + 2 + 98 + 3 + 97 = ?", 1 + 99 + 2 + 98 + 3 + 97),
      num("Tính bằng cách thuận tiện: 1 245 + 899 + 755 = ?", 1245 + 899 + 755),
      mc("Để tính nhanh 47 + 128 + 53, ta nên tính:", "(47 + 53) + 128", ["(47 + 128) + 53", "47 + (128 + 53)", "47 + 128 + 5 + 3"]),
      num("Tính: 250 + 360 + 750 + 640 = ?", 250 + 360 + 750 + 640),
    ],
    adv: [
      num("Tính nhanh: (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) + 10 = ?", 55),
      num("Tính nhanh: 999 + 998 + 997 + 1 + 2 + 3 = ?", 999 + 998 + 997 + 1 + 2 + 3, "Ghép 999 + 1, 998 + 2, 997 + 3, mỗi cặp bằng 1 000."),
      num("Tính tổng các số chẵn từ 12 đến 28: 12 + 14 + 16 + ... + 28 = ?", (12 + 28) * 9 / 2, "Có (28 – 12) : 2 + 1 = 9 số; tổng = (12 + 28) × 9 : 2 = 180."),
      num("Biết a + b = 120; b + c = 150; a + c = 130. Tổng a + b + c bằng bao nhiêu?", (120 + 150 + 130) / 2, "Cộng ba đẳng thức: 2 lần (a + b + c) = 400."),
      num("Tính nhanh: 2 + 4 + 6 + ... + 100 = ?", (2 + 100) * 50 / 2, "Có 50 số hạng, ghép cặp: (2 + 100) × 50 : 2."),
    ],
  },

  // Bài 25. Tìm hai số biết tổng và hiệu của hai số đó
  25: {
    intro:
      "Số lớn = (tổng + hiệu) : 2.  Số bé = (tổng – hiệu) : 2.  Hoặc: số bé = số lớn – hiệu, số lớn = số bé + hiệu.",
    questions: [
      num("Hai số có tổng bằng 70 và hiệu bằng 20. Số lớn là:", (70 + 20) / 2),
      num("Hai số có tổng bằng 70 và hiệu bằng 20. Số bé là:", (70 - 20) / 2),
      num("Hai số có tổng bằng 120 và hiệu bằng 36. Số lớn là:", (120 + 36) / 2),
      num("Hai số có tổng bằng 1 000 và hiệu bằng 250. Số bé là:", (1000 - 250) / 2),
      num("Hai thùng dầu chứa tất cả 96 lít. Thùng thứ nhất chứa nhiều hơn thùng thứ hai 12 lít. Thùng thứ nhất chứa bao nhiêu lít dầu?", (96 + 12) / 2, undefined, "lít"),
      num("Hai lớp 4A và 4B có tất cả 74 học sinh. Lớp 4A có nhiều hơn lớp 4B 4 học sinh. Lớp 4B có bao nhiêu học sinh?", (74 - 4) / 2, undefined, "học sinh"),
      num("Tổng số tuổi của mẹ và con là 46 tuổi. Mẹ hơn con 28 tuổi. Mẹ bao nhiêu tuổi?", (46 + 28) / 2, undefined, "tuổi"),
      num("Hai bao gạo nặng tất cả 130 kg. Bao to nặng hơn bao nhỏ 18 kg. Bao nhỏ nặng bao nhiêu ki-lô-gam?", (130 - 18) / 2, undefined, "kg"),
      num("Chu vi hình chữ nhật là 80 cm, chiều dài hơn chiều rộng 10 cm. Chiều dài hình chữ nhật là bao nhiêu xăng-ti-mét?", (40 + 10) / 2, "Nửa chu vi (tổng chiều dài và chiều rộng) là 80 : 2 = 40 cm.", "cm"),
      num("Hai số có tổng bằng 2 024 và hiệu bằng 100. Số lớn là:", (2024 + 100) / 2),
      num("Hai tổ trồng được tất cả 215 cây. Tổ hai trồng ít hơn tổ một 15 cây. Tổ một trồng được bao nhiêu cây?", (215 + 15) / 2, undefined, "cây"),
      num("Hai kho thóc chứa tất cả 5 tấn 4 tạ thóc. Kho A chứa nhiều hơn kho B 8 tạ. Kho A chứa bao nhiêu tạ thóc?", (54 + 8) / 2, "5 tấn 4 tạ = 54 tạ.", "tạ"),
      num("An và Bình có tất cả 120 000 đồng. Nếu An cho Bình 10 000 đồng thì hai bạn có số tiền bằng nhau. An có bao nhiêu đồng?", (120000 + 20000) / 2, "An hơn Bình 2 × 10 000 = 20 000 đồng.", "đồng"),
    ],
    adv: [
      num("Hai số lẻ liên tiếp có tổng bằng 128. Số lớn là:", (128 + 2) / 2),
      num("Hai số chẵn có tổng bằng 100 và hiệu bằng 16. Số bé là:", (100 - 16) / 2),
      num("Hai số có tổng bằng số lớn nhất có hai chữ số và hiệu bằng 15. Số lớn là:", (99 + 15) / 2),
      num("Tổng của hai số là 150. Nếu thêm 20 vào số bé và bớt 20 ở số lớn thì hai số bằng nhau. Số lớn là:", (150 + 40) / 2),
      num("Bình và Hoa có tất cả 86 viên bi. Nếu Bình cho Hoa 6 viên thì hai bạn có số bi bằng nhau. Bình có bao nhiêu viên bi?", (86 + 12) / 2, undefined, "viên"),
    ],
  },

  // Bài 26. Luyện tập chung
  26: {
    intro: "Ôn lại phép cộng, phép trừ nhiều chữ số, tính chất giao hoán, kết hợp và bài toán tìm hai số biết tổng và hiệu.",
    questions: [
      num("Đặt tính rồi tính: 365 289 + 408 716 = ?", 365289 + 408716),
      num("Đặt tính rồi tính: 700 003 – 256 489 = ?", 700003 - 256489),
      num("Tính bằng cách thuận tiện: 2 500 + 3 700 + 7 500 + 6 300 = ?", 2500 + 3700 + 7500 + 6300),
      num("Số ?  ? + 125 000 = 640 000", 640000 - 125000),
      num("Hai số có tổng bằng 220 và hiệu bằng 40. Số lớn là:", (220 + 40) / 2),
      num(
        "Một hồ chứa được 400 000 l nước. Buổi sáng người ta bơm vào 125 000 l, buổi chiều bơm nhiều hơn buổi sáng 35 000 l. Hồ còn thiếu bao nhiêu lít nước thì đầy?",
        400000 - 125000 - 160000,
        "Buổi chiều: 125 000 + 35 000 = 160 000. Còn thiếu: 400 000 – 125 000 – 160 000 = 115 000.",
        "lít",
      ),
      num("Hai thửa ruộng thu hoạch được tất cả 7 tấn 2 tạ thóc. Thửa thứ nhất thu hoạch nhiều hơn thửa thứ hai 6 tạ. Thửa thứ nhất thu hoạch bao nhiêu tạ thóc?", (72 + 6) / 2, undefined, "tạ"),
      mc("Giá trị của biểu thức 4 758 + 3 242 + 1 000 là:", 9000, [8000, 9100, 8900]),
      num("Xe thứ nhất chở 3 450 kg hàng. Xe thứ hai chở nhiều hơn xe thứ nhất 1 250 kg. Cả hai xe chở bao nhiêu ki-lô-gam hàng?", 3450 + 4700, undefined, "kg"),
      num("Tổng số tuổi của bố và con là 48 tuổi, bố hơn con 30 tuổi. Con bao nhiêu tuổi?", (48 - 30) / 2, undefined, "tuổi"),
      num("Mẹ mua bộ quần áo giá 285 000 đồng và đôi giày giá 340 000 đồng, rồi đưa người bán hàng 1 000 000 đồng. Người bán hàng phải trả lại mẹ bao nhiêu đồng?", 1000000 - 285000 - 340000, undefined, "đồng"),
      num("Tính: 1 000 000 – 9 999 = ?", 1000000 - 9999),
      mc("Hiệu của hai số bằng 0 khi nào?", "Hai số bằng nhau", ["Số trừ bằng 0", "Số bị trừ bằng 0", "Hai số là số chẵn"]),
    ],
    adv: [
      num("Tổng của ba số là 300. Số thứ nhất là 120, số thứ hai hơn số thứ ba 20. Số thứ hai là:", (180 + 20) / 2, "Số thứ hai và số thứ ba có tổng 300 – 120 = 180 và hiệu 20."),
      num("Tổng số tuổi của hai chị em là 25 tuổi. Sau 4 năm nữa, tổng số tuổi của hai chị em là bao nhiêu?", 25 + 4 * 2, undefined, "tuổi"),
      num("Tính nhanh: 1 234 + 5 678 + 8 766 + 4 322 = ?", 1234 + 5678 + 8766 + 4322),
      num("Hai số có tổng bằng 36. Nếu bớt 6 ở số lớn và thêm 6 vào số bé thì hai số bằng nhau. Số bé là:", (36 - 12) / 2),
      num("Hiệu của số lớn nhất có sáu chữ số và số bé nhất có năm chữ số là:", 999999 - 10000),
      num("Biết a + b = 1 000 và a – b = 400. Số a là:", (1000 + 400) / 2),
    ],
  },
};
