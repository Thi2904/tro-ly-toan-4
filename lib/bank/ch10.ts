import type { Question } from "../types";
import { mc, num, tf, fr } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch10: Record<number, L> = {
  // Bài 53. Khái niệm phân số
  53: {
    intro:
      "Phân số có tử số (viết trên gạch ngang) và mẫu số (viết dưới gạch ngang, khác 0). Mẫu số cho biết số phần bằng nhau của cả hình; tử số cho biết số phần đã lấy.",
    questions: [
      mc("[[frac:1/6]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(1, 6), [fr(1, 5), fr(6, 1), fr(5, 6)]),
      mc("[[frac:2/6]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(2, 6), [fr(2, 4), fr(6, 2), fr(4, 6)]),
      mc("Trong phân số " + fr(2, 6) + ", mẫu số là:", 6, [2, 8, 4]),
      mc("Trong phân số " + fr(4, 7) + ", tử số là:", 4, [7, 3, 11]),
      mc("Phân số " + fr(2, 3) + " đọc là:", "hai phần ba", ["ba phần hai", "hai ba", "hai phần sáu"]),
      mc("Phân số " + fr(5, 8) + " đọc là:", "năm phần tám", ["tám phần năm", "năm tám", "ba phần tám"]),
      mc("Viết phân số: bảy phần mười chín.", fr(7, 19), [fr(19, 7), fr(7, 10), fr(17, 9)]),
      mc("Viết phân số: chín phần mười.", fr(9, 10), [fr(10, 9), fr(9, 19), fr(1, 10)]),
      mc("Viết phân số: mười bảy phần hai mươi ba.", fr(17, 23), [fr(23, 17), fr(7, 23), fr(17, 3)]),
      mc("Viết phân số: hai mươi lăm phần năm mươi tám.", fr(25, 58), [fr(58, 25), fr(25, 5), fr(5, 58)]),
      num("Phân số có tử số là 3 và mẫu số là 8. Mẫu số của phân số đó là số nào?", 8),
      num("Đã tô màu {3/4} số bông hoa. Hình có 4 bông hoa thì đã tô màu mấy bông?", 3, undefined, "bông"),
      num("Đã tô màu {3/4} số bông hoa. Hình có 8 bông hoa thì đã tô màu mấy bông?", 6, "8 : 4 = 2; 2 × 3 = 6.", "bông"),
      mc("Bức tường được chia thành 10 phần bằng nhau, đã sơn màu 7 phần. Phân số chỉ phần bức tường chưa sơn màu là:", fr(3, 10), [fr(7, 10), fr(3, 7), fr(10, 3)]),
      mc("Bức tường được chia thành 10 phần bằng nhau, đã sơn màu 7 phần. Phân số chỉ phần bức tường đã sơn màu là:", fr(7, 10), [fr(3, 10), fr(7, 3), fr(10, 7)]),
    ],
  },

  // Bài 54. Phân số và phép chia số tự nhiên
  54: {
    intro:
      "Thương của phép chia một số tự nhiên cho một số tự nhiên khác 0 có thể viết thành một phân số: tử số là số bị chia, mẫu số là số chia. Mọi số tự nhiên đều viết được thành phân số có mẫu số bằng 1.",
    questions: [
      mc("Chia đều 3 cái bánh cho 4 bạn. Mỗi bạn được bao nhiêu phần cái bánh?", fr(3, 4), [fr(4, 3), fr(1, 4), fr(3, 3)]),
      mc("Chia đều 5 cái bánh cho 4 bạn. Mỗi bạn được bao nhiêu phần cái bánh?", fr(5, 4), [fr(4, 5), fr(1, 4), fr(5, 5)]),
      mc("Thương 5 : 9 viết dưới dạng phân số là:", fr(5, 9), [fr(9, 5), fr(5, 5), fr(14, 9)]),
      mc("Thương 13 : 17 viết dưới dạng phân số là:", fr(13, 17), [fr(17, 13), fr(13, 13), fr(30, 17)]),
      mc("Thương 72 : 25 viết dưới dạng phân số là:", fr(72, 25), [fr(25, 72), fr(72, 72), fr(97, 25)]),
      mc("Thương 9 : 4 viết dưới dạng phân số là:", fr(9, 4), [fr(4, 9), fr(9, 9), fr(5, 4)]),
      num("Viết thành số tự nhiên: 18 : 9 = {18/9} = ?", 2),
      num("Viết thành số tự nhiên: 20 : 5 = {20/5} = ?", 4),
      num("Viết thành số tự nhiên: 42 : 42 = ?", 1),
      num("Viết thành số tự nhiên: 0 : 6 = ?", 0),
      mc("Viết số 20 dưới dạng phân số có mẫu số bằng 1:", fr(20, 1), [fr(1, 20), fr(20, 20), fr(2, 10)]),
      mc("Viết số 0 dưới dạng phân số có mẫu số bằng 1:", fr(0, 1), [fr(1, 0), fr(1, 1), fr(0, 0)]),
      mc("Có 2 thùng nước như nhau đựng đầy nước, lấy hết nước của 2 thùng chia đều vào 5 can. Lượng nước ở mỗi can bằng mấy phần lượng nước của một thùng?", fr(2, 5) + " thùng", [fr(5, 2) + " thùng", fr(5, 7) + " thùng", fr(2, 7) + " thùng"]),
      mc("Rót hết 8 l nước được đầy 5 ca như nhau. Mỗi ca có bao nhiêu lít nước?", fr(8, 5) + " l", [fr(5, 8) + " l", fr(8, 8) + " l", fr(13, 5) + " l"]),
      mc("Cân 2 túi gạo như nhau cân bằng với quả cân 2 kg và 5 kg. Mỗi túi gạo cân nặng bao nhiêu ki-lô-gam?", fr(7, 2) + " kg", [fr(2, 7) + " kg", fr(7, 1) + " kg", fr(5, 2) + " kg"]),
      mc("Ba phần tư ki-lô-gam viết là:", fr(3, 4) + " kg", [fr(4, 3) + " kg", fr(3, 3) + " kg", fr(1, 4) + " kg"]),
      mc("Hai phần năm mét vuông viết là:", fr(2, 5) + " m²", [fr(5, 2) + " m²", fr(2, 2) + " m²", fr(3, 5) + " m²"]),
    ],
  },

  // Bài 55. Tính chất cơ bản của phân số
  55: {
    intro:
      "Nếu nhân (hoặc chia hết) cả tử số và mẫu số của một phân số với (cho) cùng một số tự nhiên khác 0 thì được một phân số bằng phân số đã cho.",
    questions: [
      num("Số ?  {2/5} = {2 × 3 / 5 × 3} = {6/?}", 15),
      num("Số ?  {4/7} = {4 × 2 / 7 × 2} = {?/14}", 8),
      num("Số ?  {13/54} = {13 × 3 / 54 × 3} = {39/?}", 162),
      num("Số ?  {8/20} = {8 : 4 / 20 : 4} = {2/?}", 5),
      num("Số ?  {10/16} = {10 : 2 / 16 : 2} = {?/8}", 5),
      num("Số ?  {25/65} = {25 : 5 / 65 : 5} = {5/?}", 13),
      num("Số ?  {2/5} = {10/?}", 25),
      num("Số ?  {36/40} = {9/?}", 10),
      num("Số ?  {2/3} = {?/6}", 4),
      num("Số ?  {6/15} = {?/5}", 2),
      num("Số ?  {12/18} = {2/?}", 3),
      num("Số ?  {7/9} = {?/54}", 42),
      mc("Cùng giảm 3 lần tử số và mẫu số của phân số {6/9}, ta được phân số nào bằng nó?", fr(2, 3), [fr(2, 9), fr(6, 3), fr(3, 2)]),
      num("Biết a = 12, b = 4. Tính (a × 3) : (b × 3).", (12 * 3) / (4 * 3)),
      num("Số ?  {8/12} = {?/3}", 2, "Chia cả tử số và mẫu số cho 4."),
      num("Số ?  {2/3} = {6/9} = {12/18} = {30/?}", 45),
    ],
  },

  // Bài 56. Rút gọn phân số
  56: {
    intro:
      "Rút gọn phân số là tìm một phân số mới bằng phân số ban đầu nhưng có tử số và mẫu số bé hơn. Cách làm: chia cả tử số và mẫu số cho cùng một số tự nhiên lớn hơn 1. Rút gọn đến khi được phân số tối giản.",
    questions: [
      mc("Rút gọn phân số {20/35} được:", fr(4, 7), [fr(5, 7), fr(2, 3), fr(10, 17)]),
      mc("Rút gọn phân số {9/21} được:", fr(3, 7), [fr(1, 3), fr(9, 7), fr(3, 21)]),
      mc("Rút gọn phân số {10/15} được:", fr(2, 3), [fr(5, 3), fr(1, 5), fr(5, 6)]),
      mc("Rút gọn phân số {4/6} được:", fr(2, 3), [fr(1, 2), fr(4, 3), fr(1, 3)]),
      mc("Rút gọn phân số {10/12} được:", fr(5, 6), [fr(3, 5), fr(5, 12), fr(2, 3)]),
      mc("Rút gọn phân số {9/15} được:", fr(3, 5), [fr(9, 5), fr(1, 5), fr(3, 15)]),
      mc("Rút gọn phân số {5/20} được:", fr(1, 4), [fr(5, 4), fr(1, 5), fr(2, 5)]),
      mc("Phân số nào dưới đây là phân số tối giản?", fr(2, 3), [fr(10, 15), fr(7, 14), fr(9, 21)]),
      mc("Phân số nào dưới đây chưa tối giản?", fr(7, 14), [fr(2, 3), fr(5, 17), fr(1, 10)]),
      mc("Rút gọn phân số {12/48} được phân số tối giản:", fr(1, 4), [fr(2, 8), fr(3, 12), fr(6, 24)]),
      mc("Rút gọn phân số {80/100} được phân số tối giản:", fr(4, 5), [fr(8, 10), fr(40, 50), fr(2, 5)]),
      mc("Rút gọn phân số {75/125} được phân số tối giản:", fr(3, 5), [fr(15, 25), fr(5, 3), fr(1, 5)]),
      mc("Rút gọn phân số {48/60} được phân số tối giản:", fr(4, 5), [fr(24, 30), fr(12, 15), fr(3, 5)]),
      mc("Tính: {12 × 11 × 13 / 13 × 17 × 11} = ?", fr(12, 17), [fr(11, 17), fr(13, 17), fr(12, 11)]),
      mc("Tính: {49 × 16 × 31 / 16 × 49 × 37} = ?", fr(31, 37), [fr(37, 31), fr(16, 37), fr(49, 37)]),
      mc("Thỏ mẹ chia một giỏ cà rốt: thỏ nâu được {5/10} giỏ, thỏ xám được {1/4} giỏ, thỏ trắng được {25/100} giỏ. Hai thỏ con nào được số phần giỏ cà rốt bằng nhau?", "Thỏ xám và thỏ trắng", ["Thỏ nâu và thỏ xám", "Thỏ nâu và thỏ trắng", "Cả ba thỏ bằng nhau"], "{25/100} rút gọn bằng {1/4}."),
    ],
  },

  // Bài 57. Quy đồng mẫu số các phân số
  57: {
    intro:
      "Quy đồng mẫu số hai phân số là biến đổi chúng thành hai phân số bằng chúng và có cùng mẫu số. Nếu mẫu số của phân số này chia hết cho mẫu số của phân số kia thì lấy mẫu số lớn làm mẫu số chung.",
    questions: [
      mc("Quy đồng mẫu số hai phân số {1/4} và {3/8}, ta được:", "{2/8} và {3/8}", ["{1/8} và {3/8}", "{4/8} và {3/8}", "{1/4} và {6/8}"]),
      mc("Quy đồng mẫu số hai phân số {3/4} và {5/12}, ta được:", "{9/12} và {5/12}", ["{6/12} và {5/12}", "{3/12} và {5/12}", "{12/16} và {5/12}"]),
      mc("Quy đồng mẫu số hai phân số {5/9} và {11/18}, ta được:", "{10/18} và {11/18}", ["{5/18} và {11/18}", "{15/18} và {11/18}", "{10/9} và {11/18}"]),
      mc("Quy đồng mẫu số hai phân số {13/60} và {9/20}, ta được:", "{13/60} và {27/60}", ["{13/60} và {18/60}", "{26/60} và {9/60}", "{13/20} và {9/20}"]),
      mc("Phân số có mẫu số là 12 và bằng {2/3} là:", fr(8, 12), [fr(6, 12), fr(9, 12), fr(4, 12)]),
      mc("Phân số có mẫu số là 12 và bằng {3/4} là:", fr(9, 12), [fr(6, 12), fr(8, 12), fr(12, 12)]),
      mc("Quy đồng mẫu số hai phân số {5/6} và {11/24}, ta được:", "{20/24} và {11/24}", ["{10/24} và {11/24}", "{15/24} và {11/24}", "{5/24} và {11/24}"]),
      mc("Quy đồng mẫu số hai phân số {7/15} và {19/45}, ta được:", "{21/45} và {19/45}", ["{14/45} và {19/45}", "{7/45} và {19/45}", "{35/45} và {19/45}"]),
      mc("Quy đồng mẫu số hai phân số {2/3} và {77/300}, ta được:", "{200/300} và {77/300}", ["{100/300} và {77/300}", "{66/300} và {77/300}", "{20/300} và {77/300}"]),
      mc("Rút gọn rồi quy đồng mẫu số {2/36} và {8/12}: rút gọn được {1/18} và {2/3}, quy đồng thành:", "{1/18} và {12/18}", ["{1/18} và {6/18}", "{2/18} và {12/18}", "{1/3} và {2/3}"]),
      mc("Phân số nào sau đây có mẫu số là 72 và bằng {2/9}?", fr(16, 72), [fr(18, 72), fr(14, 72), fr(4, 72)]),
      mc("Quy đồng mẫu số ba phân số {2/3}; {3/4} và {7/12}, ta được:", "{8/12}; {9/12} và {7/12}", ["{6/12}; {9/12} và {7/12}", "{8/12}; {6/12} và {7/12}", "{4/12}; {9/12} và {7/12}"]),
      mc("Quy đồng mẫu số ba phân số {3/5}; {4/7} và {9/35}, ta được:", "{21/35}; {20/35} và {9/35}", ["{15/35}; {20/35} và {9/35}", "{21/35}; {28/35} và {9/35}", "{3/35}; {4/35} và {9/35}"]),
      mc("Viết 2; {1/6}; {3/4} thành ba phân số đều có mẫu số là 12: ta được:", "{24/12}; {2/12}; {9/12}", ["{2/12}; {2/12}; {9/12}", "{24/12}; {1/12}; {3/12}", "{12/12}; {2/12}; {9/12}"]),
    ],
  },

  // Bài 58. So sánh phân số
  58: {
    intro:
      "Hai phân số cùng mẫu số: phân số nào có tử số lớn hơn thì lớn hơn. Hai phân số khác mẫu số: quy đồng mẫu số rồi so sánh. Hai phân số cùng tử số: phân số nào có mẫu số bé hơn thì lớn hơn. Phân số có tử bé hơn mẫu thì bé hơn 1; tử lớn hơn mẫu thì lớn hơn 1; tử bằng mẫu thì bằng 1.",
    questions: [
      mc("Chọn dấu thích hợp: {5/8} ? {3/8}", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: {4/7} ? {6/7}", "<", [">", "="]),
      mc("Chọn dấu thích hợp: {12/15} ? 1", "<", [">", "="]),
      mc("Chọn dấu thích hợp: {9/7} ? 1", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: {3/3} ? 1", "=", ["<", ">"]),
      mc("Chọn dấu thích hợp: {99/100} ? 1", "<", [">", "="]),
      mc("Sắp xếp {15/19}; {7/19}; {17/19}; {5/19} theo thứ tự từ bé đến lớn. Phân số đứng đầu là:", fr(5, 19), [fr(7, 19), fr(15, 19), fr(17, 19)]),
      mc("Chọn dấu thích hợp: {4/5} ? {7/10}", ">", ["<", "="], "{4/5} = {8/10} > {7/10}."),
      mc("Chọn dấu thích hợp: {3/4} ? {6/8}", "=", ["<", ">"]),
      mc("Chọn dấu thích hợp: {7/8} ? {3/4}", ">", ["<", "="], "{3/4} = {6/8} < {7/8}."),
      mc("Ốc sên nâu bò {3/5} m, ốc sên vàng bò {1/2} m, ốc sên đen bò {7/10} m. Ốc sên nào bò đoạn đường dài nhất?", "Ốc sên đen", ["Ốc sên nâu", "Ốc sên vàng", "Ba con bằng nhau"], "{6/10}; {5/10}; {7/10}."),
      mc("Chọn dấu thích hợp: {5/6} ? {5/12}", ">", ["<", "="], "Cùng tử số, mẫu số bé hơn thì phân số lớn hơn."),
      mc("Chọn dấu thích hợp: {9/20} ? {9/10}", "<", [">", "="]),
      mc("Các bình chứa {3/4} l, {5/4} l, {5/8} l, {6/8} l nước. Bình nào có lượng nước ít nhất?", "Bình chứa {5/8} l", ["Bình chứa {3/4} l", "Bình chứa {5/4} l", "Bình chứa {6/8} l"]),
      mc("Chọn dấu thích hợp: {13/18} ? {2/3}", ">", ["<", "="], "{2/3} = {12/18}."),
      mc("Chọn dấu thích hợp: {27/25} ? 1", ">", ["<", "="]),
    ],
  },

  // Bài 59. Luyện tập chung
  59: {
    intro: "Ôn lại: tính chất cơ bản của phân số, rút gọn, quy đồng mẫu số và so sánh phân số.",
    questions: [
      num("Số ?  {56/42} = {28/21} = {?/3}", 4),
      num("Số ?  {16/24} = {2/?}", 3, "Chia cả tử số và mẫu số cho 8: 16 : 8 = 2; 24 : 8 = 3."),
      mc("Rút gọn phân số {40/25} được:", fr(8, 5), [fr(4, 5), fr(20, 5), fr(5, 8)]),
      mc("Rút gọn phân số {63/81} được:", fr(7, 9), [fr(9, 7), fr(21, 27), fr(3, 9)]),
      mc("Rút gọn phân số {36/60} được:", fr(3, 5), [fr(9, 15), fr(6, 10), fr(18, 30)]),
      mc("Phân số {5/6} bằng phân số nào dưới đây?", fr(25, 30), [fr(10, 14), fr(18, 15), fr(24, 28)]),
      mc("Tính: {5 × 6 × 12 / 6 × 12 × 7} = ?", fr(5, 7), [fr(7, 5), fr(6, 7), fr(12, 7)]),
      mc("Tính: {9 × 8 × 15 / 15 × 9 × 16} = ?", fr(1, 2), [fr(8, 16), fr(2, 1), fr(1, 4)]),
      mc("Quy đồng mẫu số hai phân số {1/6} và {7/18}, ta được:", "{3/18} và {7/18}", ["{1/18} và {7/18}", "{6/18} và {7/18}", "{2/18} và {7/18}"]),
      mc("Quy đồng mẫu số hai phân số {4/5} và {11/60}, ta được:", "{48/60} và {11/60}", ["{24/60} và {11/60}", "{40/60} và {11/60}", "{12/60} và {11/60}"]),
      mc("Quy đồng mẫu số hai phân số {7/25} và {3/100}, ta được:", "{28/100} và {3/100}", ["{14/100} và {3/100}", "{21/100} và {3/100}", "{7/100} và {3/100}"]),
      mc("Chọn dấu thích hợp: {21/23} ? {19/23}", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: {20/36} ? {5/9}", "=", ["<", ">"]),
      mc("Chọn dấu thích hợp: {26/13} ? 2", "=", ["<", ">"]),
      mc("Mai cho Rô-bốt {1/3} số viên bi và cho Việt {4/9} số viên bi. Ai được Mai cho nhiều bi hơn?", "Việt", ["Rô-bốt", "Hai bạn bằng nhau"], "{1/3} = {3/9} < {4/9}."),
      mc("Một cái bánh pi-da: Việt ăn {1/2}, Mi ăn {1/6}, Mai ăn {1/3} cái bánh. Bạn nào ăn ít bánh nhất?", "Mi", ["Việt", "Mai"]),
      mc("Sắp xếp {17/16}; {3/4}; {25/32}; {21/32}; {9/8}; {11/16} theo thứ tự từ bé đến lớn. Phân số đứng đầu là:", fr(21, 32), [fr(11, 16), fr(3, 4), fr(25, 32)], "Quy đồng mẫu số 32: {34/32}; {24/32}; {25/32}; {21/32}; {36/32}; {22/32}."),
      mc("Bờm có quả bưởi nặng {9/8} kg, Cuội có quả thanh long nặng {31/32} kg. Cuội nói quả của mình nặng hơn. Cuội nói đúng hay sai?", "Sai", ["Đúng"], "{9/8} > 1 còn {31/32} < 1."),
    ],
  },
};
