import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch3: Record<number, L> = {
  // Bài 10. Số có sáu chữ số. Số 1 000 000
  10: {
    intro:
      "Số có sáu chữ số gồm các hàng: trăm nghìn, chục nghìn, nghìn, trăm, chục, đơn vị. Số liền sau của 999 999 là 1 000 000 (một triệu).",
    questions: [
      num("Viết số: hai trăm hai mươi sáu nghìn ba trăm bảy mươi hai.", 226372),
      num("Viết số gồm 6 trăm nghìn, 5 chục nghìn, 3 chục và 2 đơn vị.", 650032),
      num("Viết số: chín trăm ba mươi tám nghìn không trăm hai mươi mốt.", 938021),
      num("Viết số: sáu trăm linh ba nghìn bốn trăm linh chín.", 603409),
      num("Viết số: tám trăm hai mươi ba nghìn không trăm mười bảy.", 823017),
      mc("Số liền sau của số 999 999 là:", 1000000, [999998, 1000001, 100000]),
      num("Số 1 000 000 đọc là một triệu. Số một triệu có bao nhiêu chữ số 0?", 6),
      num("Số ?  882 936 = 800 000 + 80 000 + 2 000 + 900 + ? + 6", 30),
      num("Số ?  750 000 = 700 000 + ?", 50000),
      num(
        "Năm 1900, người ta ước tính có 500 000 con tê giác ngoài tự nhiên. Ngày nay chỉ còn khoảng 27 000 con. Số tê giác đã giảm đi bao nhiêu con?",
        500000 - 27000,
        "500 000 – 27 000 = 473 000.",
        "con",
      ),
      mc("Số 603 409 đọc là:", "sáu trăm linh ba nghìn bốn trăm linh chín", ["sáu trăm ba nghìn bốn trăm chín", "sáu mươi nghìn ba trăm bốn mươi chín", "sáu trăm nghìn ba trăm bốn mươi chín"]),
    ],
  },

  // Bài 11. Hàng và lớp
  11: {
    intro:
      "Lớp đơn vị gồm: hàng đơn vị, hàng chục, hàng trăm. Lớp nghìn gồm: hàng nghìn, hàng chục nghìn, hàng trăm nghìn. Lớp triệu gồm: hàng triệu, hàng chục triệu, hàng trăm triệu.",
    questions: [
      mc("Lớp đơn vị gồm các hàng nào?", "hàng đơn vị, hàng chục, hàng trăm", ["hàng nghìn, hàng chục nghìn, hàng trăm nghìn", "hàng triệu, hàng chục triệu, hàng trăm triệu", "hàng chục, hàng trăm, hàng nghìn"]),
      mc("Lớp nghìn gồm các hàng nào?", "hàng nghìn, hàng chục nghìn, hàng trăm nghìn", ["hàng đơn vị, hàng chục, hàng trăm", "hàng triệu, hàng chục triệu, hàng trăm triệu", "hàng trăm, hàng nghìn, hàng chục nghìn"]),
      mc("Trong số 514 293, các chữ số 5, 1, 4 thuộc lớp nào?", "lớp nghìn", ["lớp đơn vị", "lớp triệu", "lớp chục nghìn"]),
      num("Chữ số hàng chục nghìn của số 377 931 là chữ số nào?", 7),
      mc("Chữ số 8 trong số 538 772 thuộc hàng nào, lớp nào?", "hàng nghìn, lớp nghìn", ["hàng trăm, lớp đơn vị", "hàng chục nghìn, lớp nghìn", "hàng trăm nghìn, lớp nghìn"]),
      num("Giá trị của chữ số 3 trong số 163 222 là bao nhiêu?", 3000),
      num("Giá trị của chữ số 7 trong số 736 772 (chữ số 7 đầu tiên) là bao nhiêu?", 700000),
      num("Viết số một trăm triệu.", 100000000),
      mc("Số 531 000 000 đọc là:", "năm trăm ba mươi mốt triệu", ["năm mươi ba triệu một trăm nghìn", "năm trăm ba mươi mốt nghìn", "năm triệu ba trăm mười nghìn"]),
      mc("Chữ số 2 trong số 258 000 000 thuộc hàng nào, lớp nào?", "hàng trăm triệu, lớp triệu", ["hàng chục triệu, lớp triệu", "hàng triệu, lớp triệu", "hàng trăm nghìn, lớp nghìn"]),
      mc(
        "Số nào dưới đây có các chữ số khác nhau, không chứa chữ số 0 ở lớp đơn vị và chứa chữ số 5 ở lớp nghìn?",
        405239,
        [500374, 207495, 371905],
      ),
      mc(
        "Số nào dưới đây là mật khẩu: không chứa chữ số 0 ở lớp triệu và chữ số hàng trăm nghìn khác 3?",
        "537 991 833",
        ["190 968 028", "1 000 000 000", "276 389 000"],
      ),
    ],
  },

  // Bài 12. Các số trong phạm vi lớp triệu
  12: {
    intro:
      "Số có chín chữ số gồm ba lớp: lớp triệu, lớp nghìn, lớp đơn vị. Khi đọc, ta đọc từ trái sang phải, đọc hết lớp nào thì thêm tên lớp đó. Số liền sau của 999 999 999 là 1 000 000 000 (một tỉ).",
    questions: [
      mc(
        "Số 149 597 876 đọc là:",
        "một trăm bốn mươi chín triệu năm trăm chín mươi bảy nghìn tám trăm bảy mươi sáu",
        [
          "một trăm bốn mươi chín nghìn năm trăm chín mươi bảy triệu tám trăm bảy mươi sáu",
          "mười bốn triệu chín trăm năm mươi bảy nghìn tám trăm bảy mươi sáu",
          "một trăm bốn mươi chín triệu năm mươi chín nghìn bảy trăm tám mươi sáu",
        ],
      ),
      num("Viết số: 20 000 000 + 7 000 000 + 900 = ?", 27000900),
      num("Số ?  109 140 903 = 100 000 000 + 9 000 000 + ? + 40 000 + 900 + 3", 100000),
      mc("Chữ số 8 trong số 63 782 910 thuộc hàng nào, lớp nào?", "hàng chục nghìn, lớp nghìn", ["hàng nghìn, lớp nghìn", "hàng trăm nghìn, lớp nghìn", "hàng chục, lớp đơn vị"]),
      tf("Số 14 021 983: Chữ số 4 thuộc lớp triệu.", true),
      tf("Số 14 021 983: Chữ số 0 ở hàng chục nghìn.", false, "Chữ số 0 ở hàng trăm nghìn; hàng chục nghìn là chữ số 2."),
      tf("Số 14 021 983: Chữ số 9 thuộc lớp đơn vị.", true),
      tf("Số 14 021 983: Chữ số 3 thuộc lớp nghìn.", false, "Chữ số 3 là hàng đơn vị, thuộc lớp đơn vị."),
      num("Số liền trước của 1 000 000 là số nào?", 999999),
      num("Số liền sau của 999 999 999 là số nào?", 1000000000),
      num("Viết số gồm 7 trăm triệu, 1 chục triệu, 4 triệu, 1 trăm và 6 đơn vị.", 714000106),
      num("Viết số: chín trăm sáu mươi tám triệu.", 968000000),
    ],
  },

  // Bài 13. Làm tròn số đến hàng trăm nghìn
  13: {
    intro:
      "Khi làm tròn số đến hàng trăm nghìn, ta so sánh chữ số hàng chục nghìn với 5. Nếu chữ số đó bé hơn 5 thì làm tròn xuống, còn lại (từ 5 trở lên) thì làm tròn lên.",
    questions: [
      num("Làm tròn số 2 712 615 đến hàng trăm nghìn.", 2700000),
      num("Làm tròn giá tiền 18 490 000 đồng đến hàng trăm nghìn.", 18500000, "Chữ số hàng chục nghìn là 9 (lớn hơn 5) nên làm tròn lên."),
      num("Làm tròn giá tiền 2 125 000 đồng đến hàng trăm nghìn.", 2100000),
      num("Làm tròn giá tiền 2 890 000 đồng đến hàng trăm nghìn.", 2900000),
      mc("Số nào dưới đây làm tròn đến hàng trăm nghìn thì được hai trăm nghìn?", 190001, [149000, 250001, 284910]),
      num("Làm tròn số xe máy bán ra năm 2016 là 3 121 023 chiếc đến hàng trăm nghìn.", 3100000),
      num("Làm tròn số xe máy bán ra năm 2018 là 3 386 097 chiếc đến hàng trăm nghìn.", 3400000),
      num("Làm tròn số xe máy bán ra năm 2019 là 3 254 964 chiếc đến hàng trăm nghìn.", 3300000, "Chữ số hàng chục nghìn là 5 nên làm tròn lên."),
      num("Làm tròn số dân Hải Dương 1 916 800 người đến hàng trăm nghìn.", 1900000),
      num("Làm tròn số dân Bà Rịa – Vũng Tàu 1 167 900 người đến hàng trăm nghìn.", 1200000),
      num("Làm tròn số dân Nghệ An 3 365 200 người đến hàng trăm nghìn.", 3400000),
      num("Làm tròn số 531 278 000 đến hàng chục nghìn.", 531280000),
    ],
  },

  // Bài 14. So sánh các số có nhiều chữ số
  14: {
    intro:
      "Số nào có nhiều chữ số hơn thì lớn hơn. Nếu hai số có cùng số chữ số thì so sánh từng cặp chữ số ở cùng một hàng, kể từ trái sang phải.",
    questions: [
      mc("Chọn dấu thích hợp: 278 992 000 ? 278 999", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: 37 338 449 ? 37 839 449", "<", [">", "="]),
      mc("Chọn dấu thích hợp: 3 004 000 ? 3 400 000", "<", [">", "="]),
      mc("Chọn dấu thích hợp: 200 000 000 ? 99 999 999", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: 3 405 000 ? 3 000 000 + 400 000 + 5 000", "=", ["<", ">"]),
      mc("Chọn dấu thích hợp: 650 700 ? 6 000 000 + 500 000 + 7 000", "<", [">", "="]),
      mc("Số lượng gia súc ở Việt Nam: trâu 2 332 800 con, bò 6 230 500 con, lợn 22 027 900 con. Loại nào được nuôi nhiều nhất?", "Lợn", ["Trâu", "Bò"]),
      mc("Số lượng gia súc ở Việt Nam: trâu 2 332 800 con, bò 6 230 500 con, lợn 22 027 900 con. Loại nào được nuôi ít nhất?", "Trâu", ["Bò", "Lợn"]),
      mc("Số nào lớn hơn: 37 003 847 hay 23 938 399?", "37 003 847", ["23 938 399", "Hai số bằng nhau"], "Hai số cùng có 8 chữ số, so sánh từ trái sang phải: 3 > 2 nên 37 003 847 lớn hơn."),
      mc("Sắp xếp các số 380 999 999; 99 999 999; 1 000 000 000; 380 000 982 theo thứ tự từ lớn đến bé. Số đứng thứ hai là:", "380 999 999", ["380 000 982", "99 999 999", "1 000 000 000"]),
      num(
        "Dùng 9 tấm thẻ 8, 0, 0, 9, 1, 7, 0, 3, 8. Số lớn nhất có chín chữ số lập được là số nào?",
        988731000,
        "Xếp các chữ số từ lớn đến bé: 9, 8, 8, 7, 3, 1, 0, 0, 0.",
      ),
      num(
        "Dùng 9 tấm thẻ 8, 0, 0, 9, 1, 7, 0, 3, 8. Số bé nhất có chín chữ số lập được là số nào?",
        100037889,
        "Chữ số đầu tiên phải khác 0 nên chọn 1, sau đó xếp 0, 0, 0, 3, 7, 8, 8, 9.",
      ),
    ],
  },

  // Bài 15. Làm quen với dãy số tự nhiên
  15: {
    intro:
      "Các số 0, 1, 2, 3, ... là các số tự nhiên. Số tự nhiên bé nhất là 0; không có số tự nhiên lớn nhất. Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.",
    questions: [
      tf("Số 1 000 000 là số tự nhiên lớn nhất.", false, "Không có số tự nhiên lớn nhất."),
      tf("Số 0 là số tự nhiên bé nhất.", true),
      tf("Dãy số 1, 2, 3, 4, 5, ... là dãy số tự nhiên.", false, "Dãy số tự nhiên bắt đầu từ số 0: 0, 1, 2, 3, ..."),
      tf("Số liền trước của một số bé hơn số liền sau của số đó 2 đơn vị.", true),
      num("Số liền trước của 10 000 là số nào?", 9999),
      num("Số liền sau của 9 999 là số nào?", 10000),
      num("Tìm số thích hợp để được ba số tự nhiên liên tiếp: 98, ?, 100.", 99),
      num("Ba số tự nhiên liên tiếp: ?, 100 000, ?. Số đứng trước 100 000 là:", 99999),
      num("Số ?  1 969, 1 970, 1 971, 1 972, ?", 1973),
      num("Số ?  2, 4, 6, 8, ?", 10),
      num("Số ?  5, 10, 15, 20, 25, ?", 30),
      mc("Xếp các số 10 001; 9 999; 9 666; 9 998 theo thứ tự từ bé đến lớn. Số đứng thứ ba là:", 9999, [9998, 9666, 10001]),
      mc("Từ cái cọc ghi số 100 đến cái cọc ghi số 999 có tất cả bao nhiêu cái cọc?", 900, [899, 901, 999], "999 – 100 + 1 = 900."),
    ],
  },

  // Bài 16. Luyện tập chung
  16: {
    intro: "Ôn lại hàng, lớp, giá trị theo vị trí của chữ số, so sánh và làm tròn số có nhiều chữ số.",
    questions: [
      num("Số 34 938 060: chữ số hàng chục triệu là chữ số nào?", 3),
      num("Viết số gồm 2 trăm triệu, 9 chục triệu, 9 triệu, 7 trăm nghìn, 9 chục nghìn, 2 nghìn, 4 trăm, 5 chục, 8 đơn vị.", 299792458),
      num("Tìm chữ số thích hợp thay cho dấu ?: 931 201 > 93?300", 0, "Số 931 201 > 930 300; nếu ? = 1 thì 931 300 > 931 201 (sai)."),
      num("Giá trị của chữ số 7 trong số 74 810 331 là bao nhiêu?", 70000000),
      num("Giá trị của chữ số 7 trong số 3 037 933 là bao nhiêu?", 7000),
      num("Giá trị của chữ số 7 trong số 981 381 070 là bao nhiêu?", 70),
      mc("Chọn dấu thích hợp: 22 222 222 ? 1 000 000 000", "<", [">", "="]),
      mc("Chọn dấu thích hợp: 4 300 000 ? 3 000 000 + 400 000", ">", ["<", "="]),
      num("Số ?  2 400 000 → 2 500 000 → 2 600 000 → ?", 2700000),
      num("Số ?  8 000 000 → 9 000 000 → ? → 11 000 000", 10000000),
      num("Làm tròn số tiền 417 999 đồng đến hàng trăm nghìn.", 400000),
      num("Làm tròn số tiền 5 029 075 đồng đến hàng trăm nghìn.", 5000000),
      mc("Trong các số 4 519; 100 000; 45 000; 99 405 207; 113 806 715, số nào có hai chữ số ở lớp triệu?", "99 405 207", ["113 806 715", "45 000", "100 000"]),
      num(
        "Rô-bốt dùng 7 tấm thẻ 0, 0, 0, 2, 3, 3, 3 để lập số có bảy chữ số. Biết lớp nghìn không chứa chữ số 0 và chữ số 2. Rô-bốt đã lập được số nào?",
        2333000,
        "Lớp nghìn gồm 3, 3, 3; chữ số 2 ở hàng triệu; lớp đơn vị là 0, 0, 0.",
      ),
    ],
  },
};
