import type { Question } from "../types";
import { mc, num, tf, fr } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch10: Record<number, L> = {
  // Bài 53. Khái niệm phân số
  53: {
    intro:
      "Phân số có tử số (viết trên gạch ngang) và mẫu số (viết dưới gạch ngang, khác 0). Mẫu số cho biết số phần bằng nhau của cả hình; tử số cho biết số phần đã lấy.",
    questions: [
      mc("[[frac:3/8]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(3, 8), [fr(3, 5), fr(8, 3), fr(5, 8)]),
      mc("[[frac:5/6]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(5, 6), [fr(1, 6), fr(6, 5), fr(5, 11)]),
      mc("[[frac:4/10]]\nPhân số chỉ phần chưa tô màu của hình tròn là:", fr(6, 10), [fr(4, 10), fr(6, 4), fr(10, 6)]),
      mc("Trong phân số " + fr(7, 12) + ", mẫu số 12 cho biết:", "cả hình được chia thành 12 phần bằng nhau", ["đã lấy 12 phần", "còn lại 12 phần", "có 12 hình"]),
      mc("Phân số " + fr(11, 15) + " đọc là:", "mười một phần mười lăm", ["mười lăm phần mười một", "mười một mười lăm", "một phần mười lăm"]),
      mc("Viết phân số: ba phần mười hai.", fr(3, 12), [fr(12, 3), fr(3, 2), fr(1, 32)]),
      mc("Viết phân số: hai mươi phần chín mươi chín.", fr(20, 99), [fr(99, 20), fr(2, 99), fr(20, 9)]),
      mc("Hình chữ nhật được chia thành 9 phần bằng nhau, đã tô màu 4 phần. Phân số chỉ phần hình chưa tô màu là:", fr(5, 9), [fr(4, 9), fr(5, 4), fr(9, 5)]),
      num("Hàng có 15 ô vuông, đã tô màu {2/5} số ô vuông. Số ô vuông đã tô màu là bao nhiêu?", 15 / 5 * 2, "15 : 5 = 3; 3 × 2 = 6.", "ô"),
      num("Lớp 4A có 32 học sinh, {3/8} số học sinh thích bóng đá. Có bao nhiêu học sinh thích bóng đá?", 32 / 8 * 3, undefined, "học sinh"),
      mc("15 phút bằng bao nhiêu phần của 1 giờ?", fr(15, 60), [fr(1, 15), fr(60, 15), fr(15, 100)]),
      mc("Một tuần lễ có 7 ngày. Từ thứ Hai đến thứ Năm là 4 ngày, chiếm bao nhiêu phần của tuần lễ?", fr(4, 7), [fr(7, 4), fr(3, 7), fr(4, 11)]),
      mc("Phân số " + fr(8, 8) + " chỉ phần nào của hình?", "cả hình", ["một nửa hình", "không có phần nào", "một phần tám hình"]),
    ],
    adv: [
      num("Đàn gà có 40 con, trong đó {3/8} số gà là gà trống. Số gà mái là bao nhiêu con?", 40 - 40 / 8 * 3, "Gà trống: 40 : 8 × 3 = 15 con. Gà mái: 40 – 15 = 25 con.", "con"),
      num("{2/7} số cây trong vườn là 14 cây. Vườn có tất cả bao nhiêu cây?", 14 / 2 * 7, "Một phần bảy là 14 : 2 = 7 cây; cả vườn 7 × 7 = 49 cây.", "cây"),
      mc("Băng giấy chia thành 12 phần bằng nhau. Lan lấy 5 phần, Mai lấy 4 phần. Phân số chỉ phần băng giấy còn lại là:", fr(3, 12), [fr(9, 12), fr(5, 12), fr(4, 12)]),
      num("Có bao nhiêu phân số có mẫu số là 5 và tử số là số tự nhiên khác 0, bé hơn mẫu số?", 4, "Đó là " + fr(1, 5) + "; " + fr(2, 5) + "; " + fr(3, 5) + "; " + fr(4, 5) + "."),
      num("Có bao nhiêu phân số có tử số là 3 và mẫu số là số có một chữ số lớn hơn 3?", 6, "Mẫu số có thể là 4; 5; 6; 7; 8; 9."),
    ],
  },

  // Bài 54. Phân số và phép chia số tự nhiên
  54: {
    intro:
      "Thương của phép chia một số tự nhiên cho một số tự nhiên khác 0 có thể viết thành một phân số: tử số là số bị chia, mẫu số là số chia. Mọi số tự nhiên đều viết được thành phân số có mẫu số bằng 1.",
    questions: [
      mc("Chia đều 2 cái bánh cho 5 bạn. Mỗi bạn được bao nhiêu phần cái bánh?", fr(2, 5), [fr(5, 2), fr(1, 5), fr(2, 2)]),
      mc("Chia đều 7 cái bánh cho 3 bạn. Mỗi bạn được bao nhiêu phần cái bánh?", fr(7, 3), [fr(3, 7), fr(1, 3), fr(7, 7)]),
      mc("Thương 8 : 15 viết dưới dạng phân số là:", fr(8, 15), [fr(15, 8), fr(8, 8), fr(23, 15)]),
      mc("Thương 12 : 5 viết dưới dạng phân số là:", fr(12, 5), [fr(5, 12), fr(12, 12), fr(17, 5)]),
      mc("Viết số tự nhiên 9 dưới dạng phân số có mẫu số là 1:", fr(9, 1), [fr(1, 9), fr(9, 9), fr(10, 1)]),
      mc("Viết số tự nhiên 6 dưới dạng phân số có mẫu số là 4:", fr(24, 4), [fr(6, 4), fr(10, 4), fr(4, 6)]),
      num("Số ?  7 = {?/3}", 21),
      num("Tính: {18/6} = ?", 3),
      num("Tính: {45/9} = ?", 5),
      mc("Chia đều sợi dây dài 3 m cho 5 người. Mỗi người được bao nhiêu mét dây?", fr(3, 5) + " m", [fr(5, 3) + " m", fr(1, 5) + " m", fr(3, 3) + " m"]),
      mc("Rót đều 10 l dầu vào 4 chai. Mỗi chai chứa bao nhiêu lít dầu?", fr(10, 4) + " l", [fr(4, 10) + " l", fr(10, 10) + " l", fr(6, 4) + " l"]),
      tf("Phân số " + fr(9, 3) + " bằng 3.", true),
      mc("Phân số nào dưới đây lớn hơn 1?", fr(7, 5), [fr(5, 7), fr(4, 9), fr(1, 2)]),
    ],
    adv: [
      num("Số ?  {?/8} = 5", 40),
      mc("Chia đều 9 cái bánh cho 6 bạn. Mỗi bạn được số phần cái bánh (viết dưới dạng phân số tối giản) là:", fr(3, 2), [fr(9, 6), fr(2, 3), fr(6, 9)], "9 : 6 = {9/6} = {3/2}."),
      num("Tìm số tự nhiên x biết {x/4} = 6. Số x là:", 24),
      num("Tính: {24/6} + {20/5} = ?", 24 / 6 + 20 / 5),
      mc("Chia đều 5 cái pizza cho 4 bạn. Mỗi bạn được:", "1 cái pizza và " + fr(1, 4) + " cái pizza", ["chưa được 1 cái pizza", fr(4, 5) + " cái pizza", "2 cái pizza"], "{5/4} = 1 + {1/4}."),
    ],
  },

  // Bài 55. Tính chất cơ bản của phân số
  55: {
    intro:
      "Nếu nhân (hoặc chia hết) cả tử số và mẫu số của một phân số với (cho) cùng một số tự nhiên khác 0 thì được một phân số bằng phân số đã cho.",
    questions: [
      num("Số ?  {3/4} = {6/?}", 8),
      num("Số ?  {5/9} = {?/27}", 15),
      num("Số ?  {7/8} = {?/40}", 35),
      num("Số ?  {18/24} = {?/4}", 3),
      num("Số ?  {20/45} = {4/?}", 9),
      num("Số ?  {15/35} = {3/?}", 7),
      num("Số ?  {2/7} = {?/21}", 6),
      num("Số ?  {3/5} = {9/?}", 15),
      num("Số ?  {40/64} = {5/?}", 8),
      num("Số ?  {11/12} = {?/60}", 55),
      mc("Phân số nào dưới đây bằng " + fr(2, 3) + "?", fr(10, 15), [fr(10, 12), fr(4, 9), fr(3, 2)]),
      mc("Phân số nào dưới đây bằng " + fr(3, 4) + "?", fr(15, 20), [fr(15, 16), fr(6, 12), fr(9, 16)]),
      num("Số ?  {4/6} = {?/3}", 2),
      num("Số ?  {16/20} = {4/?}", 5),
    ],
    adv: [
      num("Phân số {3/7}: nếu mẫu số tăng thêm 14 thì phải tăng tử số thêm bao nhiêu đơn vị để giá trị phân số không đổi?", 6, "Mẫu số mới 21 = 7 × 3 nên tử số mới 3 × 3 = 9; 9 – 3 = 6."),
      num("Nhân cả tử số và mẫu số của phân số {5/8} với cùng một số tự nhiên để được phân số có tổng tử số và mẫu số bằng 65. Tử số của phân số mới là:", 25, "Tổng ban đầu 5 + 8 = 13; 65 : 13 = 5 nên nhân với 5: {25/40}."),
      num("Phân số {a/b} bằng {2/3} và a + b = 25. Số a là:", 10, "Tổng 25 gồm 5 phần: 25 : 5 = 5; a = 5 × 2 = 10."),
      num("Phân số bằng {4/9} có mẫu số hơn tử số 25 đơn vị. Tử số của phân số đó là:", 20, "Hiệu mẫu và tử của {4/9} là 5; 25 : 5 = 5; tử số là 4 × 5 = 20."),
      num("Số ?  {2/5} = {8/20} = {?/50}", 20),
    ],
  },

  // Bài 56. Rút gọn phân số
  56: {
    intro:
      "Rút gọn phân số là tìm một phân số mới bằng phân số ban đầu nhưng có tử số và mẫu số bé hơn. Cách làm: chia cả tử số và mẫu số cho cùng một số tự nhiên lớn hơn 1. Rút gọn đến khi được phân số tối giản.",
    questions: [
      mc("Rút gọn phân số {18/30} được phân số tối giản:", fr(3, 5), [fr(9, 15), fr(2, 3), fr(6, 10)]),
      mc("Rút gọn phân số {16/24} được phân số tối giản:", fr(2, 3), [fr(4, 6), fr(8, 12), fr(1, 3)]),
      mc("Rút gọn phân số {45/60} được phân số tối giản:", fr(3, 4), [fr(9, 12), fr(15, 20), fr(4, 5)]),
      mc("Rút gọn phân số {14/42} được phân số tối giản:", fr(1, 3), [fr(2, 6), fr(7, 21), fr(1, 6)]),
      mc("Rút gọn phân số {36/84} được phân số tối giản:", fr(3, 7), [fr(18, 42), fr(6, 14), fr(2, 7)]),
      mc("Rút gọn phân số {55/110} được phân số tối giản:", fr(1, 2), [fr(5, 10), fr(11, 22), fr(55, 2)]),
      mc("Rút gọn phân số {72/96} được phân số tối giản:", fr(3, 4), [fr(36, 48), fr(9, 12), fr(2, 3)]),
      mc("Phân số nào dưới đây là phân số tối giản?", fr(13, 20), [fr(12, 18), fr(15, 25), fr(14, 21)]),
      mc("Phân số nào dưới đây chưa là phân số tối giản?", fr(21, 35), [fr(3, 5), fr(7, 9), fr(11, 13)]),
      num("Phân số tối giản của {24/36} có tử số là bao nhiêu?", 2, "{24/36} = {2/3}."),
      mc("Tính: {6 × 14 / 21 × 10} = ?", fr(2, 5), [fr(14, 10), fr(6, 21), fr(3, 5)], "Rút gọn: 6 × 14 = 84 và 21 × 10 = 210; {84/210} = {2/5}."),
      mc("Tính: {8 × 9 × 5 / 15 × 12 × 4} = ?", fr(1, 2), [fr(2, 3), fr(3, 4), fr(1, 3)]),
      tf("{20/50} = {2/5}", true),
      mc("Rút gọn phân số {120/180} được phân số tối giản:", fr(2, 3), [fr(12, 18), fr(4, 6), fr(3, 4)]),
    ],
    adv: [
      num("Có bao nhiêu phân số tối giản có mẫu số là 12 và tử số là số tự nhiên khác 0, bé hơn 12?", 4, "Đó là " + fr(1, 12) + "; " + fr(5, 12) + "; " + fr(7, 12) + "; " + fr(11, 12) + "."),
      mc("Rút gọn phân số {2024/4048} được:", fr(1, 2), [fr(2, 3), fr(1, 4), fr(2024, 2)]),
      num("Phân số {a/30} khi rút gọn được {1/6}. Số a là:", 5),
      num("Phân số {a/b} có tổng tử số và mẫu số bằng 56 và rút gọn được {3/5}. Tử số a là:", 21, "Tổng 3 + 5 = 8; 56 : 8 = 7 nên phân số là {21/35}."),
      mc("Tính: {25 × 36 / 15 × 40} = ?", fr(3, 2), [fr(2, 3), fr(5, 6), fr(9, 10)]),
    ],
  },

  // Bài 57. Quy đồng mẫu số các phân số
  57: {
    intro:
      "Quy đồng mẫu số hai phân số là biến đổi chúng thành hai phân số bằng chúng và có cùng mẫu số. Nếu mẫu số của phân số này chia hết cho mẫu số của phân số kia thì lấy mẫu số lớn làm mẫu số chung; nếu không, có thể lấy tích hai mẫu số (hoặc số bé nhất chia hết cho cả hai mẫu số) làm mẫu số chung.",
    questions: [
      mc("Quy đồng mẫu số hai phân số {2/3} và {5/9}, ta được:", "{6/9} và {5/9}", ["{2/9} và {5/9}", "{3/9} và {5/9}", "{6/3} và {5/9}"]),
      mc("Quy đồng mẫu số hai phân số {5/6} và {3/4} (mẫu số chung là 12), ta được:", "{10/12} và {9/12}", ["{5/12} và {3/12}", "{10/12} và {3/12}", "{5/12} và {9/12}"]),
      mc("Quy đồng mẫu số hai phân số {1/6} và {3/8} (mẫu số chung là 24), ta được:", "{4/24} và {9/24}", ["{1/24} và {3/24}", "{6/24} và {8/24}", "{4/24} và {3/24}"]),
      mc("Quy đồng mẫu số hai phân số {7/10} và {2/15} (mẫu số chung là 30), ta được:", "{21/30} và {4/30}", ["{7/30} và {2/30}", "{14/30} và {6/30}", "{21/30} và {2/30}"]),
      mc("Quy đồng mẫu số hai phân số {5/6} và {7/12}, ta được:", "{10/12} và {7/12}", ["{5/12} và {7/12}", "{15/12} và {7/12}", "{10/6} và {7/12}"]),
      num("Mẫu số chung bé nhất khi quy đồng hai phân số {1/6} và {1/9} là:", 18),
      num("Mẫu số chung bé nhất khi quy đồng hai phân số {1/8} và {1/12} là:", 24),
      num("Mẫu số chung bé nhất khi quy đồng hai phân số {1/10} và {1/15} là:", 30),
      num("Số ?  {3/4} = {?/20}", 15),
      mc("Quy đồng mẫu số ba phân số {1/2}; {2/3} và {3/4}, ta được:", "{6/12}; {8/12} và {9/12}", ["{1/12}; {2/12} và {3/12}", "{6/12}; {4/12} và {9/12}", "{3/12}; {8/12} và {9/12}"]),
      mc("Rút gọn rồi quy đồng mẫu số {6/8} và {5/6}: rút gọn được {3/4} và {5/6}, quy đồng thành:", "{9/12} và {10/12}", ["{3/12} và {5/12}", "{9/12} và {5/12}", "{6/12} và {10/12}"]),
      mc("Quy đồng mẫu số hai phân số {4/5} và {7/20}, ta được:", "{16/20} và {7/20}", ["{4/20} và {7/20}", "{20/20} và {7/20}", "{16/5} và {7/20}"]),
      mc("Phân số có mẫu số là 36 và bằng {5/9} là:", fr(20, 36), [fr(5, 36), fr(15, 36), fr(25, 36)]),
    ],
    adv: [
      num("Mẫu số chung bé nhất khi quy đồng ba phân số {1/4}, {1/6} và {1/9} là:", 36),
      num("Quy đồng mẫu số hai phân số {5/12} và {7/18} với mẫu số chung bé nhất. Tử số của phân số thứ hai sau khi quy đồng là:", 14, "Mẫu số chung bé nhất là 36; {7/18} = {14/36}."),
      num("Phân số có mẫu số là 40 và bằng {3/8} có tử số là:", 15),
      mc("Mẫu số chung nào dưới đây dùng được để quy đồng hai phân số {1/6} và {3/8}?", 48, [36, 16, 12]),
      num("Quy đồng mẫu số {a/6} và {b/9} với mẫu số chung là 18 được {9/18} và {10/18}. Tổng a + b bằng:", 3 + 5, "a = 9 : 3 = 3 và b = 10 : 2 = 5."),
    ],
  },

  // Bài 58. So sánh phân số
  58: {
    intro:
      "Hai phân số cùng mẫu số: phân số nào có tử số lớn hơn thì lớn hơn. Hai phân số khác mẫu số: quy đồng mẫu số rồi so sánh. Phân số lớn hơn 1 khi tử số lớn hơn mẫu số; phân số bé hơn 1 khi tử số bé hơn mẫu số.",
    questions: [
      mc("Chọn dấu thích hợp: {3/7} ? {5/7}", "<", [">", "="]),
      mc("Chọn dấu thích hợp: {9/11} ? {4/11}", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: {2/3} ? {3/5}", ">", ["<", "="], "{10/15} và {9/15}."),
      mc("Chọn dấu thích hợp: {5/8} ? {3/4}", "<", [">", "="], "{5/8} và {6/8}."),
      mc("Chọn dấu thích hợp: {7/12} ? {5/8}", "<", [">", "="], "{14/24} và {15/24}."),
      mc("Chọn dấu thích hợp: {11/11} ? 1", "=", ["<", ">"]),
      mc("Chọn dấu thích hợp: {9/5} ? 1", ">", ["<", "="]),
      mc("Phân số lớn nhất trong các phân số {3/4}; {5/6}; {7/12} là:", fr(5, 6), [fr(3, 4), fr(7, 12), "Ba phân số bằng nhau"], "{9/12}; {10/12}; {7/12}."),
      mc("Sắp xếp các phân số {1/2}; {2/3}; {3/8} theo thứ tự từ bé đến lớn:", "{3/8}; {1/2}; {2/3}", ["{1/2}; {2/3}; {3/8}", "{2/3}; {1/2}; {3/8}", "{3/8}; {2/3}; {1/2}"], "{9/24}; {12/24}; {16/24}."),
      mc("Phân số bé nhất trong các phân số {4/5}; {7/10}; {3/4} là:", fr(7, 10), [fr(4, 5), fr(3, 4), "Ba phân số bằng nhau"], "{16/20}; {14/20}; {15/20}."),
      mc("Mai ăn {3/8} cái bánh, Lan ăn {1/4} cái bánh. Bạn nào ăn nhiều hơn?", "Mai", ["Lan", "Hai bạn ăn bằng nhau", "Không so sánh được"]),
      mc("Thùng A đựng {2/3} thùng dầu, thùng B đựng {5/8} thùng dầu (hai thùng như nhau). Thùng nào đựng nhiều dầu hơn?", "Thùng A", ["Thùng B", "Hai thùng bằng nhau", "Không so sánh được"]),
      mc("Chọn dấu thích hợp: {3/7} ? {3/5}", "<", [">", "="], "Hai phân số cùng tử số, mẫu số lớn hơn thì phân số bé hơn."),
      mc("Chọn dấu thích hợp: {4/9} ? {1/2}", "<", [">", "="], "{8/18} và {9/18}."),
    ],
    adv: [
      num("Có bao nhiêu phân số có mẫu số là 9, lớn hơn {1/3} và bé hơn {2/3}?", 2, "{3/9} < x < {6/9} nên x là {4/9} hoặc {5/9}."),
      mc("Phân số nào dưới đây nằm giữa {1/4} và {1/2}?", fr(3, 8), [fr(1, 8), fr(5, 8), fr(3, 4)], "{2/8} < {3/8} < {4/8}."),
      num("Số tự nhiên x lớn nhất sao cho {x/6} < {5/9} là:", 3, "{5/9} = {10/18} và {x/6} = {3 × x / 18}; cần 3 × x < 10 nên x lớn nhất là 3."),
      num("Có bao nhiêu số tự nhiên n để {n/5} lớn hơn {1/5} và bé hơn 1?", 3, "n = 2; 3; 4."),
      mc("Phân số lớn nhất trong các phân số {5/6}; {7/9}; {11/12}; {13/18} là:", fr(11, 12), [fr(5, 6), fr(7, 9), fr(13, 18)], "Mẫu số chung 36: 30; 28; 33; 26."),
    ],
  },

  // Bài 59. Luyện tập chung
  59: {
    intro: "Ôn lại: khái niệm phân số, phân số và phép chia, tính chất cơ bản, rút gọn, quy đồng mẫu số và so sánh phân số.",
    questions: [
      mc("[[frac:5/8]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(5, 8), [fr(3, 8), fr(8, 5), fr(5, 3)]),
      mc("Thương 11 : 7 viết dưới dạng phân số là:", fr(11, 7), [fr(7, 11), fr(4, 7), fr(11, 11)]),
      mc("Rút gọn phân số {28/42} được phân số tối giản:", fr(2, 3), [fr(14, 21), fr(4, 6), fr(3, 4)]),
      num("Số ?  {5/12} = {?/48}", 20),
      mc("Quy đồng mẫu số hai phân số {3/10} và {4/15} (mẫu số chung là 30), ta được:", "{9/30} và {8/30}", ["{3/30} và {4/30}", "{9/30} và {4/30}", "{6/30} và {8/30}"]),
      mc("Chọn dấu thích hợp: {7/9} ? {5/6}", "<", [">", "="], "{14/18} và {15/18}."),
      mc("Phân số lớn nhất trong các phân số {2/3}; {3/4}; {5/8} là:", fr(3, 4), [fr(2, 3), fr(5, 8), "Ba phân số bằng nhau"], "{16/24}; {18/24}; {15/24}."),
      num("Lớp 4B có 36 học sinh, trong đó {5/9} số học sinh là nữ. Số học sinh nam là bao nhiêu?", 36 - 36 / 9 * 5, undefined, "học sinh"),
      mc("Tính: {9 × 14 / 21 × 12} = ?", fr(1, 2), [fr(2, 3), fr(3, 4), fr(1, 3)]),
      tf("Hai phân số {12/18} và {2/3} bằng nhau.", true),
      num("Với mọi số tự nhiên n khác 0, phân số {n/n} bằng:", 1),
      mc("Viết số tự nhiên 5 dưới dạng phân số có mẫu số là 7:", fr(35, 7), [fr(5, 7), fr(7, 5), fr(12, 7)]),
      num("{3/5} số viên kẹo trong hộp là 24 viên. Hộp có tất cả bao nhiêu viên kẹo?", 24 / 3 * 5, "Một phần năm là 24 : 3 = 8 viên; cả hộp 8 × 5 = 40 viên.", "viên"),
    ],
    adv: [
      num("Cửa hàng có 120 kg gạo, đã bán {3/8} số gạo. Cửa hàng còn lại bao nhiêu ki-lô-gam gạo?", 120 - 120 / 8 * 3, undefined, "kg"),
      num("Có bao nhiêu phân số bằng {2/5} mà tử số và mẫu số đều là số có hai chữ số?", 15, "Phân số có dạng {2k/5k} với 2k ≥ 10 và 5k ≤ 99, tức k = 5; 6; ...; 19."),
      num("Số ?  {x/18} = {10/12}. Số x là:", 15),
      num("Trong 60 học sinh, {1/3} số học sinh thích bóng đá, {1/4} số học sinh thích bơi, còn lại thích cờ vua. Số học sinh thích cờ vua là:", 60 - 60 / 3 - 60 / 4, undefined, "học sinh"),
      num("Có bao nhiêu phân số có mẫu số là 10, lớn hơn {2/5} và bé hơn {3/5}?", 1, "{4/10} < x < {6/10} nên x = {5/10}."),
    ],
  },
};
