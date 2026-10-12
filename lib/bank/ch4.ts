import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch4: Record<number, L> = {
  // Bài 17. Yến, tạ, tấn
  17: {
    intro: "1 yến = 10 kg;  1 tạ = 10 yến = 100 kg;  1 tấn = 10 tạ = 1 000 kg.",
    questions: [
      num("2 yến = ? kg", 20),
      num("20 kg = ? yến", 2),
      num("3 tạ = ? kg", 300),
      num("40 yến = ? tạ", 4),
      num("2 tấn = ? kg", 2000),
      num("30 tạ = ? tấn", 3),
      num("Tính: 45 tấn – 18 tấn = ? tấn", 45 - 18),
      num("Tính: 17 tạ + 36 tạ = ? tạ", 17 + 36),
      num("Tính: 25 yến × 4 = ? yến", 25 * 4),
      num("Tính: 138 tấn : 3 = ? tấn", 138 / 3),
      num("4 yến 5 kg = ? kg", 45),
      num("6 tấn 40 kg = ? kg", 6040),
      num("3 tạ 2 yến = ? yến", 32),
      num("5 tấn 2 tạ = ? tạ", 52),
      num("4 tấn 50 yến = ? yến", 450, "4 tấn = 400 yến; 400 + 50 = 450."),
      num(
        "Tổng cân nặng của chim cánh cụt bố và chim cánh cụt mẹ là 80 kg. Tổng cân nặng của cả ba con (bố, mẹ và con) là 1 tạ. Chim cánh cụt con nặng bao nhiêu ki-lô-gam?",
        100 - 80,
        "1 tạ = 100 kg; 100 – 80 = 20 kg.",
        "kg",
      ),
      mc(
        "Một con voi con vừa chào đời. Làm tròn cân nặng đến hàng chục thì được 120 kg. Cân nặng thực tế có thể là:",
        "1 tạ 17 kg",
        ["1 tạ 3 yến", "1 tạ 2 kg", "1 tạ 9 kg"],
        "1 tạ 17 kg = 117 kg, làm tròn đến hàng chục là 120 kg.",
      ),
      mc(
        "Một chiếc xe chở được nhiều nhất 7 tạ hàng. Trên xe đã có 300 kg. Xe có thể chở thêm 90 thùng, mỗi thùng nặng 5 kg không?",
        "Không, vì 90 thùng nặng 450 kg, lớn hơn 400 kg",
        ["Có, vì 90 thùng nặng 400 kg", "Có, vì xe chở được 700 kg", "Không, vì 90 thùng nặng 300 kg"],
        "Xe còn chở thêm được 700 – 300 = 400 kg; 90 × 5 = 450 kg > 400 kg.",
      ),
    ],
  },

  // Bài 18. Đề-xi-mét vuông, mét vuông, mi-li-mét vuông
  18: {
    intro: "1 dm² = 100 cm²;  1 m² = 100 dm²;  1 cm² = 100 mm².",
    questions: [
      tf("1 dm² = 100 cm²", true),
      num("3 dm² = ? cm²", 300),
      num("300 cm² = ? dm²", 3),
      num("6 dm² 50 cm² = ? cm²", 650),
      num("5 m² = ? dm²", 500),
      num("500 dm² = ? m²", 5),
      num("1 m² 50 dm² = ? dm²", 150),
      num("4 m² 20 dm² = ? dm²", 420),
      num("3 m² 9 dm² = ? dm²", 309),
      num("2 cm² = ? mm²", 200),
      num("200 mm² = ? cm²", 2),
      num("8 cm² 5 mm² = ? mm²", 805),
      mc("Diện tích một nhãn vở khoảng:", "15 cm²", ["15 mm²", "15 dm²", "15 m²"]),
      mc(
        "Chú Tư ghép hai tấm pin mặt trời hình vuông cạnh 1 m thành một tấm pin hình chữ nhật có chiều dài 2 m. Diện tích tấm pin đó là:",
        "200 dm²",
        ["200 m²", "200 cm²", "200 mm²"],
        "2 m² = 200 dm².",
      ),
      num("Một phòng khách hình chữ nhật dài 7 m, rộng 5 m. Diện tích phòng là bao nhiêu mét vuông?", 35, "7 × 5 = 35 (m²).", "m²"),
      num(
        "Mặt sàn phòng của Nam là hình vuông cạnh 3 m. Bố định lát bằng các tấm gỗ hình chữ nhật dài 5 dm, rộng 1 dm. Cần bao nhiêu tấm gỗ để lát kín sàn?",
        180,
        "3 m = 30 dm. Diện tích sàn: 30 × 30 = 900 dm². Mỗi tấm gỗ: 5 × 1 = 5 dm². Số tấm: 900 : 5 = 180.",
        "tấm",
      ),
    ],
  },

  // Bài 19. Giây, thế kỉ
  19: {
    intro:
      "1 phút = 60 giây; 1 giờ = 60 phút; 1 thế kỉ = 100 năm. Năm 1 đến năm 100 là thế kỉ I; năm 101 đến năm 200 là thế kỉ II; ... năm 1901 đến năm 2000 là thế kỉ XX; năm 2001 đến năm 2100 là thế kỉ XXI.",
    questions: [
      num("3 phút = ? giây", 180),
      num("180 giây = ? phút", 3),
      num("4 thế kỉ = ? năm", 400),
      num("400 năm = ? thế kỉ", 4),
      mc("Trần Hưng Đạo sinh năm 1228. Năm đó thuộc thế kỉ nào?", "thế kỉ XIII", ["thế kỉ XII", "thế kỉ XIV", "thế kỉ X"]),
      mc("Nguyễn Trãi sinh năm 1380. Năm đó thuộc thế kỉ nào?", "thế kỉ XIV", ["thế kỉ XIII", "thế kỉ XV", "thế kỉ XIX"]),
      mc("Phan Bội Châu sinh năm 1867. Năm đó thuộc thế kỉ nào?", "thế kỉ XIX", ["thế kỉ XVIII", "thế kỉ XX", "thế kỉ XVII"]),
      mc("Đinh Bộ Lĩnh sinh năm 924. Năm đó thuộc thế kỉ nào?", "thế kỉ X", ["thế kỉ IX", "thế kỉ XI", "thế kỉ XX"]),
      num("Năm 1900 là năm Canh Tý. Cứ 60 năm lại có một năm Canh Tý. Năm Canh Tý tiếp theo là năm nào?", 1960),
      num("2 giờ = ? phút", 120),
      num("2 phút 11 giây = ? giây", 131),
      num("4 giờ 10 phút = ? phút", 250),
      num("28 ngày = ? tuần", 4),
      num(
        "Lễ kỉ niệm 300 năm thành phố Sài Gòn được tổ chức vào năm 1998. Vậy thành phố Sài Gòn được thành lập vào năm nào?",
        1998 - 300,
        "1998 – 300 = 1698 (năm 1698 thuộc thế kỉ XVII).",
      ),
      num(
        "Một chiếc máy bay thực hiện 400 chuyến bay mỗi năm. Máy bay hoạt động từ ngày 1 tháng 1 năm 2001 đến hết năm 2009. Máy bay đã thực hiện bao nhiêu chuyến bay?",
        9 * 400,
        "Từ năm 2001 đến hết năm 2009 là 9 năm; 400 × 9 = 3 600 chuyến.",
        "chuyến",
      ),
      num("Các năm nhuận của thế kỉ XXI là 2004, 2008, 2012, ..., 2096. Thế kỉ XXI có bao nhiêu năm nhuận?", 24, "(2096 – 2004) : 4 + 1 = 24."),
      num("Năm cuối cùng của thế kỉ XX là một năm nhuận. Đó là năm nào?", 2000),
    ],
  },

  // Bài 20. Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng
  20: {
    intro: "Vận dụng các đơn vị đo khối lượng, diện tích, thời gian và tiền tệ vào các tình huống thực tế.",
    questions: [
      mc("Dưới mỗi chai lọc nước, người ta đặt một tấm bìa hình vuông cạnh 3 dm. Diện tích mỗi tấm bìa là:", "9 dm²", ["9 mm²", "9 cm²", "9 m²"]),
      mc(
        "Thời gian lọc 500 ml nước: chai A mất 250 giây, chai B mất 4 phút, chai C mất 3 phút 50 giây. Chai nào cần ít thời gian nhất?",
        "Chai C",
        ["Chai A", "Chai B"],
        "Chai A: 250 giây; chai B: 240 giây; chai C: 230 giây.",
      ),
      mc("Em cần một tấm gỗ để làm biển tên trại của lớp. Em nên chọn tấm gỗ có diện tích khoảng:", "40 dm²", ["40 mm²", "4 m²", "40 cm²"]),
      mc(
        "Có ba vị trí để dựng trại: A: 7 m × 5 m; B: 6 m × 6 m; C: 8 m × 4 m. Vị trí nào có diện tích lớn nhất?",
        "Vị trí B",
        ["Vị trí A", "Vị trí C"],
        "A: 35 m²; B: 36 m²; C: 32 m².",
      ),
      num("Em mua 3 bộ dây đèn giá 30 000 đồng, 34 000 đồng và 36 000 đồng. Em phải trả tất cả bao nhiêu đồng?", 30000 + 34000 + 36000, undefined, "đồng"),
      num(
        "Cửa hàng văn phòng phẩm: quyển vở 9 000 đồng, cái bút chì 5 000 đồng, cái thước 10 000 đồng. Em mua 1 quyển vở, 1 bút chì, 1 thước và đưa cô bán hàng 50 000 đồng. Cô phải trả lại em bao nhiêu đồng?",
        50000 - (9000 + 5000 + 10000),
        "Tiền hàng: 9 000 + 5 000 + 10 000 = 24 000. Trả lại: 50 000 – 24 000 = 26 000.",
        "đồng",
      ),
      num("Giá vé trò chơi câu cá là 10 000 đồng/lượt. Gia đình em có 4 người cùng chơi một lượt. Gia đình em phải trả bao nhiêu đồng?", 4 * 10000, undefined, "đồng"),
      num("Ở vườn thú, con hổ nặng 4 tạ. Con hổ nặng bao nhiêu ki-lô-gam?", 400, undefined, "kg"),
      num("Con tê giác nặng 1 tấn 3 tạ. Con tê giác nặng bao nhiêu ki-lô-gam?", 1300, "1 tấn = 1 000 kg; 3 tạ = 300 kg.", "kg"),
      num(
        "Khu vườn trồng hoa hồng có dạng chữ L: phần bên phải rộng 8 m, cao 16 m; phần bên trái rộng 8 m, cao 8 m. Diện tích khu vườn là bao nhiêu mét vuông?",
        8 * 16 + 8 * 8,
        "8 × 16 = 128 (m²); 8 × 8 = 64 (m²); 128 + 64 = 192 (m²).",
        "m²",
      ),
    ],
  },

  // Bài 21. Luyện tập chung
  21: {
    intro: "Ôn lại cách đổi các đơn vị đo khối lượng, diện tích, thời gian và giải toán có liên quan.",
    questions: [
      num("8 m² = ? dm²", 800),
      num("200 cm² = ? dm²", 2),
      num("3 cm² = ? mm²", 300),
      num("300 mm² = ? cm²", 3),
      num("7 yến 3 kg = ? kg", 73),
      num("4 tạ 15 kg = ? kg", 415),
      num("5 tấn = ? yến", 500),
      num("1 tấn 89 kg = ? kg", 1089),
      num(
        "Thửa ruộng của chú Năm là hình chữ nhật có diện tích 4 000 m², được chia thành bốn phần đều nhau. Diện tích mỗi phần là bao nhiêu mét vuông?",
        4000 / 4,
        undefined,
        "m²",
      ),
      num(
        "Cứ mỗi 1 000 m² chú Năm thu được khoảng 7 tạ thóc. Thửa ruộng 4 000 m² thu hoạch được tất cả bao nhiêu tạ thóc?",
        7 * 4,
        undefined,
        "tạ",
      ),
      num("Nam chạy một vòng quanh sân hết 2 phút 30 giây. Nếu cứ chạy như thế đúng hai vòng thì Nam chạy hết bao nhiêu giây?", 2 * (2 * 60 + 30), "2 phút 30 giây = 150 giây; 150 × 2 = 300 giây.", "giây"),
      num("5 thế kỉ = ? năm", 500),
      num("300 giây = ? phút", 5),
      num("Bảng mạch máy tính hình chữ nhật dài 10 cm, rộng 5 cm, bị khuyết hai ô vuông cạnh 1 cm. Diện tích bảng mạch là bao nhiêu xăng-ti-mét vuông?", 10 * 5 - 2, "10 × 5 = 50 (cm²); 50 – 1 – 1 = 48 (cm²).", "cm²"),
      mc("Chim sẻ có cân nặng khoảng:", "30 g", ["30 kg", "30 tạ", "30 tấn"]),
      mc("Con lợn (heo) trưởng thành có cân nặng khoảng:", "1 tạ", ["1 tấn", "1 g", "10 tấn"]),
      mc("Diện tích mặt sân bóng đá khoảng:", "7 140 m²", ["12 dm²", "1 137 mm²", "7 140 cm²"]),
      num(
        "James Watt thiết kế kiểu động cơ hơi nước mới vào năm 1782. Dịp kỉ niệm 500 năm thiết kế đó sẽ vào năm nào?",
        1782 + 500,
        "1782 + 500 = 2282, năm đó thuộc thế kỉ XXIII.",
      ),
    ],
  },
};
