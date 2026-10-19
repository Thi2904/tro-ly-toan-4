import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch8b: Record<number, L> = {
  // Bài 42. Tính chất phân phối của phép nhân đối với phép cộng
  42: {
    intro:
      "a × (b + c) = a × b + a × c   và   (a + b) × c = a × c + b × c. Khi nhân một số với một tổng, ta có thể nhân số đó với từng số hạng của tổng rồi cộng các kết quả lại. Tương tự với phép trừ: a × (b – c) = a × b – a × c.",
    questions: [
      num("Số ?  (3 + 4) × 8 = 3 × 8 + ? × 8", 4),
      num("Số ?  6 × (10 + 5) = 6 × 10 + 6 × ?", 5),
      num("Tính bằng cách thuận tiện: 38 × 7 + 38 × 3 = ?", 38 * 7 + 38 * 3),
      num("Tính bằng cách thuận tiện: 54 × 9 + 54 = ?", 54 * 9 + 54, "54 × 9 + 54 × 1 = 54 × 10."),
      num("Tính bằng cách thuận tiện: 125 × 12 – 125 × 4 = ?", 125 * 12 - 125 * 4),
      num("Tính bằng cách thuận tiện: 46 × 99 = ?", 46 * 99, "46 × 99 = 46 × 100 – 46."),
      num("Tính bằng cách thuận tiện: 73 × 101 = ?", 73 * 101, "73 × 101 = 73 × 100 + 73."),
      mc("Biểu thức nào dưới đây thể hiện tính chất phân phối của phép nhân đối với phép cộng?", "a × (b + c) = a × b + a × c", ["a × b = b × a", "(a × b) × c = a × (b × c)", "a + b = b + a"]),
      num("Cô giáo mua 12 cây bút, mỗi cây 4 500 đồng và 12 chiếc thước, mỗi chiếc 3 500 đồng. Cô phải trả tất cả bao nhiêu đồng?", 12 * (4500 + 3500), "12 × 4 500 + 12 × 3 500 = 12 × 8 000.", "đồng"),
      num("Mảnh đất hình chữ nhật có chiều rộng 8 m, chiều dài gồm hai khúc 15 m và 25 m. Diện tích mảnh đất là bao nhiêu mét vuông?", 8 * (15 + 25), undefined, "m²"),
      num("Tính bằng cách thuận tiện: 15 × 24 + 15 × 76 = ?", 15 * 24 + 15 * 76),
      num("Tính bằng cách thuận tiện: 235 × 8 + 235 × 2 = ?", 235 * 8 + 235 * 2),
      tf("(a – b) × c = a × c – b × c", true),
    ],
    adv: [
      num("Tính nhanh: 99 × 99 + 99 = ?", 99 * 99 + 99, "99 × 99 + 99 × 1 = 99 × 100."),
      num("Tính nhanh: 123 × 8 + 123 × 91 + 123 = ?", 123 * 8 + 123 * 91 + 123, "123 × (8 + 91 + 1) = 123 × 100."),
      num("Tính nhanh: 4 × 25 × 37 + 4 × 25 × 63 = ?", 4 * 25 * 37 + 4 * 25 * 63),
      num("Tìm số a biết: a × 6 + a × 4 = 250. Số a là:", 25),
      num("Tính nhanh: 2 026 × 17 – 2 026 × 7 = ?", 2026 * 17 - 2026 * 7),
    ],
  },

  // Bài 43. Nhân với số có hai chữ số
  43: {
    intro:
      "Nhân với số có hai chữ số: nhân với chữ số hàng đơn vị được tích riêng thứ nhất; nhân với chữ số hàng chục được tích riêng thứ hai (viết lùi sang trái một cột); cộng hai tích riêng.",
    questions: [
      num("Đặt tính rồi tính: 123 × 45 = ?", 123 * 45),
      num("Đặt tính rồi tính: 2 345 × 36 = ?", 2345 * 36),
      num("Đặt tính rồi tính: 40 506 × 27 = ?", 40506 * 27),
      num("Đặt tính rồi tính: 1 250 × 48 = ?", 1250 * 48),
      num("Đặt tính rồi tính: 806 × 59 = ?", 806 * 59),
      num("Đặt tính rồi tính: 3 700 × 25 = ?", 3700 * 25),
      num("Mỗi quyển sách dày 125 trang. 36 quyển sách như vậy có tất cả bao nhiêu trang?", 125 * 36, undefined, "trang"),
      num("Mỗi thùng có 24 chai nước. 150 thùng như vậy có tất cả bao nhiêu chai nước?", 24 * 150, undefined, "chai"),
      num("Mỗi ngày trạm bơm bơm được 3 450 l nước. Trong 31 ngày trạm bơm được bao nhiêu lít nước?", 3450 * 31, undefined, "lít"),
      num("Cô Hà mua 24 m vải, mỗi mét vải giá 85 000 đồng. Cô Hà phải trả bao nhiêu đồng?", 24 * 85000, undefined, "đồng"),
      mc("Tích của 38 và 52 là:", 1976, [1876, 1986, 1796]),
      num("Tính giá trị của biểu thức: (36 + 24) × 15 = ?", (36 + 24) * 15),
      num("Mảnh vườn hình chữ nhật có chiều dài 45 m, chiều rộng 32 m. Diện tích mảnh vườn là bao nhiêu mét vuông?", 45 * 32, undefined, "m²"),
      num("Số ?  17 × ? = 748", 748 / 17),
    ],
    adv: [
      num("Tính: 99 × 99 = ?", 99 * 99, "99 × 99 = 99 × 100 – 99."),
      num("Tính nhanh: 125 × 88 = ?", 125 * 88, "88 = 8 × 11 và 125 × 8 = 1 000."),
      num("Hình vuông có cạnh 35 m. Nếu tăng cạnh thêm 5 m thì diện tích tăng thêm bao nhiêu mét vuông?", 40 * 40 - 35 * 35, "Diện tích mới: 40 × 40 = 1 600; diện tích cũ: 35 × 35 = 1 225.", "m²"),
      num("Tích của hai số là 1 200. Nếu gấp thừa số thứ nhất lên 3 lần, giữ nguyên thừa số thứ hai thì tích mới là bao nhiêu?", 1200 * 3),
      num("Mỗi ngày mẹ tiết kiệm 12 500 đồng. Một năm có 365 ngày. Cả năm mẹ tiết kiệm được bao nhiêu đồng?", 12500 * 365, undefined, "đồng"),
    ],
  },

  // Bài 44. Chia cho số có hai chữ số
  44: {
    intro:
      "Chia cho số có hai chữ số: ước lượng thương ở mỗi lượt chia (có thể làm tròn số chia), nhân ngược để thử rồi trừ. Số dư luôn bé hơn số chia.",
    questions: [
      num("Đặt tính rồi tính: 4 536 : 18 = ?", 4536 / 18),
      num("Đặt tính rồi tính: 12 750 : 25 = ?", 12750 / 25),
      num("Đặt tính rồi tính: 98 112 : 32 = ?", 98112 / 32),
      num("Đặt tính rồi tính: 65 000 : 40 = ?", 65000 / 40),
      num("Đặt tính rồi tính: 7 854 : 21 = ?", 7854 / 21),
      num("Đặt tính rồi tính: 5 000 : 37 = ? (chỉ ghi thương)", Math.floor(5000 / 37), "5 000 : 37 = 135 (dư 5)."),
      num("Phép chia 5 000 : 37 có số dư là bao nhiêu?", 5000 % 37),
      num("Nhà trường chia đều 1 440 quyển vở cho 36 lớp. Mỗi lớp nhận được bao nhiêu quyển vở?", 1440 / 36, undefined, "quyển"),
      num("Người ta đóng 2 580 kg gạo vào các túi, mỗi túi 15 kg. Đóng được bao nhiêu túi gạo?", 2580 / 15, undefined, "túi"),
      num("Có 3 750 l nước đựng đều vào các can, mỗi can 25 l. Cần bao nhiêu can?", 3750 / 25, undefined, "can"),
      num("Quãng đường dài 468 km, ô tô đi mỗi giờ được 52 km. Ô tô đi hết quãng đường đó trong bao nhiêu giờ?", 468 / 52, undefined, "giờ"),
      num("Người ta đóng 1 000 quả trứng vào các hộp, mỗi hộp 12 quả. Đóng được nhiều nhất bao nhiêu hộp đầy trứng?", Math.floor(1000 / 12), "1 000 : 12 = 83 (dư 4).", "hộp"),
      num("Số ?  ? × 24 = 1 656", 1656 / 24),
    ],
    adv: [
      num("Số bé nhất có bốn chữ số chia hết cho 15 là số nào?", 1005, "1 000 : 15 = 66 (dư 10), 15 × 67 = 1 005."),
      num("Số lớn nhất có ba chữ số mà chia cho 25 thì dư 7 là số nào?", 982, "975 = 25 × 39 và 975 + 7 = 982."),
      num("Một phép chia có số chia là 18, thương là 12 và số dư là 5. Số bị chia là:", 12 * 18 + 5),
      num("Số tự nhiên bé nhất khác 0 chia hết cho cả 36 và 5 là số nào?", 180),
      num("Tìm x biết: 24 × x = 3 000 – 24 × 5. Số x là:", (3000 - 24 * 5) / 24),
    ],
  },

  // Bài 45. Thực hành và trải nghiệm ước lượng trong tính toán
  45: {
    intro:
      "Ước lượng: làm tròn các số (thường làm tròn đến hàng cao nhất, hoặc tròn chục, tròn trăm) rồi tính nhẩm để biết kết quả gần đúng, giúp kiểm tra nhanh một phép tính.",
    questions: [
      mc("Ước lượng kết quả của 48 × 21:", "khoảng 1 000", ["khoảng 100", "khoảng 10 000", "khoảng 500"], "48 ≈ 50 và 21 ≈ 20; 50 × 20 = 1 000."),
      mc("Ước lượng kết quả của 4 987 + 3 012:", "khoảng 8 000", ["khoảng 80 000", "khoảng 800", "khoảng 9 000"]),
      mc("Ước lượng kết quả của 19 800 : 99:", "khoảng 200", ["khoảng 20", "khoảng 2 000", "khoảng 100"], "19 800 ≈ 20 000 và 99 ≈ 100."),
      num("Làm tròn 3 972 đến hàng nghìn rồi ước lượng 3 972 × 3. Kết quả ước lượng là:", 4000 * 3),
      num("Làm tròn các số đến hàng trăm rồi ước lượng 2 489 + 3 512. Kết quả ước lượng là:", 2500 + 3500),
      mc("Bình có 100 000 đồng. Bình mua 3 chiếc áo, mỗi chiếc giá 28 000 đồng. Bằng cách ước lượng (làm tròn 28 000 lên 30 000), Bình:", "chắc chắn đủ tiền", ["chắc chắn không đủ tiền", "chỉ vừa đủ tiền", "không thể biết được"], "3 × 30 000 = 90 000 < 100 000."),
      mc("Mẹ mua 12 hộp bánh, mỗi hộp giá 48 000 đồng. Số tiền mẹ phải trả khoảng:", "600 000 đồng", ["60 000 đồng", "6 000 000 đồng", "6 000 đồng"], "12 × 50 000 = 600 000."),
      num("Trường có 487 học sinh, mỗi bạn góp 4 900 đồng. Làm tròn 487 thành 500 và 4 900 thành 5 000 để ước lượng. Số tiền ước lượng là bao nhiêu đồng?", 500 * 5000, undefined, "đồng"),
      mc("Kết quả của phép tính 19 876 + 10 123 gần nhất với số nào?", 30000, [20000, 40000, 10000]),
      tf("Ước lượng giúp ta kiểm tra nhanh một kết quả có hợp lí hay không.", true),
      mc("Kết quả đúng của phép tính 399 × 21 là:", 8379, [83790, 837, 18379], "399 × 21 ≈ 400 × 20 = 8 000."),
      num("Ước lượng thương của phép chia 6 150 : 31 bằng cách tính 6 000 : 30. Kết quả ước lượng là:", 6000 / 30),
      num("Ước lượng tích 79 × 61 bằng cách tính 80 × 60. Kết quả ước lượng là:", 80 * 60),
    ],
    adv: [
      num("Tính chính xác: 99 × 101 = ?", 99 * 101),
      num("Tính chính xác: 1 999 × 5 = ?", 1999 * 5, "1 999 × 5 = 2 000 × 5 – 5."),
      num("Số tự nhiên lớn nhất khi làm tròn đến hàng nghìn được 5 000 là số nào?", 5499),
      mc("Xe tải chở tối đa 2 tấn. Người ta xếp 48 thùng hàng, mỗi thùng nặng không quá 38 kg. Ước lượng 48 × 40 = 1 920 kg. Xe tải:", "chắc chắn chở được", ["chắc chắn quá tải", "chỉ chở được một nửa số thùng", "không thể kết luận"], "Mỗi thùng nặng không quá 38 kg nên tổng nhỏ hơn 1 920 kg < 2 000 kg."),
      num("Làm tròn 4 649 và 2 351 đến hàng trăm rồi tính hiệu hai số đã làm tròn. Hiệu là:", 4600 - 2400),
    ],
  },
};
