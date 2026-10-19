import type { Question } from "../types";
import { mc, num, fr } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch11: Record<number, L> = {
  // Bài 60. Phép cộng phân số
  60: {
    intro:
      "Cộng hai phân số cùng mẫu số: cộng hai tử số với nhau và giữ nguyên mẫu số. Cộng hai phân số khác mẫu số: quy đồng mẫu số hai phân số rồi cộng hai phân số đó. Kết quả nên rút gọn thành phân số tối giản.",
    questions: [
      mc("Tính: {5/11} + {4/11} = ?", fr(9, 11), [fr(9, 22), fr(1, 11), fr(20, 11)]),
      mc("Tính: {17/20} + {9/20} = ? (rút gọn kết quả)", fr(13, 10), [fr(26, 40), fr(8, 20), fr(13, 20)], "{26/20} = {13/10}."),
      mc("Tính: {3/4} + {1/8} = ?", fr(7, 8), [fr(4, 12), fr(4, 8), fr(5, 8)], "{6/8} + {1/8} = {7/8}."),
      mc("Tính: {2/5} + {3/10} = ?", fr(7, 10), [fr(5, 15), fr(5, 10), fr(6, 10)]),
      mc("Tính: {5/6} + {1/9} = ?", fr(17, 18), [fr(6, 15), fr(6, 9), fr(16, 18)], "{15/18} + {2/18} = {17/18}."),
      mc("Tính: {3/8} + {5/12} = ?", fr(19, 24), [fr(8, 20), fr(8, 24), fr(15, 24)], "{9/24} + {10/24} = {19/24}."),
      mc("Tính: {7/10} + {3/4} = ?", fr(29, 20), [fr(10, 14), fr(10, 20), fr(21, 40)], "{14/20} + {15/20} = {29/20}."),
      num("Số ?  {5/13} + {?/13} = {11/13}", 6),
      num("Số ?  {3/7} + {2/?} = {5/7}", 7),
      mc("Buổi sáng Mai đọc được {3/10} quyển truyện, buổi chiều đọc được {2/5} quyển truyện. Cả hai buổi Mai đọc được bao nhiêu phần quyển truyện?", fr(7, 10) + " quyển truyện", [fr(5, 15) + " quyển truyện", fr(5, 10) + " quyển truyện", fr(6, 10) + " quyển truyện"]),
      mc("Chiếc bánh được chia cho ba bạn: Lan ăn {1/6} cái bánh, Mai ăn {1/3} cái bánh, Hà ăn {1/4} cái bánh. Cả ba bạn ăn được bao nhiêu phần cái bánh?", fr(3, 4) + " cái bánh", [fr(3, 13) + " cái bánh", fr(1, 2) + " cái bánh", fr(5, 6) + " cái bánh"], "{2/12} + {4/12} + {3/12} = {9/12} = {3/4}."),
      mc("Rút gọn rồi tính: {6/9} + {1/3} = ?", "1", [fr(7, 12), fr(7, 9), fr(2, 3)], "{6/9} = {2/3}; {2/3} + {1/3} = {3/3} = 1."),
      mc("Mẹ pha {2/3} l nước cam và {1/4} l nước chanh vào cùng một bình. Bình có tất cả bao nhiêu lít nước?", fr(11, 12) + " l", [fr(3, 7) + " l", fr(3, 12) + " l", fr(8, 12) + " l"]),
      mc("Tính: {1/2} + {1/3} + {1/6} = ?", "1", [fr(3, 11), fr(2, 3), fr(5, 6)], "{3/6} + {2/6} + {1/6} = {6/6} = 1."),
    ],
    adv: [
      mc("Tính nhanh: {1/2} + {1/4} + {1/8} + {1/8} = ?", "1", [fr(7, 8), fr(3, 4), fr(3, 14)]),
      mc("Tìm x biết: x – {2/5} = {1/3}. Phân số x là:", fr(11, 15), [fr(1, 15), fr(3, 8), fr(3, 5)], "x = {1/3} + {2/5} = {5/15} + {6/15}."),
      mc("Hai phân số cùng mẫu số 12 có tổng bằng {11/12}. Một trong hai phân số là {1/3}. Phân số còn lại là:", fr(7, 12), [fr(4, 12), fr(10, 12), fr(5, 12)], "{1/3} = {4/12}; {11/12} – {4/12} = {7/12}."),
      num("Số ?  {1/3} + {1/?} = {1/2}", 6, "{1/2} – {1/3} = {3/6} – {2/6} = {1/6}."),
      num("Tính nhanh: {7/8} + {5/6} + {1/8} + {1/6} = ?", 2, "Ghép ({7/8} + {1/8}) + ({5/6} + {1/6}) = 1 + 1."),
    ],
  },

  // Bài 61. Phép trừ phân số
  61: {
    intro:
      "Trừ hai phân số cùng mẫu số: trừ tử số của phân số thứ nhất cho tử số của phân số thứ hai và giữ nguyên mẫu số. Trừ hai phân số khác mẫu số: quy đồng mẫu số hai phân số rồi trừ hai phân số đó.",
    questions: [
      mc("Tính: {11/13} – {4/13} = ?", fr(7, 13), [fr(15, 13), fr(7, 26), fr(4, 13)]),
      mc("Tính: {9/7} – {4/7} = ?", fr(5, 7), [fr(13, 7), fr(5, 14), fr(4, 7)]),
      mc("Tính: {5/6} – {1/3} = ? (rút gọn kết quả)", fr(1, 2), [fr(4, 3), fr(3, 6), fr(4, 6)], "{5/6} – {2/6} = {3/6} = {1/2}."),
      mc("Tính: {7/9} – {2/3} = ?", fr(1, 9), [fr(5, 6), fr(5, 9), fr(1, 3)]),
      mc("Tính: {3/4} – {2/5} = ?", fr(7, 20), [fr(1, 1), fr(1, 20), fr(13, 20)], "{15/20} – {8/20} = {7/20}."),
      mc("Tính: {5/8} – {1/6} = ?", fr(11, 24), [fr(4, 2), fr(4, 24), fr(1, 24)], "{15/24} – {4/24} = {11/24}."),
      mc("Tính: {7/10} – {3/20} = ?", fr(11, 20), [fr(4, 10), fr(4, 20), fr(1, 2)]),
      num("Số ?  {9/11} – {?/11} = {4/11}", 5),
      mc("Trong chai có {5/6} l nước. Mai rót ra {1/4} l. Trong chai còn lại bao nhiêu lít nước?", fr(7, 12) + " l", [fr(4, 2) + " l", fr(4, 12) + " l", fr(1, 12) + " l"], "{10/12} – {3/12} = {7/12}."),
      mc("Băng giấy dài {7/8} m. Lan cắt đi {1/2} m. Băng giấy còn lại dài bao nhiêu mét?", fr(3, 8) + " m", [fr(6, 6) + " m", fr(6, 8) + " m", fr(1, 8) + " m"]),
      mc("Bể có {3/4} bể nước. Người ta dùng {1/3} bể. Trong bể còn lại bao nhiêu phần bể nước?", fr(5, 12), [fr(2, 1), fr(2, 12), fr(7, 12)]),
      mc("Rút gọn rồi tính: {6/8} – {1/4} = ?", fr(1, 2), [fr(5, 4), fr(5, 8), fr(3, 8)]),
      mc("Tính: 1 – {3/7} = ?", fr(4, 7), [fr(2, 7), fr(3, 7), fr(7, 4)]),
      mc("Mẹ có 1 m vải. Mẹ may khăn hết {2/5} m, may túi hết {3/10} m. Mẹ còn lại bao nhiêu mét vải?", fr(3, 10) + " m", [fr(7, 10) + " m", fr(1, 10) + " m", fr(1, 5) + " m"], "1 – {4/10} – {3/10} = {3/10}."),
    ],
    adv: [
      mc("Tính nhanh: {7/8} – {3/8} – {1/8} = ?", fr(3, 8), [fr(5, 8), fr(11, 8), fr(1, 8)]),
      mc("Tìm x biết: {5/6} – x = {1/4}. Phân số x là:", fr(7, 12), [fr(4, 2), fr(1, 12), fr(13, 12)], "x = {5/6} – {1/4} = {10/12} – {3/12}."),
      mc("Hiệu của hai phân số là {1/5}, số bé là {3/10}. Số lớn là:", fr(1, 2), [fr(1, 10), fr(4, 15), fr(3, 5)], "{3/10} + {2/10} = {5/10} = {1/2}."),
      num("Có số tự nhiên a duy nhất để {1/3} < {a/12} < {1/2}. Số a là:", 5, "{4/12} < {a/12} < {6/12}."),
      mc("Mỗi giờ vòi A chảy được {1/4} bể, vòi B chảy được {1/6} bể. Mỗi giờ vòi A chảy nhiều hơn vòi B bao nhiêu phần bể?", fr(1, 12) + " bể", [fr(5, 12) + " bể", fr(1, 2) + " bể", fr(1, 10) + " bể"]),
    ],
  },

  // Bài 62. Luyện tập chung
  62: {
    intro: "Ôn lại phép cộng, phép trừ phân số; cộng, trừ số tự nhiên với phân số và giải bài toán lời văn.",
    questions: [
      mc("Tính: {3/5} + {7/10} = ?", fr(13, 10), [fr(10, 15), fr(10, 10), fr(21, 50)]),
      mc("Tính: {11/12} – {5/6} = ?", fr(1, 12), [fr(6, 6), fr(6, 12), fr(5, 12)]),
      mc("Tính: {2/9} + {4/9} + {1/3} = ?", "1", [fr(7, 21), fr(7, 9), fr(7, 12)], "{2/9} + {4/9} + {3/9} = {9/9} = 1."),
      mc("Tính: 3 + {2/5} = ?", fr(17, 5), [fr(5, 5), fr(6, 5), fr(5, 15)]),
      mc("Tính: 4 – {3/8} = ?", fr(29, 8), [fr(1, 8), fr(13, 8), fr(35, 8)], "4 = {32/8}; {32/8} – {3/8} = {29/8}."),
      mc("Tính: {13/6} – 1 = ?", fr(7, 6), [fr(12, 6), fr(13, 5), fr(19, 6)]),
      mc("Một xe ô tô chạy được {2/9} quãng đường trong giờ đầu và {4/9} quãng đường trong giờ thứ hai. Còn lại bao nhiêu phần quãng đường chưa chạy?", fr(1, 3), [fr(2, 3), fr(6, 9), fr(5, 9)], "1 – {6/9} = {3/9} = {1/3}."),
      mc("Sợi dây dài {9/4} m. Người ta cắt đi một đoạn dài {5/4} m. Sợi dây còn lại dài:", "1 m", [fr(14, 4) + " m", fr(4, 8) + " m", fr(4, 9) + " m"], "{9/4} – {5/4} = {4/4} = 1."),
      mc("Lan có {3/4} số kẹo của cả hộp. Lan cho em {1/3} số kẹo của cả hộp. Lan còn lại bao nhiêu phần số kẹo của hộp?", fr(5, 12), [fr(2, 1), fr(2, 12), fr(7, 12)]),
      mc("Tính bằng cách thuận tiện: {7/9} + {2/9} + {5/7} = ?", fr(12, 7), [fr(14, 25), fr(10, 9), fr(5, 7)], "{7/9} + {2/9} = 1; 1 + {5/7} = {12/7}."),
      mc("Tính: {3/4} + {5/8} – {1/2} = ?", fr(7, 8), [fr(7, 14), fr(1, 8), fr(15, 8)], "{6/8} + {5/8} – {4/8}."),
      mc("Mai pha {1/2} l nước, Hà pha {2/3} l nước, Nam pha {5/6} l nước. Cả ba bạn pha được bao nhiêu lít nước?", "2 l", [fr(8, 11) + " l", fr(5, 3) + " l", fr(11, 6) + " l"], "{3/6} + {4/6} + {5/6} = {12/6} = 2."),
      num("Số ?  {5/6} – {?/12} = {1/4}", 7, "{10/12} – {3/12} = {7/12}."),
      mc("Chọn dấu thích hợp: {1/3} + {1/4} ? {5/6}", "<", [">", "="], "{7/12} < {10/12}."),
    ],
    adv: [
      mc("Tính nhanh: {1/2} + {1/6} + {1/12} + {1/20} + {1/30} = ?", fr(5, 6), [fr(5, 30), fr(1, 2), fr(3, 4)], "{1/2} = 1 – {1/2}; {1/6} = {1/2} – {1/3}; ... Tổng = 1 – {1/6}."),
      mc("Vòi A chảy đầy bể sau 4 giờ, vòi B chảy đầy bể sau 6 giờ. Nếu mở cả hai vòi thì mỗi giờ chảy được bao nhiêu phần bể?", fr(5, 12) + " bể", [fr(2, 10) + " bể", fr(1, 5) + " bể", fr(1, 12) + " bể"], "{1/4} + {1/6} = {3/12} + {2/12}."),
      mc("Hai người cùng đào một mương: người A mỗi giờ đào được {1/10} mương, người B mỗi giờ đào được {1/15} mương. Mỗi giờ cả hai đào được:", fr(1, 6) + " mương", [fr(2, 25) + " mương", fr(1, 25) + " mương", fr(1, 30) + " mương"], "{3/30} + {2/30} = {5/30} = {1/6}."),
      mc("Tính: {1/3} + {1/9} + {1/27} = ?", fr(13, 27), [fr(3, 39), fr(1, 3), fr(9, 27)], "{9/27} + {3/27} + {1/27}."),
      num("Số tự nhiên n lớn nhất sao cho {n/6} + {1/3} < 1 là:", 3, "{n/6} + {2/6} < 1 nên n + 2 < 6, tức n < 4."),
    ],
  },
};
