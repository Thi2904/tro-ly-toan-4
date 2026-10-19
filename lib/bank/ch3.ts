import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch3: Record<number, L> = {
  // Bài 10. Số có sáu chữ số. Số 1 000 000
  10: {
    intro:
      "Số có sáu chữ số gồm các hàng: trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị. Số liền sau của 999 999 là 1 000 000 (một triệu).",
    questions: [
      num("Viết số: bốn trăm mười hai nghìn bảy trăm linh sáu.", 412706),
      num("Viết số: chín trăm nghìn không trăm chín mươi.", 900090),
      num("Viết số gồm 3 trăm nghìn, 7 chục nghìn, 4 trăm và 5 đơn vị.", 370405),
      num("Viết số: bảy trăm linh năm nghìn hai trăm.", 705200),
      mc("Số 840 096 đọc là:", "tám trăm bốn mươi nghìn không trăm chín mươi sáu", ["tám trăm bốn mươi nghìn chín trăm sáu mươi", "tám mươi bốn nghìn không trăm chín mươi sáu", "tám trăm linh bốn nghìn không trăm chín mươi sáu"]),
      num("Số ?  458 703 = 400 000 + 50 000 + 8 000 + ? + 3", 700),
      num("Số liền trước của 500 000 là số nào?", 499999),
      mc("Số liền sau của 799 999 là:", 800000, [799998, 800001, 790000]),
      num("Cho dãy số 100 000; 200 000; 300 000; ... Số thứ 10 của dãy là số nào?", 1000000),
      num("Số lớn nhất có sáu chữ số khác nhau là số nào?", 987654),
      num("Số 1 000 000 hơn số lớn nhất có sáu chữ số bao nhiêu đơn vị?", 1),
      num("Mỗi ngày nhà máy sản xuất 25 000 chai nước. Sau 20 ngày nhà máy sản xuất được bao nhiêu chai nước?", 25000 * 20, "25 000 × 20 = 500 000.", "chai"),
      num("Tính: 1 000 000 – 1 = ?", 999999),
    ],
    adv: [
      num("Có bao nhiêu số có sáu chữ số?", 999999 - 99999, "Từ 100 000 đến 999 999: 999 999 – 99 999 = 900 000 số."),
      num("Số bé nhất có sáu chữ số khác nhau là số nào?", 102345),
      num("Tổng các chữ số của số lớn nhất có sáu chữ số là bao nhiêu?", 9 * 6),
      num("Số bé nhất có sáu chữ số mà tổng các chữ số bằng 2 là số nào?", 100001, "Chữ số hàng trăm nghìn ít nhất là 1, chữ số 1 còn lại đặt ở hàng đơn vị."),
      num("Viết liên tiếp các số 999 990; 999 991; ...; 1 000 000. Số 1 000 000 đứng thứ mấy?", 11, "Từ 999 990 đến 999 999 có 10 số, số 1 000 000 là số thứ 11."),
      num("Có bao nhiêu số tròn nghìn có sáu chữ số?", 900, "Từ 100 nghìn đến 999 nghìn: 999 – 100 + 1 = 900 số."),
    ],
  },

  // Bài 11. Hàng và lớp
  11: {
    intro:
      "Lớp đơn vị gồm: hàng đơn vị, hàng chục, hàng trăm. Lớp nghìn gồm: hàng nghìn, hàng chục nghìn, hàng trăm nghìn. Lớp triệu gồm: hàng triệu, hàng chục triệu, hàng trăm triệu.",
    questions: [
      mc("Hàng trăm nghìn thuộc lớp nào?", "lớp nghìn", ["lớp đơn vị", "lớp triệu", "lớp trăm"]),
      num("Chữ số hàng trăm nghìn của số 748 205 là chữ số nào?", 7),
      num("Giá trị của chữ số 4 trong số 340 785 là bao nhiêu?", 40000),
      mc("Chữ số 6 trong số 256 013 thuộc hàng nào, lớp nào?", "hàng nghìn, lớp nghìn", ["hàng trăm, lớp đơn vị", "hàng chục nghìn, lớp nghìn", "hàng triệu, lớp triệu"]),
      num("Giá trị của chữ số 8 trong số 8 047 129 là bao nhiêu?", 8000000),
      num("Viết số có lớp triệu là 35, lớp nghìn là 407 và lớp đơn vị là 120.", 35407120),
      mc("Số 207 000 000 đọc là:", "hai trăm linh bảy triệu", ["hai mươi bảy triệu", "hai trăm bảy mươi triệu", "hai trăm linh bảy nghìn"]),
      num("Chữ số hàng chục triệu của số 45 318 706 là chữ số nào?", 4),
      num("Số 5 250 000 có hai chữ số 5. Tổng giá trị của hai chữ số 5 đó là bao nhiêu?", 5000000 + 50000),
      mc("Số nào dưới đây có chữ số 9 ở hàng nghìn?", "245 913", ["931 204", "120 394", "392 140"], "Số có sáu chữ số: các chữ số theo thứ tự là trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị."),
      num("Viết số: hai mươi lăm triệu không trăm ba mươi nghìn.", 25030000),
      tf("Số 10 000 000 có 7 chữ số 0.", true),
      num("Lớp nghìn của số 6 504 291 là số nào (viết ba chữ số)?", 504),
    ],
    adv: [
      num("Số bé nhất có chín chữ số là số nào?", 100000000),
      num("Trong số 333 333, giá trị của chữ số 3 ở hàng chục nghìn gấp giá trị của chữ số 3 ở hàng trăm bao nhiêu lần?", 30000 / 300),
      num("Số một trăm triệu có bao nhiêu chữ số 0?", 8),
      num("Số có bảy chữ số, hàng triệu là 1, lớp nghìn là 999, lớp đơn vị là 001. Số đó là:", 1999001),
      num("Tổng giá trị các chữ số 2 trong số 202 202 là bao nhiêu?", 200000 + 2000 + 200 + 2),
      num("Số bé nhất có bảy chữ số khác nhau là số nào?", 1023456),
    ],
  },

  // Bài 12. Các số trong phạm vi lớp triệu
  12: {
    intro:
      "Đọc và viết số lớn: tách từ phải sang trái thành từng lớp (đơn vị, nghìn, triệu), mỗi lớp 3 chữ số, rồi đọc từng lớp từ trái sang phải kèm tên lớp.",
    questions: [
      num("Viết số: ba mươi hai triệu bốn trăm nghìn không trăm năm mươi.", 32400050),
      num("Viết số: một trăm linh năm triệu hai trăm nghìn.", 105200000),
      mc("Số 8 070 600 đọc là:", "tám triệu không trăm bảy mươi nghìn sáu trăm", ["tám triệu bảy trăm nghìn sáu trăm", "tám mươi triệu bảy mươi nghìn sáu trăm", "tám triệu không trăm bảy mươi sáu nghìn"]),
      num("Số ?  36 481 902 = 36 000 000 + 481 000 + ?", 902),
      num("Số ?  70 305 000 = 70 000 000 + ?", 305000),
      num("Viết số gồm 5 chục triệu, 2 triệu, 4 trăm nghìn và 8 nghìn.", 52408000),
      num("Số liền sau của 29 999 999 là số nào?", 30000000),
      num("Số liền trước của 100 000 000 là số nào?", 99999999),
      mc("Dân số ba tỉnh: tỉnh A 3 245 000 người, tỉnh B 3 254 000 người, tỉnh C 3 245 100 người. Tỉnh nào đông dân nhất?", "Tỉnh B", ["Tỉnh A", "Tỉnh C", "Ba tỉnh bằng nhau"]),
      mc("Số lớn nhất trong các số 18 340 205; 18 340 250; 18 304 520; 18 430 025 là:", "18 430 025", ["18 340 205", "18 340 250", "18 304 520"]),
      num("Số ?  12 000 000; 12 500 000; 13 000 000; ?; 14 000 000. Số còn thiếu là:", 13500000),
      num("Tính: 12 000 000 + 3 500 000 + 70 000 = ?", 12000000 + 3500000 + 70000),
      num("Giá trị của chữ số 5 trong số 54 306 128 là bao nhiêu?", 50000000),
    ],
    adv: [
      num("Số lớn nhất có tám chữ số khác nhau là số nào?", 98765432),
      num("Số bé nhất có tám chữ số khác nhau là số nào?", 10234567),
      num("Có bao nhiêu số tròn triệu từ 5 000 000 đến 25 000 000 (tính cả hai số đầu và cuối)?", 25 - 5 + 1),
      num("Một triệu gấp mười nghìn bao nhiêu lần?", 1000000 / 10000),
      num("Viết số có tám chữ số, lớp triệu là 10, lớp nghìn là 101, lớp đơn vị là 010.", 10101010),
      num("Cho dãy số 500 000; 1 000 000; 1 500 000; ... Số hạng thứ 9 của dãy là số nào?", 500000 * 9),
    ],
  },

  // Bài 13. Làm tròn số đến hàng trăm nghìn
  13: {
    intro:
      "Làm tròn số đến hàng trăm nghìn: nhìn chữ số hàng chục nghìn. Nếu chữ số đó bé hơn 5 thì làm tròn xuống (giữ nguyên chữ số hàng trăm nghìn); nếu từ 5 trở lên thì làm tròn lên (tăng chữ số hàng trăm nghìn thêm 1). Các hàng sau đều thành 0.",
    questions: [
      mc("Làm tròn số 462 000 đến hàng trăm nghìn, ta được:", 500000, [400000, 460000, 600000]),
      mc("Làm tròn số 438 912 đến hàng trăm nghìn, ta được:", 400000, [500000, 440000, 430000]),
      mc("Làm tròn số 250 000 đến hàng trăm nghìn, ta được:", 300000, [200000, 250000, 260000]),
      num("Làm tròn số 1 349 800 đến hàng trăm nghìn, ta được số nào?", 1300000),
      num("Làm tròn số 7 650 000 đến hàng trăm nghìn, ta được số nào?", 7700000),
      num("Làm tròn số 8 249 999 đến hàng trăm nghìn, ta được số nào?", 8200000),
      mc("Số nào dưới đây khi làm tròn đến hàng trăm nghìn được 600 000?", 584316, [549999, 650000, 710000]),
      num("Dân số một thành phố là 1 275 400 người. Làm tròn số dân đến hàng trăm nghìn, ta được bao nhiêu người?", 1300000, undefined, "người"),
      tf("Làm tròn số 349 999 đến hàng trăm nghìn được 300 000.", true),
      num("Làm tròn số 5 990 000 đến hàng trăm nghìn, ta được số nào?", 6000000),
      num("Số lớn nhất khi làm tròn đến hàng trăm nghìn được 300 000 là số nào?", 349999),
      num("Số bé nhất khi làm tròn đến hàng trăm nghìn được 300 000 là số nào?", 250000),
      mc("Làm tròn số 3 000 000 đến hàng trăm nghìn, ta được:", 3000000, [3100000, 2900000, 300000]),
    ],
    adv: [
      num("Có bao nhiêu số tròn chục nghìn khi làm tròn đến hàng trăm nghìn được 500 000?", 10, "Đó là 450 000; 460 000; ...; 540 000."),
      num("Có bao nhiêu số tự nhiên khi làm tròn đến hàng trăm nghìn được 400 000?", 449999 - 350000 + 1, "Từ 350 000 đến 449 999."),
      num("Số tự nhiên bé nhất khi làm tròn đến hàng trăm nghìn được 1 000 000 là số nào?", 950000),
      num("Làm tròn số 2 349 000 và số 3 410 000 đến hàng trăm nghìn rồi cộng hai số tròn đó. Kết quả là:", 2300000 + 3400000),
      num("Số có sáu chữ số, chữ số hàng trăm nghìn là 3, chữ số hàng chục nghìn là 5, các chữ số còn lại đều là 0. Làm tròn số đó đến hàng trăm nghìn được số nào?", 400000, "Số đó là 350 000, chữ số hàng chục nghìn là 5 nên làm tròn lên."),
    ],
  },

  // Bài 14. So sánh các số có nhiều chữ số
  14: {
    intro:
      "Số nào có nhiều chữ số hơn thì lớn hơn. Hai số có cùng số chữ số thì so sánh từng cặp chữ số ở cùng một hàng, từ trái sang phải; cặp đầu tiên khác nhau cho biết số nào lớn hơn.",
    questions: [
      mc("Chọn dấu thích hợp: 530 482 ? 530 428", ">", ["<", "="], "Hàng nghìn, trăm nghìn, chục nghìn đều bằng nhau; hàng trăm: 4 = 4; hàng chục: 8 > 2."),
      mc("Chọn dấu thích hợp: 7 245 618 ? 7 254 168", "<", [">", "="]),
      mc("Chọn dấu thích hợp: 3 000 000 ? 2 999 999", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: 40 000 000 + 500 000 ? 40 500 000", "=", ["<", ">"]),
      mc("Số lớn nhất trong các số 623 540; 632 450; 623 905; 632 054 là:", "632 450", ["623 540", "623 905", "632 054"]),
      mc("Số bé nhất trong các số 8 120 456; 8 102 654; 8 120 054; 8 012 999 là:", "8 012 999", ["8 120 456", "8 102 654", "8 120 054"]),
      num("Sắp xếp các số 345 120; 354 021; 345 021; 354 120 theo thứ tự từ bé đến lớn. Số đứng thứ hai là số nào?", 345120),
      num("Chữ số lớn nhất có thể điền vào ? để 63?450 < 637 000 là chữ số nào?", 6, "63?450 < 637 000 thì ? bé hơn 7, nên chữ số lớn nhất là 6."),
      num("Có bao nhiêu số tự nhiên lớn hơn 999 995 và bé hơn 1 000 003?", 7, "Đó là 999 996; ...; 999 999; 1 000 000; 1 000 001; 1 000 002."),
      tf("Số tự nhiên nào có nhiều chữ số hơn thì lớn hơn.", true),
      mc("Xếp các số 4 500 000; 450 000; 4 050 000; 405 000 từ lớn đến bé, số đứng đầu là:", "4 500 000", ["450 000", "4 050 000", "405 000"]),
      mc("Hai thành phố có dân số 1 290 000 người và 1 209 000 người. Thành phố nào đông dân hơn?", "Thành phố có 1 290 000 người", ["Thành phố có 1 209 000 người", "Hai thành phố bằng nhau", "Không so sánh được"]),
    ],
    adv: [
      num("Có bao nhiêu số tự nhiên x thoả mãn 4 589 < x < 4 600?", 10, "Đó là các số từ 4 590 đến 4 599."),
      num("Số tròn chục lớn nhất bé hơn 8 500 là số nào?", 8490),
      num("Có bao nhiêu chữ số a để số 2a5 000 lớn hơn 235 000?", 6, "a có thể là 4; 5; 6; 7; 8; 9."),
      num("Số lớn nhất có bảy chữ số khác nhau và bé hơn 5 000 000 là số nào?", 4987653),
      num("Gọi x là số lớn nhất có năm chữ số, y là số bé nhất có sáu chữ số. Hiệu y – x bằng bao nhiêu?", 100000 - 99999),
    ],
  },

  // Bài 15. Làm quen với dãy số tự nhiên
  15: {
    intro:
      "Các số 0; 1; 2; 3; ... là các số tự nhiên. Số 0 là số tự nhiên bé nhất, không có số tự nhiên lớn nhất. Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.",
    questions: [
      mc("Số tự nhiên bé nhất là số nào?", 0, [1, 10, 100]),
      tf("Có số tự nhiên lớn nhất.", false, "Thêm 1 vào một số tự nhiên bất kì ta luôn được số tự nhiên lớn hơn."),
      num("Số liền sau của số tự nhiên 4 999 999 là số nào?", 5000000),
      num("Số tự nhiên liền trước của 2 000 000 là số nào?", 1999999),
      num("Cho dãy số 5; 10; 15; 20; ... Số hạng thứ 12 của dãy là số nào?", 5 * 12),
      num("Có bao nhiêu số tự nhiên chẵn bé hơn 5?", 3, "Đó là 0; 2; 4."),
      num("Số tự nhiên lớn nhất có ba chữ số khác nhau và bé hơn 500 là số nào?", 498),
      num("Từ 1 đến 100 có bao nhiêu số tròn chục?", 10),
      num("Từ 15 đến 40 (tính cả hai số đầu và cuối) có bao nhiêu số tự nhiên?", 40 - 15 + 1),
      num("Tổng ba số tự nhiên liên tiếp là 75. Số lớn nhất trong ba số đó là:", 26, "Số ở giữa là 75 : 3 = 25, nên ba số là 24; 25; 26."),
      num("Hai số tự nhiên liên tiếp có tổng bằng 41. Số lớn là:", 21, "Hai số là 20 và 21."),
      mc("Số tự nhiên nào bé hơn 1?", 0, [2, 10, "Không có số nào"]),
      num("Số ?  Dãy số tự nhiên liên tiếp: 8 999; 9 000; ?; 9 002. Số còn thiếu là:", 9001),
    ],
    adv: [
      num("Cho dãy số 2; 5; 8; 11; ... Số hạng thứ 25 của dãy là số nào?", 2 + 24 * 3, "Mỗi số hơn số liền trước 3 đơn vị: 2 + 24 × 3 = 74."),
      num("Dãy số 4; 8; 12; ...; 100 có bao nhiêu số hạng?", 100 / 4),
      num("Từ 1 đến 99 có bao nhiêu số có chứa chữ số 5?", 19, "Chữ số 5 ở hàng đơn vị: 10 số; ở hàng chục: 10 số; số 55 đếm hai lần: 10 + 10 – 1 = 19."),
      num("Tính nhanh: 1 + 2 + 3 + ... + 20 = ?", 20 * 21 / 2, "Ghép cặp (1 + 20) × 20 : 2."),
      num("Có bao nhiêu số tự nhiên có ba chữ số mà chữ số hàng trăm là 7?", 100, "Từ 700 đến 799."),
      num("Tính nhanh: 1 + 3 + 5 + ... + 99 = ?", (1 + 99) * 50 / 2, "Có 50 số lẻ, ghép cặp: (1 + 99) × 50 : 2 = 2 500."),
    ],
  },

  // Bài 16. Luyện tập chung
  16: {
    intro: "Ôn lại: đọc, viết số lớn; hàng và lớp; làm tròn đến hàng trăm nghìn; so sánh và dãy số tự nhiên.",
    questions: [
      num("Viết số: bảy triệu hai trăm ba mươi nghìn bốn trăm linh năm.", 7230405),
      mc("Làm tròn số 3 478 000 đến hàng trăm nghìn, ta được:", 3500000, [3400000, 3470000, 3000000]),
      num("Giá trị của chữ số 6 trong số 6 071 238 là bao nhiêu?", 6000000),
      mc("Chọn dấu thích hợp: 7 654 321 ? 7 645 321", ">", ["<", "="]),
      num("Số liền sau của 12 999 999 là số nào?", 13000000),
      mc("Dân số ba thành phố: A có 1 245 000 người, B có 1 254 000 người, C có 1 240 500 người. Thành phố nào có ít dân nhất?", "Thành phố C", ["Thành phố A", "Thành phố B", "Ba thành phố bằng nhau"]),
      num("Số ?  250 000; 500 000; 750 000; ?. Số tiếp theo là:", 1000000),
      num("Viết số gồm 3 trăm triệu, 6 chục nghìn và 5 trăm.", 300060500),
      tf("Làm tròn số 449 999 đến hàng trăm nghìn được 400 000.", true),
      num("Số lớn nhất có sáu chữ số khác nhau và bé hơn 600 000 là số nào?", 598764),
      mc("Số nào dưới đây có chữ số 4 ở hàng nghìn?", "1 304 560", ["4 130 560", "1 430 560", "1 340 560"]),
      num("Tính: 3 500 000 + 250 000 + 4 000 = ?", 3500000 + 250000 + 4000),
      num("Năm đầu nhà máy sản xuất 1 250 000 sản phẩm. Năm sau sản xuất nhiều hơn năm đầu 340 000 sản phẩm. Cả hai năm nhà máy sản xuất được bao nhiêu sản phẩm?", 1250000 + 1590000, "Năm sau: 1 250 000 + 340 000 = 1 590 000. Cả hai năm: 1 250 000 + 1 590 000 = 2 840 000.", "sản phẩm"),
    ],
    adv: [
      num("Số bé nhất có bảy chữ số mà tổng các chữ số bằng 3 là số nào?", 1000002),
      num("Có bao nhiêu số có bảy chữ số?", 9999999 - 999999),
      num("Số tự nhiên bé nhất có tổng các chữ số bằng 20 là số nào?", 299, "Cần ít chữ số nhất: hai chữ số tối đa là 9 + 9 = 18 < 20, nên có ba chữ số; hàng trăm bé nhất là 2."),
      num("Thành phố A có 1 275 400 dân, thành phố B nhiều hơn A 480 000 dân. Làm tròn số dân mỗi thành phố đến hàng trăm nghìn rồi cộng lại, ta được bao nhiêu?", 1300000 + 1800000, "B có 1 755 400 dân, làm tròn là 1 800 000; A làm tròn là 1 300 000."),
      num("Hiệu của số bé nhất có tám chữ số và số lớn nhất có bảy chữ số là bao nhiêu?", 10000000 - 9999999),
    ],
  },
};
