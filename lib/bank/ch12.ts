import type { Question } from "../types";
import { mc, num, tf, fr } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch12: Record<number, L> = {
  // Bài 63. Phép nhân phân số
  63: {
    intro:
      "Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số: {a/b} × {c/d} = {a × c / b × d}. Muốn nhân phân số với số tự nhiên: {a/b} × n = {a × n / b}.",
    questions: [
      mc("Tính: {4/7} × {3/5} = ?", fr(12, 35), [fr(7, 12), fr(12, 12), fr(7, 35)]),
      mc("Tính: {1/3} × {9/10} = ?", fr(3, 10), [fr(9, 30), fr(10, 13), fr(1, 10)], "{9/30} = {3/10}."),
      mc("Tính: {1/6} × {1/4} = ?", fr(1, 24), [fr(2, 10), fr(1, 10), fr(1, 12)]),
      mc("Rút gọn rồi tính: {2/4} × {9/5} = ?", fr(9, 10), [fr(18, 20), fr(11, 9), fr(9, 5)], "{2/4} = {1/2}; {1/2} × {9/5} = {9/10}."),
      mc("Tính: {13/8} × {5/15} = ?", fr(13, 24), [fr(65, 120), fr(18, 23), fr(13, 40)], "{5/15} = {1/3}; {13/8} × {1/3} = {13/24}."),
      mc("Một tấm nhôm hình chữ nhật có chiều dài {6/7} m, chiều rộng {3/5} m. Diện tích tấm nhôm đó là:", fr(18, 35) + " m²", [fr(9, 12) + " m²", fr(9, 35) + " m²", fr(18, 12) + " m²"]),
      mc("Tính: {9/11} × 8 = ?", fr(72, 11), [fr(9, 88), fr(17, 11), fr(72, 88)]),
      mc("Tính: {4/5} × 1 = ?", fr(4, 5), [fr(4, 1), fr(5, 4), fr(1, 5)]),
      num("Tính: {15/8} × 0 = ?", 0),
      mc("Tính: 3 × {4/11} = ?", fr(12, 11), [fr(12, 33), fr(7, 11), fr(4, 33)]),
      mc("Tính chu vi hình vuông có cạnh {3/5} dm:", fr(12, 5) + " dm", [fr(9, 5) + " dm", fr(6, 5) + " dm", fr(3, 20) + " dm"]),
      mc("Một tàu vũ trụ bay vòng quanh thiên thể 6 vòng, mỗi vòng bay được {61/6} km. Tàu đã bay tất cả bao nhiêu ki-lô-mét?", "61 km", ["{61/36} km", "{67/6} km", "366 km"], "{61/6} × 6 = 61."),
      mc("Chọn dấu thích hợp: {2/3} × {4/5} ? {4/5} × {2/3}", "=", ["<", ">"]),
      mc("Tính: {3/22} × {3/11} × 22 = ?", fr(9, 11), [fr(9, 242), fr(9, 22), fr(3, 11)], "{3/22} × 22 = 3; 3 × {3/11} = {9/11}."),
      mc("Nhà cô Sáu có hai chuồng lợn, mỗi chuồng nuôi 4 con. Mỗi ngày một con lợn ăn hết {1/8} yến cám. Mỗi ngày các con lợn ăn hết bao nhiêu ki-lô-gam cám?", "10 kg", ["8 kg", "5 kg", "1 kg"], "8 con × {1/8} yến = 1 yến = 10 kg."),
      mc("Một bè nuôi cá tra hình chữ nhật có chiều dài {25/2} m, chiều rộng {19/2} m. Chu vi của bè là:", "44 m", ["22 m", "{475/4} m", "38 m"], "({25/2} + {19/2}) × 2 = 22 × 2 = 44."),
      mc("Mỗi ô đỗ xe hình chữ nhật có chiều dài {11/2} m, chiều rộng {5/2} m. Diện tích mỗi ô đỗ xe là:", fr(55, 4) + " m²", [fr(16, 4) + " m²", fr(55, 2) + " m²", fr(16, 2) + " m²"]),
      mc("Trong bữa tiệc, mỗi hiệp sĩ được chia nửa cái bánh pi-da bò và {1/8} cái bánh pi-da gà. 8 hiệp sĩ được chia tất cả bao nhiêu cái bánh?", "5 cái bánh", ["4 cái bánh", "{9/8} cái bánh", "9 cái bánh"], "8 × ({1/2} + {1/8}) = 8 × {5/8} = 5."),
    ],
  },

  // Bài 64. Phép chia phân số
  64: {
    intro:
      "Phân số đảo ngược của {a/b} là {b/a}. Muốn chia hai phân số, ta lấy phân số thứ nhất nhân với phân số đảo ngược của phân số thứ hai: {a/b} : {c/d} = {a/b} × {d/c}.",
    questions: [
      mc("Phân số đảo ngược của {5/8} là:", fr(8, 5), [fr(5, 8), fr(3, 8), fr(8, 3)]),
      mc("Phân số đảo ngược của {3/4} là:", fr(4, 3), [fr(3, 4), fr(1, 4), fr(4, 1)]),
      mc("Phân số đảo ngược của {1/2} là:", "2", ["{1/2}", "{2/2}", "1"], "{2/1} = 2."),
      mc("Tính: {7/19} : {2/5} = ?", fr(35, 38), [fr(14, 95), fr(9, 24), fr(7, 10)]),
      mc("Tính: {3/7} : {5/8} = ?", fr(24, 35), [fr(15, 56), fr(8, 12), fr(3, 5)]),
      mc("Tính: {8/7} : {3/4} = ?", fr(32, 21), [fr(24, 28), fr(11, 11), fr(3, 7)]),
      mc("Tính: {1/3} : {1/2} = ?", fr(2, 3), [fr(1, 6), fr(1, 5), fr(3, 2)]),
      mc("Tính rồi rút gọn: {3/5} : {3/4} = ?", fr(4, 5), [fr(9, 20), "1", fr(3, 4)]),
      mc("Tính rồi rút gọn: {2/5} : {3/10} = ?", fr(4, 3), [fr(6, 50), fr(3, 4), fr(5, 8)], "{2/5} × {10/3} = {20/15} = {4/3}."),
      mc("Tính rồi rút gọn: {1/8} : {1/6} = ?", fr(3, 4), [fr(4, 3), fr(1, 48), fr(1, 14)]),
      mc("Một bức tranh hình chữ nhật có diện tích {27/2} dm² và chiều rộng {10/3} dm. Chiều dài bức tranh là:", fr(81, 20) + " dm", [fr(45, 3) + " dm", fr(20, 81) + " dm", fr(37, 6) + " dm"], "{27/2} : {10/3} = {27/2} × {3/10} = {81/20}."),
      mc("Cắt một thanh sắt dài {3/2} m thành các đoạn, mỗi đoạn dài {1/8} m. Cắt được bao nhiêu đoạn như vậy?", "12 đoạn", ["3 đoạn", "16 đoạn", "{3/16} đoạn"], "{3/2} : {1/8} = {3/2} × 8 = 12."),
      mc("Tính: 3 : {5/7} = ?", fr(21, 5), [fr(15, 7), fr(5, 21), fr(3, 35)]),
      mc("Tính: 4 : {1/3} = ?", "12", ["{4/3}", "{1/12}", "3"]),
      mc("Tính: {5/7} : 3 = ?", fr(5, 21), [fr(15, 7), fr(21, 5), fr(5, 10)]),
      mc("Chiều dài cái bóng ngọn tháp là {99/4} m, gấp 2 lần chiều cao ngọn tháp. Chiều cao ngọn tháp là:", fr(99, 8) + " m", [fr(99, 2) + " m", fr(99, 4) + " m", fr(101, 8) + " m"]),
      mc("Tính: {3/8} : {9/4} = ?", fr(1, 6), [fr(27, 32), fr(3, 18), fr(2, 3)], "{3/8} × {4/9} = {12/72} = {1/6}."),
    ],
  },

  // Bài 65. Tìm phân số của một số
  65: {
    intro: "Muốn tìm {a/b} của số n, ta lấy n nhân với {a/b}: n × {a/b}.",
    questions: [
      num("Tìm {2/3} của 12.", 12 * 2 / 3),
      num("Một lớp có 35 học sinh, trong đó {4/7} số học sinh là nữ. Lớp có bao nhiêu học sinh nữ?", (35 * 4) / 7, undefined, "học sinh"),
      num("Li thứ nhất Mai rót 150 ml. Li thứ hai có lượng nước bằng {8/5} lượng nước ở li thứ nhất. Li thứ hai có bao nhiêu mi-li-lít nước?", (150 * 8) / 5, undefined, "ml"),
      num("Tháng Một một công ty sản xuất 4 500 đôi giày. Tháng Hai sản xuất bằng {3/5} số đôi giày tháng Một. Tháng Hai sản xuất bao nhiêu đôi giày?", (4500 * 3) / 5, undefined, "đôi"),
      num("Trên dây điện có 20 con chim đang đậu, trong đó {3/5} số chim là chim sẻ. Có bao nhiêu con chim sẻ?", (20 * 3) / 5, undefined, "con"),
      num("Một chiếc tàu thủy làm việc tròn nửa thế kỉ (50 năm). Tàu dành {1/2} thời gian chở hàng trên Đại Tây Dương. Tàu chở hàng bao nhiêu năm trên Đại Tây Dương?", 25, undefined, "năm"),
      num("Tàu thủy làm việc 50 năm, dành {2/5} thời gian chở hàng trên Thái Bình Dương. Tàu chở hàng bao nhiêu năm trên Thái Bình Dương?", 20, undefined, "năm"),
      num("Tàu thủy làm việc 50 năm, dành {1/2} thời gian trên Đại Tây Dương và {2/5} thời gian trên Thái Bình Dương, còn lại chở hàng trên Ấn Độ Dương. Tàu chở hàng bao nhiêu năm trên Ấn Độ Dương?", 50 - 25 - 20, undefined, "năm"),
      num("Một con báo săn chạy 198 m hết {1/10} phút. Trung bình mỗi giây con báo chạy được bao nhiêu mét?", 198 / 6, "{1/10} phút = 6 giây; 198 : 6 = 33.", "m"),
      num("Chào mào có 16 quả hồng. Chào mào ăn hết một nửa của một nửa số quả hồng đó. Chào mào đã ăn hết bao nhiêu quả hồng?", 16 / 4, undefined, "quả"),
      num("Tìm {3/4} của 24.", 24 * 3 / 4),
      num("Tìm {5/6} của 36.", 36 * 5 / 6),
      num("Một thùng có 48 l dầu. Người ta đã dùng {3/8} số lít dầu. Đã dùng bao nhiêu lít dầu?", (48 * 3) / 8, undefined, "lít"),
      num("Một mảnh vườn có diện tích 360 m², trong đó {2/5} diện tích trồng rau. Diện tích trồng rau là bao nhiêu mét vuông?", (360 * 2) / 5, undefined, "m²"),
      num("Quãng đường từ nhà anh Thanh đến bưu điện dài 45 km. Anh đi được {2/3} quãng đường thì dừng lại nghỉ. Anh phải đi tiếp bao nhiêu ki-lô-mét nữa?", 45 - 30, "{2/3} của 45 là 30 km; còn lại 45 – 30 = 15 km.", "km"),
      num("Năm nay ông nội của Việt 72 tuổi, tuổi của Việt bằng {1/8} tuổi ông nội, anh Chúc lớn hơn Việt 5 tuổi. Anh Chúc bao nhiêu tuổi?", 72 / 8 + 5, "Tuổi Việt: 72 × {1/8} = 9. Tuổi anh Chúc: 9 + 5 = 14.", "tuổi"),
    ],
  },

  // Bài 66. Luyện tập chung
  66: {
    intro: "Ôn lại: nhân, chia phân số; tìm phân số của một số; tính giá trị biểu thức có phân số và giải toán lời văn.",
    questions: [
      mc("Tính: {5/6} × {1/3} = ?", fr(5, 18), [fr(6, 9), fr(5, 9), fr(5, 6)]),
      mc("Tính: {5/6} : {1/3} = ?", fr(5, 2), [fr(5, 18), fr(5, 3), fr(6, 5)], "{5/6} × 3 = {15/6} = {5/2}."),
      mc("Tính: {5/3} – {1/3} : {1/4} = ?", fr(1, 3), ["4", fr(5, 12), fr(1, 12)], "{1/3} : {1/4} = {4/3}; {5/3} – {4/3} = {1/3}."),
      mc("Tìm phân số thích hợp: ? : {2/7} = {5/11}", fr(10, 77), [fr(55, 14), fr(5, 77), fr(7, 22)], "Số bị chia = thương × số chia = {5/11} × {2/7} = {10/77}."),
      mc("Tìm phân số thích hợp: {3/4} : ? = {5/8}", fr(6, 5), [fr(5, 6), fr(15, 32), fr(3, 5)], "{3/4} : {5/8} = {3/4} × {8/5} = {24/20} = {6/5}."),
      mc("Tìm phân số thích hợp: ? × {6/11} = 1", fr(11, 6), [fr(6, 11), fr(6, 6), fr(1, 6)]),
      mc("1 kg chuối tươi sấy được {1/5} kg chuối khô. Thu hoạch 1 tạ chuối tươi thì sấy được lượng chuối khô là:", "2 yến", ["{1/5} tấn", "{1/5} tạ", "5 tạ"], "100 kg × {1/5} = 20 kg = 2 yến."),
      mc("Một mảnh đất hình chữ nhật có chiều rộng 4 m và diện tích {91/2} m². Người ta đào một cái ao hình chữ nhật, phần đất còn lại làm lối đi rộng 1 m. Diện tích cái ao là:", fr(273, 8) + " m²", [fr(91, 8) + " m²", fr(91, 2) + " m²", fr(91, 4) + " m²"], "Chiều dài: {91/2} : 4 = {91/8} m; chiều rộng ao 4 – 1 = 3 m; diện tích: {91/8} × 3 = {273/8}."),
      mc("Tính: {4/5} × 2 = ?", fr(8, 5), [fr(4, 10), fr(6, 5), fr(8, 10)]),
      mc("Tính: {2/13} × {4/5} = ?", fr(8, 65), [fr(6, 18), fr(8, 18), fr(2, 65)]),
      mc("Tính: {11/13} : {13/11} = ?", fr(121, 169), ["1", fr(143, 169), fr(11, 13)]),
      mc("Tính: {3/7} : 2 = ?", fr(3, 14), [fr(6, 7), fr(3, 7), fr(2, 21)]),
      mc("Tính bằng cách thuận tiện: {2/13} × {22/5} × {13/2} = ?", fr(22, 5), [fr(44, 5), fr(11, 5), fr(22, 13)]),
      mc("Tính bằng cách thuận tiện: {3/5} × {6/7} + {6/7} × {3/5} = ?", fr(36, 35), [fr(18, 35), fr(9, 12), fr(6, 5)], "2 × {18/35} = {36/35}."),
      num("Từ một vại đựng 15 l tương, người ta rót vào các lọ nhỏ, mỗi lọ {3/4} l. Có 8 lọ như vậy. Trong vại còn lại bao nhiêu lít tương?", 15 - 8 * 3 / 4, undefined, "lít"),
      mc("Biểu thức nào có giá trị lớn nhất? (A) 15 × {2/3}; (B) ({2/3} – {1/6}) : 5; (C) ({7/4} × {8/3}) : {1/3}", "C", ["A", "B"], "A = 10; B = {1/10}; C = {14/3} × 3 = 14."),
      mc("Tính: ({1/4} + {1/12}) : {1/3} = ?", "1", ["{1/3}", "{4/3}", "{1/12}"], "{4/12} : {1/3} = {1/3} × 3 = 1."),
      mc("Tính: ({1/3} + {1/6}) × {2/5} = ?", fr(1, 5), [fr(2, 5), fr(1, 15), fr(3, 10)], "{1/2} × {2/5} = {1/5}."),
    ],
  },
};
