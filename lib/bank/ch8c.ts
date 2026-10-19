import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch8c: Record<number, L> = {
  // Bài 46. Tìm số trung bình cộng
  46: {
    intro: "Muốn tìm số trung bình cộng của nhiều số, ta tính tổng của các số đó rồi chia tổng đó cho số các số hạng.",
    questions: [
      num("Tìm số trung bình cộng của 36 và 48.", (36 + 48) / 2),
      num("Tìm số trung bình cộng của 12, 15 và 21.", (12 + 15 + 21) / 3),
      num("Tìm số trung bình cộng của 25, 30, 35 và 50.", (25 + 30 + 35 + 50) / 4),
      num("Ba lớp trồng được lần lượt 45 cây, 52 cây và 47 cây. Trung bình mỗi lớp trồng được bao nhiêu cây?", (45 + 52 + 47) / 3, undefined, "cây"),
      num("Nhiệt độ lúc 12 giờ trưa trong 5 ngày liên tiếp là 24 °C, 26 °C, 28 °C, 25 °C và 27 °C. Nhiệt độ trung bình là bao nhiêu độ C?", (24 + 26 + 28 + 25 + 27) / 5, undefined, "°C"),
      num("Chiều cao của bốn bạn là 138 cm, 142 cm, 145 cm và 135 cm. Trung bình mỗi bạn cao bao nhiêu xăng-ti-mét?", (138 + 142 + 145 + 135) / 4, undefined, "cm"),
      num("Ba thùng dầu chứa 12 l, 15 l và 18 l. Trung bình mỗi thùng chứa bao nhiêu lít dầu?", (12 + 15 + 18) / 3, undefined, "lít"),
      num("Mai mua 5 quyển vở có giá 7 500 đồng, 8 000 đồng, 9 500 đồng, 6 500 đồng và 8 500 đồng. Trung bình mỗi quyển vở giá bao nhiêu đồng?", (7500 + 8000 + 9500 + 6500 + 8500) / 5, undefined, "đồng"),
      num("Trung bình cộng của hai số là 40. Biết một trong hai số là 52. Số còn lại là:", 40 * 2 - 52),
      num("Trung bình cộng của ba số là 20. Biết hai trong ba số là 15 và 18. Số còn lại là:", 20 * 3 - 15 - 18),
      num("Trung bình mỗi ngày cửa hàng bán được 120 kg gạo. Trong 5 ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?", 120 * 5, undefined, "kg"),
      num("Điểm toán của bốn bạn trong tổ là 8, 9, 10 và 9. Điểm trung bình của tổ là:", (8 + 9 + 10 + 9) / 4),
      num("Tháng Một cửa hàng bán 450 sản phẩm, tháng Hai bán 520 sản phẩm. Trung bình mỗi tháng cửa hàng bán bao nhiêu sản phẩm?", (450 + 520) / 2, undefined, "sản phẩm"),
      tf("Số trung bình cộng của một dãy số luôn nằm giữa số bé nhất và số lớn nhất của dãy số đó.", true),
    ],
    adv: [
      num("Trung bình cộng của năm số là 24. Thêm số thứ sáu thì trung bình cộng của sáu số là 26. Số thứ sáu là:", 26 * 6 - 24 * 5),
      num("Trung bình cộng của các số chẵn 2; 4; 6; ...; 20 là:", (2 + 20) / 2),
      num("Lớp 4A có 40 học sinh, điểm trung bình môn Toán là 9. Lớp 4B có 20 học sinh, điểm trung bình là 6. Điểm trung bình của cả hai lớp là:", (40 * 9 + 20 * 6) / 60),
      num("Trung bình cộng của ba số lẻ liên tiếp là 31. Số bé nhất trong ba số đó là:", 29),
      num("Trung bình cộng của ba số là 30. Số thứ nhất gấp đôi số thứ hai, số thứ ba gấp ba lần số thứ hai. Số lớn nhất là:", 45, "Tổng ba số: 30 × 3 = 90, gồm 6 phần bằng số thứ hai: số thứ hai là 15, số thứ ba là 45."),
    ],
  },

  // Bài 47. Bài toán liên quan đến rút về đơn vị
  47: {
    intro:
      "Bài toán rút về đơn vị gồm hai bước: bước 1 tìm giá trị của một đơn vị (bằng phép chia); bước 2 tìm giá trị của nhiều đơn vị theo yêu cầu (bằng phép nhân hoặc phép chia).",
    questions: [
      num("5 hộp bút như nhau có tất cả 60 chiếc bút. Hỏi 8 hộp bút như vậy có bao nhiêu chiếc bút?", (60 / 5) * 8, undefined, "chiếc"),
      num("4 xe tải chở như nhau được tất cả 3 600 kg hàng. Hỏi 9 xe tải như vậy chở được bao nhiêu ki-lô-gam hàng?", (3600 / 4) * 9, undefined, "kg"),
      num("6 m vải giá 270 000 đồng. Hỏi 9 m vải cùng loại giá bao nhiêu đồng?", (270000 / 6) * 9, "1 m vải: 270 000 : 6 = 45 000 đồng; 9 m: 45 000 × 9 = 405 000 đồng.", "đồng"),
      num("1 kg gạo nấu cơm đủ cho 3 người ăn. Hỏi cần bao nhiêu ki-lô-gam gạo để nấu cơm cho 45 người?", 45 / 3, undefined, "kg"),
      num("45 quyển vở như nhau giá 270 000 đồng. Hỏi 7 quyển vở như vậy giá bao nhiêu đồng?", (270000 / 45) * 7, undefined, "đồng"),
      num("Ô tô đi 4 giờ được 220 km. Với vận tốc đó, ô tô đi 7 giờ được bao nhiêu ki-lô-mét?", (220 / 4) * 7, undefined, "km"),
      num("Một máy bơm bơm được 600 l nước trong 5 phút. Hỏi trong 12 phút máy bơm đó bơm được bao nhiêu lít nước?", (600 / 5) * 12, undefined, "lít"),
      num("Mua 6 chiếc thước kẻ như nhau phải trả 42 000 đồng. Hỏi với 70 000 đồng mua được mấy chiếc thước như vậy?", 70000 / (42000 / 6), "Một chiếc thước: 42 000 : 6 = 7 000 đồng; 70 000 : 7 000 = 10 chiếc.", "chiếc"),
      num("28 học sinh xếp vừa đủ 7 bàn học như nhau. Hỏi 40 học sinh cần bao nhiêu bàn học như vậy?", 40 / (28 / 7), undefined, "bàn"),
      num("72 viên kẹo chia đều cho 9 bạn. Hỏi 5 bạn nhận được bao nhiêu viên kẹo?", (72 / 9) * 5, undefined, "viên"),
      num("Hộp 24 chiếc bút giá 96 000 đồng. Một chiếc bút giá bao nhiêu đồng?", 96000 / 24, undefined, "đồng"),
      num("3 kg cam giá 90 000 đồng. Hỏi 5 kg cam cùng loại giá bao nhiêu đồng?", (90000 / 3) * 5, undefined, "đồng"),
      num("3 công nhân làm được 45 sản phẩm trong một giờ. Hỏi 7 công nhân (làm việc như nhau) làm được bao nhiêu sản phẩm trong một giờ?", (45 / 3) * 7, undefined, "sản phẩm"),
    ],
    adv: [
      num("4 người làm xong một công việc trong 6 ngày. Hỏi 3 người (làm việc như nhau) làm xong công việc đó trong mấy ngày?", (4 * 6) / 3, "Công việc cần 4 × 6 = 24 ngày công của một người.", "ngày"),
      num("5 máy bơm cùng loại bơm đầy một bể trong 12 giờ. Hỏi 6 máy bơm như vậy bơm đầy bể trong mấy giờ?", (5 * 12) / 6, undefined, "giờ"),
      num("Một đội 12 người sửa xong con đường trong 15 ngày. Muốn sửa xong trong 9 ngày thì cần bao nhiêu người (làm việc như nhau)?", (12 * 15) / 9, undefined, "người"),
      num("Mua 6 quyển vở và 4 chiếc bút phải trả 60 000 đồng. Hỏi mua 3 quyển vở và 2 chiếc bút cùng loại phải trả bao nhiêu đồng?", 60000 / 2, "Số lượng mỗi loại giảm đi một nửa nên số tiền cũng giảm đi một nửa."),
      num("Cứ 3 kg thóc xay được 2 kg gạo. Muốn có 50 kg gạo thì cần xay bao nhiêu ki-lô-gam thóc?", (50 / 2) * 3, undefined, "kg"),
    ],
  },

  // Bài 48. Luyện tập chung
  48: {
    intro: "Ôn lại: nhân, chia số có nhiều chữ số; tính chất của phép nhân; nhân, chia với 10, 100, 1 000; số trung bình cộng; bài toán rút về đơn vị.",
    questions: [
      num("Đặt tính rồi tính: 3 084 × 7 = ?", 3084 * 7),
      num("Đặt tính rồi tính: 45 × 68 = ?", 45 * 68),
      num("Đặt tính rồi tính: 7 392 : 24 = ?", 7392 / 24),
      num("Tính bằng cách thuận tiện: 25 × 18 × 4 = ?", 25 * 18 * 4),
      num("Tính bằng cách thuận tiện: 36 × 125 + 36 × 75 = ?", 36 * 125 + 36 * 75),
      num("Tìm số trung bình cộng của 82, 90, 95 và 97.", (82 + 90 + 95 + 97) / 4),
      num("Mua 8 hộp bút cùng loại hết 96 000 đồng. Hỏi mua 5 hộp bút như vậy hết bao nhiêu đồng?", (96000 / 8) * 5, undefined, "đồng"),
      num("420 000 : 1 000 = ?", 420000 / 1000),
      num("Mỗi bạn gấp 25 con hạc giấy. Mỗi tổ có 12 bạn. 8 tổ gấp được tất cả bao nhiêu con hạc giấy?", 25 * 12 * 8, undefined, "con"),
      num("Kho có 6 tấn 3 tạ gạo, chia đều cho 9 xã. Mỗi xã nhận được bao nhiêu ki-lô-gam gạo?", 6300 / 9, undefined, "kg"),
      mc("Ước lượng kết quả của 52 × 49:", "khoảng 2 500", ["khoảng 250", "khoảng 25 000", "khoảng 1 000"]),
      num("Trung bình mỗi ngày cửa hàng bán được 85 kg đường. Trong 12 ngày cửa hàng bán được bao nhiêu ki-lô-gam đường?", 85 * 12, undefined, "kg"),
      num("Hình chữ nhật có chiều dài 125 m, chiều rộng 48 m. Diện tích hình chữ nhật là bao nhiêu mét vuông?", 125 * 48, undefined, "m²"),
    ],
    adv: [
      num("Tìm x biết: x × 15 + 70 = 400. Số x là:", (400 - 70) / 15),
      num("Tổng của hai số là 120, số này gấp 3 lần số kia. Tích của hai số đó là:", 30 * 90, "Số bé là 120 : 4 = 30, số lớn là 90."),
      num("Năm bạn có tuổi trung bình là 10 tuổi. Khi cô giáo 40 tuổi cùng tham gia thì trung bình tuổi của cả nhóm là bao nhiêu?", (50 + 40) / 6, undefined, "tuổi"),
      num("6 người làm xong một công việc trong 10 ngày. Hỏi 4 người (làm việc như nhau) làm xong công việc đó trong mấy ngày?", (6 * 10) / 4, undefined, "ngày"),
      num("Số tự nhiên bé nhất khác 0 chia hết cho cả 4, 6 và 9 là số nào?", 36),
    ],
  },
};
