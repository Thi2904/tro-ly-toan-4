import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

const READ = "[[bar:Số quyển truyện mỗi bạn đọc trong tháng|Lan=8,Nam=12,Hà=10,Bình=6,Dũng=14|quyển]]";
const WAY = "[[bar:Số học sinh đến lớp bằng mỗi phương tiện|Đi bộ=24,Xe đạp=30,Xe buýt=18,Xe máy=8|học sinh]]";
const RICE = "[[bar:Số tạ lúa thu hoạch của mỗi tổ|Tổ 1=45,Tổ 2=60,Tổ 3=55,Tổ 4=40|tạ]]";
const TREE = "[[bar:Số cây mỗi lớp trồng được|4A=35,4B=42,4C=28,4D=35,4E=40|cây]]";
const CLUB = "[[bar:Số học sinh tham gia mỗi câu lạc bộ|Vẽ=15,Cờ=12,Võ=20,Múa=18|học sinh]]";
const GOOD = "[[bar:Số học sinh giỏi Toán của mỗi lớp|4A=20,4B=24,4C=10,4D=30|học sinh]]";

export const ch9: Record<number, L> = {
  // Bài 49. Dãy số liệu thống kê
  49: {
    intro:
      "Dãy số liệu thống kê là các số liệu được ghi lại theo thứ tự. Từ dãy số liệu ta có thể biết: dãy có bao nhiêu số, số lớn nhất, số bé nhất, tổng các số và tính số trung bình cộng.",
    questions: [
      num("Số bông hoa An cắm mỗi ngày trong 6 ngày là: 3, 5, 4, 6, 7, 5. Dãy số liệu có bao nhiêu số?", 6),
      num("Số bông hoa An cắm mỗi ngày trong 6 ngày là: 3, 5, 4, 6, 7, 5. Trong một ngày An cắm nhiều nhất bao nhiêu bông hoa?", 7, undefined, "bông"),
      num("Số bông hoa An cắm mỗi ngày trong 6 ngày là: 3, 5, 4, 6, 7, 5. Trung bình mỗi ngày An cắm bao nhiêu bông hoa?", (3 + 5 + 4 + 6 + 7 + 5) / 6, undefined, "bông"),
      num("Điểm kiểm tra của 5 bạn là 7, 9, 8, 10 và 6. Điểm trung bình của 5 bạn là:", (7 + 9 + 8 + 10 + 6) / 5),
      mc("Dãy số liệu 12, 5, 9, 5, 20 được sắp xếp theo thứ tự từ bé đến lớn là:", "5, 5, 9, 12, 20", ["5, 9, 12, 20", "20, 12, 9, 5, 5", "5, 5, 12, 9, 20"]),
      num("Số học sinh của 5 lớp khối Bốn là 32, 35, 30, 35, 33. Có bao nhiêu lớp có từ 33 học sinh trở lên?", 3, "Đó là các lớp có 35, 35 và 33 học sinh.", "lớp"),
      num("Số trang sách Hà đọc trong 5 ngày là 12, 15, 9, 20, 14. Ngày đọc nhiều trang nhất hơn ngày đọc ít trang nhất bao nhiêu trang?", 20 - 9, undefined, "trang"),
      num("Cân nặng của 5 bạn là 30 kg, 34 kg, 28 kg, 32 kg và 36 kg. Cân nặng trung bình của mỗi bạn là bao nhiêu ki-lô-gam?", (30 + 34 + 28 + 32 + 36) / 5, undefined, "kg"),
      num("Một dãy số liệu có 7 số và số trung bình cộng là 12. Tổng của 7 số đó là bao nhiêu?", 12 * 7),
      num("Số khách tham quan trong 4 ngày là 120, 150, 90 và 140. Có bao nhiêu ngày số khách nhiều hơn số khách trung bình của 4 ngày?", 2, "Trung bình: 500 : 4 = 125. Các ngày 150 và 140 nhiều hơn 125.", "ngày"),
      tf("Dãy số liệu 5, 8, 8, 10 có hai số bằng nhau.", true),
      mc("Số lần nhảy dây của 5 bạn là 45, 52, 38, 52, 47. Có mấy bạn nhảy được số lần nhiều nhất?", 2, [1, 3, 5]),
      num("Số lần nhảy dây của 5 bạn là 45, 52, 38, 52, 47. Bạn nhảy nhiều nhất nhảy nhiều hơn bạn nhảy ít nhất bao nhiêu lần?", 52 - 38, undefined, "lần"),
    ],
    adv: [
      num("Trung bình cộng của 8 số là 15. Nếu bỏ đi số 36 thì trung bình cộng của 7 số còn lại là bao nhiêu?", (15 * 8 - 36) / 7),
      num("Năm số có trung bình cộng là 20, số lớn nhất là 30 và số bé nhất là 10. Tổng của ba số còn lại là:", 20 * 5 - 30 - 10),
      num("Năm bài kiểm tra của Lan có điểm là 7, 9, 8, 10 và một bài nữa. Điểm trung bình của cả năm bài là 8. Điểm của bài còn lại là:", 8 * 5 - 7 - 9 - 8 - 10),
      num("Trung bình mỗi ngày trong 5 ngày cửa hàng bán được 24 kg cam. Bốn ngày đầu bán được 20 kg, 25 kg, 22 kg và 28 kg. Ngày thứ năm cửa hàng bán được bao nhiêu ki-lô-gam cam?", 24 * 5 - 20 - 25 - 22 - 28, undefined, "kg"),
      num("Số trung bình cộng của dãy số 1; 2; 3; 4; 5; 6; 7; 8; 9 là:", 5),
    ],
  },

  // Bài 50. Biểu đồ cột
  50: {
    intro:
      "Biểu đồ cột: cột cao hơn biểu diễn số lượng nhiều hơn, cột thấp hơn biểu diễn số lượng ít hơn. Số ghi ở đỉnh cột (hoặc đọc trên trục) cho biết số lượng ở cột đó.",
    questions: [
      mc(`${READ}\nBạn nào đọc được nhiều quyển truyện nhất?`, "Dũng", ["Lan", "Nam", "Bình"]),
      num(`${READ}\nNăm bạn đọc được tất cả bao nhiêu quyển truyện?`, 8 + 12 + 10 + 6 + 14, undefined, "quyển"),
      num(`${READ}\nNam đọc nhiều hơn Bình bao nhiêu quyển truyện?`, 12 - 6, undefined, "quyển"),
      num(`${READ}\nTrung bình mỗi bạn đọc được bao nhiêu quyển truyện?`, (8 + 12 + 10 + 6 + 14) / 5, undefined, "quyển"),
      mc(`${READ}\nBạn nào đọc đúng bằng số quyển truyện trung bình của cả nhóm?`, "Hà", ["Lan", "Nam", "Dũng"]),
      num(`${READ}\nCó bao nhiêu bạn đọc nhiều hơn 9 quyển truyện?`, 3, "Đó là Nam (12), Hà (10) và Dũng (14).", "bạn"),
      mc(`${WAY}\nPhương tiện nào được nhiều học sinh dùng nhất?`, "Xe đạp", ["Đi bộ", "Xe buýt", "Xe máy"]),
      num(`${WAY}\nCó tất cả bao nhiêu học sinh được khảo sát?`, 24 + 30 + 18 + 8, undefined, "học sinh"),
      num(`${WAY}\nSố học sinh đi xe đạp nhiều hơn số học sinh đi bộ bao nhiêu bạn?`, 30 - 24, undefined, "bạn"),
      num(`${WAY}\nCó bao nhiêu học sinh đi bộ hoặc đi xe buýt?`, 24 + 18, undefined, "học sinh"),
      num(`${RICE}\nTổ 2 thu hoạch nhiều hơn tổ 4 bao nhiêu tạ lúa?`, 60 - 40, undefined, "tạ"),
      num(`${RICE}\nTrung bình mỗi tổ thu hoạch được bao nhiêu tạ lúa?`, (45 + 60 + 55 + 40) / 4, undefined, "tạ"),
      num(`${RICE}\nCó bao nhiêu tổ thu hoạch được nhiều hơn số tạ lúa trung bình của mỗi tổ?`, 2, "Trung bình là 50 tạ; tổ 2 (60 tạ) và tổ 3 (55 tạ) nhiều hơn 50 tạ.", "tổ"),
      mc(`${RICE}\nTổ nào thu hoạch cùng với tổ 1 được đúng 100 tạ lúa?`, "Tổ 3", ["Tổ 2", "Tổ 4", "Không có tổ nào"]),
    ],
    adv: [
      num(`${GOOD}\nSố học sinh giỏi Toán của lớp 4D gấp mấy lần số học sinh giỏi Toán của lớp 4C?`, 30 / 10),
      num(`${GOOD}\nLớp 4C cần thêm bao nhiêu học sinh giỏi Toán thì có số học sinh giỏi bằng lớp 4A?`, 20 - 10, undefined, "học sinh"),
      num(`${GOOD}\nTrung bình mỗi lớp có bao nhiêu học sinh giỏi Toán?`, (20 + 24 + 10 + 30) / 4, undefined, "học sinh"),
      num("Một biểu đồ cột có 5 cột. Cột cao nhất ứng với 40, cột thấp nhất ứng với 10, ba cột còn lại bằng nhau. Số trung bình của 5 cột là 25. Mỗi cột trong ba cột còn lại ứng với bao nhiêu?", (25 * 5 - 40 - 10) / 3),
      num("Trên một biểu đồ cột, mỗi ô ứng với 5 học sinh. Cột biểu diễn 65 học sinh cao bao nhiêu ô?", 65 / 5, undefined, "ô"),
    ],
  },

  // Bài 51. Số lần xuất hiện của một sự kiện
  51: {
    intro:
      "Khi thực hiện một hoạt động nhiều lần (quay vòng quay, lấy bóng, gieo xúc xắc, tung đồng xu,...), ta dùng bảng kiểm đếm để ghi lại số lần xuất hiện của mỗi sự kiện rồi so sánh. Mỗi ô vuông gạch chéo trong bảng kiểm đếm tương ứng 5 lần.",
    questions: [
      num("Hai bạn quay vòng quay 30 lần, mũi tên dừng ở phần màu đỏ 12 lần, còn lại dừng ở phần màu vàng. Mũi tên dừng ở phần màu vàng bao nhiêu lần?", 30 - 12, undefined, "lần"),
      mc("Trong hộp có 5 quả bóng xanh và 1 quả bóng đỏ. Lấy 1 quả bóng, ghi màu rồi trả lại; làm nhiều lần như vậy. Sự kiện nào có khả năng xuất hiện nhiều lần hơn?", "lấy được bóng xanh", ["lấy được bóng đỏ", "hai sự kiện xuất hiện như nhau", "không lấy được bóng nào"]),
      mc("Trong hộp có 3 quả bóng xanh và 3 quả bóng đỏ. Lấy 1 quả bóng, ghi màu rồi trả lại; làm nhiều lần. Khả năng lấy được bóng xanh và bóng đỏ:", "như nhau", ["bóng xanh nhiều hơn", "bóng đỏ nhiều hơn", "không thể lấy được bóng"]),
      num("Bảng kiểm đếm số lần xuất hiện mặt 6 chấm có hai ô vuông gạch chéo (mỗi ô 5 lần) và thêm 3 vạch. Mặt 6 chấm đã xuất hiện bao nhiêu lần?", 2 * 5 + 3, undefined, "lần"),
      num("Nam gieo một xúc xắc 40 lần. Số lần xuất hiện các mặt 1, 2, 3, 4, 5 chấm lần lượt là 6, 8, 7, 5, 9. Mặt 6 chấm xuất hiện bao nhiêu lần?", 40 - (6 + 8 + 7 + 5 + 9), undefined, "lần"),
      mc("Gieo một xúc xắc thì các sự kiện có thể xảy ra là:", "xuất hiện mặt 1, 2, 3, 4, 5 hoặc 6 chấm", ["chỉ xuất hiện mặt 6 chấm", "xuất hiện mặt 7 chấm", "xuất hiện mặt 0 chấm"]),
      num("Gieo hai xúc xắc và cộng số chấm ở hai mặt trên. Có bao nhiêu giá trị khác nhau của tổng có thể xảy ra?", 11, "Tổng có thể là 2; 3; ...; 12."),
      num("Gieo hai xúc xắc, có bao nhiêu cách để tổng số chấm bằng 7 (xét thứ tự hai xúc xắc)?", 6, "1 + 6, 2 + 5, 3 + 4, 4 + 3, 5 + 2, 6 + 1."),
      num("Gieo hai xúc xắc, có bao nhiêu cách để tổng số chấm bằng 11 (xét thứ tự hai xúc xắc)?", 2, "5 + 6 và 6 + 5."),
      mc("Gieo một xúc xắc nhiều lần. Khả năng xuất hiện mặt có số chấm chẵn và mặt có số chấm lẻ:", "như nhau", ["số chấm chẵn nhiều hơn", "số chấm lẻ nhiều hơn", "không thể xảy ra"]),
      tf("Gieo một xúc xắc 6 lần thì chắc chắn mỗi mặt xuất hiện đúng 1 lần.", false),
      num("Bảng kiểm đếm ghi sự kiện A: 14 lần, sự kiện B: 9 lần, sự kiện C: 7 lần. Sự kiện A xuất hiện nhiều hơn sự kiện C bao nhiêu lần?", 14 - 7, undefined, "lần"),
      mc("Trong hộp có các thẻ ghi số 1, 2, 3, ..., 10. Lấy 1 thẻ. Sự kiện nào không thể xảy ra?", "lấy được thẻ ghi số 12", ["lấy được thẻ ghi số 5", "lấy được thẻ ghi số chẵn", "lấy được thẻ ghi số lẻ"]),
    ],
    adv: [
      num("Gieo hai xúc xắc (xét thứ tự hai xúc xắc). Có tất cả bao nhiêu kết quả có thể xảy ra?", 6 * 6),
      num("Gieo hai xúc xắc rồi nhân hai số chấm. Có bao nhiêu kết quả (xét thứ tự) cho tích là số lẻ?", 3 * 3, "Cả hai mặt đều phải có số chấm lẻ (1, 3, 5): 3 × 3 cách."),
      num("Bạn Lan có 3 chiếc áo (đỏ, xanh, vàng) và 2 chiếc quần (đen, trắng). Lan có bao nhiêu cách chọn một bộ gồm một áo và một quần?", 3 * 2, undefined, "cách"),
      num("Tung hai đồng xu (xét thứ tự hai đồng xu, mỗi đồng xu có mặt sấp hoặc mặt ngửa). Có bao nhiêu kết quả có thể xảy ra?", 4),
      num("Tung ba đồng xu (xét thứ tự). Có bao nhiêu kết quả có thể xảy ra?", 8),
    ],
  },

  // Bài 52. Luyện tập chung
  52: {
    intro: "Ôn lại: dãy số liệu thống kê, biểu đồ cột, số trung bình cộng và số lần xuất hiện của một sự kiện.",
    questions: [
      mc(`${TREE}\nLớp nào trồng được ít cây nhất?`, "Lớp 4C", ["Lớp 4A", "Lớp 4B", "Lớp 4E"]),
      num(`${TREE}\nCả năm lớp trồng được tất cả bao nhiêu cây?`, 35 + 42 + 28 + 35 + 40, undefined, "cây"),
      num(`${TREE}\nTrung bình mỗi lớp trồng được bao nhiêu cây?`, (35 + 42 + 28 + 35 + 40) / 5, undefined, "cây"),
      mc(`${TREE}\nHai lớp nào trồng được số cây bằng nhau?`, "Lớp 4A và lớp 4D", ["Lớp 4B và lớp 4E", "Lớp 4C và lớp 4E", "Lớp 4A và lớp 4B"]),
      num(`${TREE}\nLớp 4B trồng được nhiều hơn lớp 4C bao nhiêu cây?`, 42 - 28, undefined, "cây"),
      num("Số điểm sáu bạn đạt được là 20, 22, 26, 22, 28 và 26. Điểm trung bình của sáu bạn là:", (20 + 22 + 26 + 22 + 28 + 26) / 6),
      num("Gieo một xúc xắc 50 lần, mặt 6 chấm xuất hiện 9 lần. Các mặt còn lại xuất hiện tất cả bao nhiêu lần?", 50 - 9, undefined, "lần"),
      num("Số vé bán được trong 5 ngày, trung bình mỗi ngày 140 vé. Bốn ngày đầu bán 120, 150, 90 và 180 vé. Ngày thứ năm bán được bao nhiêu vé?", 140 * 5 - 120 - 150 - 90 - 180, undefined, "vé"),
      num("Trung bình cộng của bốn số là 25. Ba số đầu là 20, 30 và 24. Số thứ tư là:", 25 * 4 - 20 - 30 - 24),
      mc("Trong túi có 4 thẻ đỏ và 1 thẻ xanh. Lấy 1 thẻ, ghi màu rồi trả lại; làm nhiều lần. Sự kiện nào có khả năng xuất hiện nhiều lần hơn?", "lấy được thẻ đỏ", ["lấy được thẻ xanh", "hai sự kiện như nhau", "không lấy được thẻ nào"]),
      tf("Khi gieo một xúc xắc, chắc chắn xuất hiện mặt có số chấm bé hơn 7.", true),
      num(`${CLUB}\nCâu lạc bộ Võ có nhiều hơn câu lạc bộ Cờ bao nhiêu học sinh?`, 20 - 12, undefined, "học sinh"),
      num(`${CLUB}\nCả bốn câu lạc bộ có tất cả bao nhiêu học sinh tham gia?`, 15 + 12 + 20 + 18, undefined, "học sinh"),
    ],
    adv: [
      num("Lớp có 30 bạn, chiều cao trung bình của mỗi bạn là 140 cm. Tổng chiều cao của cả lớp là bao nhiêu xăng-ti-mét?", 30 * 140, undefined, "cm"),
      num("Một biểu đồ cột có 5 cột ứng với các số 12, 18, 24, 6 và một số nữa. Trung bình của 5 cột là 15. Số còn lại là:", 15 * 5 - 12 - 18 - 24 - 6),
      num("Gieo một xúc xắc. Có bao nhiêu kết quả cho số chấm là số nguyên tố (2, 3, 5)?", 3),
      num("Trong hộp có các thẻ ghi số từ 1 đến 20. Có bao nhiêu thẻ ghi số chia hết cho 3?", 6, "Đó là 3; 6; 9; 12; 15; 18."),
      num("Số khách trung bình mỗi ngày trong 3 ngày đầu là 80 người. Ngày thứ tư có 100 người. Trung bình mỗi ngày trong 4 ngày có bao nhiêu khách?", (80 * 3 + 100) / 4, undefined, "người"),
    ],
  },
};
