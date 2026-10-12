import type { Question } from "../types";
import { mc, num, fr } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch11: Record<number, L> = {
  // Bài 60. Phép cộng phân số
  60: {
    intro:
      "Cộng hai phân số cùng mẫu số: cộng hai tử số với nhau và giữ nguyên mẫu số. Cộng hai phân số khác mẫu số: quy đồng mẫu số hai phân số rồi cộng hai phân số đó.",
    questions: [
      mc("Tính: {1/5} + {2/5} = ?", fr(3, 5), [fr(3, 10), fr(2, 5), fr(1, 5)]),
      mc("Tính: {2/7} + {4/7} = ?", fr(6, 7), [fr(6, 14), fr(8, 7), fr(2, 7)]),
      mc("Tính: {23/13} + {8/13} = ?", fr(31, 13), [fr(31, 26), fr(15, 13), fr(23, 8)]),
      mc("Tính: {27/125} + {16/125} = ?", fr(43, 125), [fr(43, 250), fr(11, 125), fr(27, 16)]),
      num("Số ?  {7/15} + {?/15} = {10/15}", 3),
      num("Số ?  {9/8} + {2/?} = {11/8}", 8),
      num("Số ?  {6/21} + {9/21} = {15/?}", 21),
      mc("Ngày thứ nhất Mai đọc được {2/7} cuốn sách, ngày thứ hai đọc thêm {3/7} cuốn sách. Cả hai ngày Mai đọc được bao nhiêu phần cuốn sách?", fr(5, 7) + " cuốn sách", [fr(1, 7) + " cuốn sách", fr(5, 14) + " cuốn sách", fr(6, 7) + " cuốn sách"]),
      mc("Cô Ba dùng {7/15} tấm vải để may quần, {4/15} tấm vải để may áo và {2/15} tấm vải để may túi. Cô đã dùng tất cả bao nhiêu phần tấm vải?", fr(13, 15), [fr(13, 45), fr(11, 15), fr(1, 15)]),
      mc("Tính: {1/8} + {1/2} = ?", fr(5, 8), [fr(2, 10), fr(2, 8), fr(3, 8)]),
      mc("Tính: {3/5} + {1/10} = ?", fr(7, 10), [fr(4, 15), fr(4, 10), fr(1, 2)]),
      mc("Tính: {8/9} + {2/3} = ?", fr(14, 9), [fr(10, 12), fr(10, 9), fr(10, 27)]),
      mc("Tính: {1/2} + {5/8} = ?", fr(9, 8), [fr(6, 10), fr(6, 8), fr(7, 8)]),
      mc("Rút gọn rồi tính: {21/15} + {2/5} = ?", fr(9, 5), [fr(23, 20), fr(7, 5), fr(23, 15)], "{21/15} = {7/5}; {7/5} + {2/5} = {9/5}."),
      mc("Hai nhóm công nhân cùng sửa một đoạn đường: nhóm thứ nhất sửa {3/10} đoạn đường, nhóm thứ hai sửa {1/5} đoạn đường. Hai nhóm sửa được bao nhiêu phần đoạn đường?", fr(1, 2), [fr(4, 15), fr(4, 10), fr(3, 5)], "{3/10} + {2/10} = {5/10} = {1/2}."),
      mc("Tính: {3/11} + {14/11} = ?", fr(17, 11), [fr(17, 22), fr(11, 11), fr(42, 11)]),
      mc("Tính: {1/16} + {3/4} = ?", fr(13, 16), [fr(4, 20), fr(4, 16), fr(1, 4)]),
      mc("Việt dùng {1/2} số tiền của mình mua một quyển vở, sau đó dùng thêm {1/6} số tiền mua bút. Việt đã dùng bao nhiêu phần số tiền?", fr(2, 3), [fr(2, 8), fr(1, 3), fr(3, 4)], "{3/6} + {1/6} = {4/6} = {2/3}."),
      mc("Mai pha được {1/4} l nước cam, Việt pha được {5/6} l, Nam pha được {11/12} l. Cả ba bạn pha được bao nhiêu lít nước cam?", "2" + " l", [fr(17, 12) + " l", fr(7, 12) + " l", fr(3, 4) + " l"], "{3/12} + {10/12} + {11/12} = {24/12} = 2."),
    ],
  },

  // Bài 61. Phép trừ phân số
  61: {
    intro:
      "Trừ hai phân số cùng mẫu số: trừ tử số của phân số thứ nhất cho tử số của phân số thứ hai và giữ nguyên mẫu số. Trừ hai phân số khác mẫu số: quy đồng mẫu số hai phân số rồi trừ hai phân số đó.",
    questions: [
      mc("Tính: {7/8} – {2/8} = ?", fr(5, 8), [fr(9, 8), fr(5, 16), fr(2, 8)]),
      mc("Tính: {9/11} – {3/11} = ?", fr(6, 11), [fr(12, 11), fr(6, 22), fr(3, 11)]),
      mc("Tính: {10/4} – {5/4} = ?", fr(5, 4), [fr(15, 4), fr(5, 8), fr(5, 16)]),
      mc("Tính: {22/15} – {8/15} = ?", fr(14, 15), [fr(30, 15), fr(14, 30), fr(8, 15)]),
      mc("Tính: {7/8} – {1/4} = ?", fr(5, 8), [fr(6, 4), fr(6, 8), fr(3, 8)], "{1/4} = {2/8}; {7/8} – {2/8} = {5/8}."),
      mc("Tính: {1/2} – {5/12} = ?", fr(1, 12), [fr(4, 10), fr(1, 10), fr(11, 12)]),
      mc("Tính: {3/4} – {1/8} = ?", fr(5, 8), [fr(2, 4), fr(2, 8), fr(4, 4)]),
      mc("Tính: {2/6} – {5/18} = ?", fr(1, 18), [fr(3, 12), fr(1, 6), fr(3, 18)]),
      mc("Tính: {2/5} – {3/20} = ?", fr(1, 4), [fr(5, 15), fr(1, 5), fr(1, 20)], "{8/20} – {3/20} = {5/20} = {1/4}."),
      mc("Dế trũi có {3/8} cái lá cỏ, cho dế mèn {1/4} cái lá cỏ đó. Dế trũi còn lại bao nhiêu phần cái lá cỏ?", fr(1, 8), [fr(2, 4), fr(2, 8), fr(5, 8)]),
      mc("Tính: {1/2} – {1/6} = ?", fr(1, 3), ["0", fr(1, 4), fr(2, 3)], "{3/6} – {1/6} = {2/6} = {1/3}."),
      mc("Tính: {3/4} – {5/8} = ?", fr(1, 8), [fr(2, 4), fr(2, 8), fr(8, 8)]),
      mc("Tính: {7/10} – {2/5} = ?", fr(3, 10), [fr(5, 5), fr(5, 10), fr(1, 2)]),
      mc("Tính: {7/12} – {1/3} = ?", fr(1, 4), [fr(6, 9), fr(6, 12), fr(1, 3)], "{7/12} – {4/12} = {3/12} = {1/4}."),
      mc("Rút gọn rồi tính: {2/3} – {2/6} = ?", fr(1, 3), ["0", fr(1, 6), fr(2, 3)], "{2/6} = {1/3}; {2/3} – {1/3} = {1/3}."),
      mc("Sợi dây dài {5/12} m, cây gậy dài {3/4} m. Cây gậy dài hơn sợi dây bao nhiêu mét?", fr(1, 3) + " m", [fr(2, 8) + " m", fr(1, 6) + " m", fr(2, 3) + " m"], "{9/12} – {5/12} = {4/12} = {1/3}."),
      mc("Bác Tân dùng {7/12} diện tích mảnh đất để trồng rau và hoa; phần trồng rau chiếm {1/3} diện tích. Bác còn lại bao nhiêu phần diện tích để trồng hoa?", fr(1, 4), [fr(6, 9), fr(2, 3), fr(1, 3)], "{7/12} – {4/12} = {3/12} = {1/4}."),
    ],
  },

  // Bài 62. Luyện tập chung
  62: {
    intro: "Ôn lại phép cộng, phép trừ phân số; cộng, trừ số tự nhiên với phân số và giải bài toán lời văn.",
    questions: [
      mc("Tính: {2/3} + {4/9} = ?", fr(10, 9), [fr(6, 12), fr(6, 9), fr(8, 27)]),
      mc("Tính: {1/10} + {2/5} = ?", fr(1, 2), [fr(3, 15), fr(3, 10), fr(2, 10)], "{1/10} + {4/10} = {5/10} = {1/2}."),
      mc("Tính: {7/22} – {3/11} = ?", fr(1, 22), [fr(4, 11), fr(4, 22), fr(10, 22)]),
      mc("Tính: {5/6} – {5/12} = ?", fr(5, 12), ["0", fr(5, 6), fr(10, 12)]),
      mc("Tính: {1/2} + {5/12} = ?", fr(11, 12), [fr(6, 14), fr(6, 12), fr(5, 12)]),
      mc("Một xe ô tô chạy được {2/7} quãng đường trong giờ đầu, giờ tiếp theo chạy thêm {3/7} quãng đường. Sau hai giờ, ô tô chạy được bao nhiêu phần quãng đường?", fr(5, 7), [fr(5, 14), fr(1, 7), fr(6, 7)]),
      mc("Cây gỗ dài {17/4} m. Cưa thành ba khúc: khúc thứ nhất dài {3/2} m, khúc thứ hai dài {9/8} m. Khúc còn lại dài bao nhiêu mét?", fr(13, 8) + " m", [fr(5, 4) + " m", fr(17, 8) + " m", fr(3, 8) + " m"], "{34/8} – {12/8} – {9/8} = {13/8}."),
      mc("Tính: 1 + {4/9} = ?", fr(13, 9), [fr(5, 9), fr(4, 9), fr(8, 9)]),
      mc("Tính: 5 + {1/2} = ?", fr(11, 2), [fr(6, 2), fr(5, 2), fr(6, 1)]),
      mc("Tính: 3 – {5/6} = ?", fr(13, 6), [fr(2, 6), fr(18, 6), fr(8, 6)], "3 = {18/6}; {18/6} – {5/6} = {13/6}."),
      mc("Tính: {31/7} – 2 = ?", fr(17, 7), [fr(29, 7), fr(31, 5), fr(15, 7)]),
      mc("Rô-bốt còn {7/12} chai nước giặt. Rô-bốt dùng {1/3} chai để giặt chăn, rồi dùng thêm {1/6} chai để giặt quần áo. Chai nước giặt còn lại bao nhiêu phần?", fr(1, 12), [fr(1, 6), fr(5, 12), fr(1, 2)], "{7/12} – {4/12} – {2/12} = {1/12}."),
      mc("Tính bằng cách thuận tiện: {599/1000} + {377/1000} + {1/1000} = ?", fr(977, 1000), [fr(967, 1000), fr(976, 1000), fr(979, 1000)]),
      mc("Tính bằng cách thuận tiện: {15/4} + {15/16} + {5/16} = ?", "5", [fr(17, 4), fr(25, 4), fr(9, 2)], "{15/16} + {5/16} = {20/16} = {5/4}; {15/4} + {5/4} = 5."),
      mc("Anh A Phan thu hoạch {1/5} rẫy cà phê, chị Rang Hu thu hoạch {3/10} rẫy, chú Y Phui thu hoạch {7/20} rẫy. Cả ba người thu hoạch được bao nhiêu phần rẫy cà phê?", fr(17, 20), [fr(11, 35), fr(3, 4), fr(13, 20)], "{4/20} + {6/20} + {7/20} = {17/20}."),
      mc("Số ?  {2/21} + {1/7} = ?", fr(5, 21), [fr(3, 28), fr(3, 21), fr(1, 3)]),
      mc("Số ?  {9/25} + {1/5} – {1/5} = ?", fr(9, 25), [fr(1, 5), fr(10, 25), fr(8, 25)]),
      mc("Tính: {4/9} + {1/9} = ?", fr(5, 9), [fr(5, 18), fr(3, 9), fr(4, 9)]),
    ],
  },
};
