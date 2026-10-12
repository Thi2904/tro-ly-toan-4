import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch9: Record<number, L> = {
  // Bài 49. Dãy số liệu thống kê
  49: {
    intro:
      "Dãy số liệu thống kê là các số liệu được ghi lại theo thứ tự. Từ dãy số liệu ta có thể biết: dãy có bao nhiêu số, số lớn nhất, số bé nhất và tính số trung bình cộng.",
    questions: [
      num("Rô-bốt ghi quãng đường đạp xe (km) từ thứ Hai đến thứ Sáu thành dãy số liệu: 1, 2, 2, 2, 3. Dãy số liệu có bao nhiêu số?", 5),
      num("Dãy số liệu: 1, 2, 2, 2, 3 (km). Quãng đường dài nhất trong một buổi tập là bao nhiêu ki-lô-mét?", 3, undefined, "km"),
      num("Dãy số liệu: 1, 2, 2, 2, 3 (km). Trung bình mỗi ngày Rô-bốt đi được bao nhiêu ki-lô-mét?", (1 + 2 + 2 + 2 + 3) / 5, undefined, "km"),
      num("Số bàn thắng của Nam, Việt, Rô-bốt và Dũng lần lượt là 7, 6, 2, 4. Dũng ghi được bao nhiêu bàn thắng?", 4),
      num("Số bàn thắng của Nam, Việt, Rô-bốt và Dũng lần lượt là 7, 6, 2, 4. Có bao nhiêu bạn ghi được nhiều hơn 5 bàn thắng?", 2, "Đó là Nam (7 bàn) và Việt (6 bàn).", "bạn"),
      mc("Số cuốn sách mỗi bạn đọc trong tháng là 1, 13, 8, 4, 5. Dãy số liệu sắp xếp theo thứ tự từ bé đến lớn là:", "1, 4, 5, 8, 13", ["1, 13, 8, 4, 5", "13, 8, 5, 4, 1", "1, 5, 4, 8, 13"]),
      num("Dãy số liệu về số chữ cái trong tên các bạn tổ 1: 4, 3, 2, 3, 4, 5, 3, 5. Dãy có tất cả bao nhiêu số?", 8),
      num("Dãy số liệu về số chữ cái trong tên các bạn tổ 1: 4, 3, 2, 3, 4, 5, 3, 5. Tên nhiều chữ cái nhất có bao nhiêu chữ cái?", 5),
      tf("Dãy số liệu: 4, 3, 2, 3, 4, 5, 3, 5. Trong tổ 1 có bạn tên là Nguyệt.", false, "Tên Nguyệt có 6 chữ cái, mà số lớn nhất trong dãy chỉ là 5."),
      num("Số dâu tây Việt hái được mỗi ngày: 2, 3, 4, 5, 7, 8, 10, 13. Việt đã hái dâu tây trong bao nhiêu ngày?", 8, undefined, "ngày"),
      num("Số phút tập thể dục mỗi ngày của các thành viên trong gia đình Mai: 20, 40, 10, 50, 30. Gia đình Mai có bao nhiêu thành viên?", 5),
      num("Số phút tập thể dục mỗi ngày của các thành viên trong gia đình Mai: 20, 40, 10, 50, 30. Trung bình mỗi người tập bao nhiêu phút?", (20 + 40 + 10 + 50 + 30) / 5, undefined, "phút"),
      num("Số giờ ngủ của 7 bạn: 10, 8, 11, 10, 9, 8, 7. Có bao nhiêu bạn ngủ đủ từ 9 đến 12 giờ mỗi ngày?", 4, "Đó là các bạn ngủ 10, 11, 10 và 9 giờ.", "bạn"),
    ],
  },

  // Bài 50. Biểu đồ cột
  50: {
    intro:
      "Biểu đồ cột: cột cao hơn biểu diễn số lượng nhiều hơn, cột thấp hơn biểu diễn số lượng ít hơn. Số ghi ở đỉnh cột (hoặc đọc trên trục) cho biết số lượng ở cột đó.",
    questions: [
      mc("[[bar:Số bạn yêu thích mỗi môn thể thao|Bóng đá=4,Bóng rổ=6,Bơi=2|bạn]]\nMôn thể thao nào được nhiều bạn yêu thích nhất?", "Bóng rổ", ["Bóng đá", "Bơi"]),
      num("[[bar:Số bạn yêu thích mỗi môn thể thao|Bóng đá=4,Bóng rổ=6,Bơi=2|bạn]]\nCó tất cả bao nhiêu bạn tham gia khảo sát?", 12, "4 + 6 + 2 = 12.", "bạn"),
      mc("[[bar:Số cuốn sách khối lớp 4 đã đóng góp|4A=60,4B=52,4C=80,4D=68,4E=40|cuốn]]\nLớp nào đóng góp nhiều sách nhất?", "Lớp 4C", ["Lớp 4A", "Lớp 4D", "Lớp 4E"]),
      mc("[[bar:Số cuốn sách khối lớp 4 đã đóng góp|4A=60,4B=52,4C=80,4D=68,4E=40|cuốn]]\nLớp nào đóng góp ít sách nhất?", "Lớp 4E", ["Lớp 4A", "Lớp 4B", "Lớp 4C"]),
      num("[[bar:Số cuốn sách khối lớp 4 đã đóng góp|4A=60,4B=52,4C=80,4D=68,4E=40|cuốn]]\nCó bao nhiêu lớp đóng góp nhiều hơn 50 cuốn sách?", 4, "Các lớp 4A, 4B, 4C, 4D.", "lớp"),
      num("[[bar:Số cuốn sách khối lớp 4 đã đóng góp|4A=60,4B=52,4C=80,4D=68,4E=40|cuốn]]\nTrung bình mỗi lớp đóng góp bao nhiêu cuốn sách?", (60 + 52 + 80 + 68 + 40) / 5, undefined, "cuốn"),
      num("[[bar:Số học sinh đến thư viện mượn sách|Thứ Hai=35,Thứ Ba=50,Thứ Tư=50,Thứ Năm=70,Thứ Sáu=115|học sinh]]\nTrung bình mỗi ngày có bao nhiêu học sinh đến thư viện mượn sách?", (35 + 50 + 50 + 70 + 115) / 5, undefined, "học sinh"),
      mc("[[bar:Số học sinh đến thư viện mượn sách|Thứ Hai=35,Thứ Ba=50,Thứ Tư=50,Thứ Năm=70,Thứ Sáu=115|học sinh]]\nNhững ngày nào có số học sinh đến thư viện mượn sách bằng nhau?", "Thứ Ba và Thứ Tư", ["Thứ Hai và Thứ Ba", "Thứ Năm và Thứ Sáu", "Thứ Hai và Thứ Năm"]),
      num("[[bar:Số ngày có mưa trong ba tháng đầu năm|Tháng 1=20,Tháng 2=25,Tháng 3=15|ngày]]\nTháng 2 mưa nhiều hơn tháng 1 bao nhiêu ngày?", 25 - 20, undefined, "ngày"),
      num("[[bar:Số ngày có mưa trong ba tháng đầu năm|Tháng 1=20,Tháng 2=25,Tháng 3=15|ngày]]\nTrung bình mỗi tháng có bao nhiêu ngày mưa?", (20 + 25 + 15) / 3, undefined, "ngày"),
      mc("[[bar:Số ngày có mưa trong ba tháng đầu năm|Tháng 1=20,Tháng 2=25,Tháng 3=15|ngày]]\nTháng nào có ít ngày mưa nhất?", "Tháng 3", ["Tháng 1", "Tháng 2"]),
      num("Số vé xem phim bán được từ thứ Hai đến Chủ nhật: 285, 540, 2 150, 410, 1 105, 1 200, 1 610. Có bao nhiêu ngày bán được nhiều hơn 1 000 vé?", 4, "Đó là các ngày bán 2 150; 1 105; 1 200 và 1 610 vé.", "ngày"),
      mc("Số vé xem phim bán được từ thứ Hai đến Chủ nhật: 285, 540, 2 150, 410, 1 105, 1 200, 1 610. Ngày nào bán được nhiều vé nhất?", "Thứ Tư", ["Thứ Hai", "Thứ Bảy", "Chủ nhật"], "Thứ Tư hằng tuần mua 1 tặng 1 nên bán được 2 150 vé."),
    ],
  },

  // Bài 51. Số lần xuất hiện của một sự kiện
  51: {
    intro:
      "Khi thực hiện một hoạt động nhiều lần (quay vòng quay, lấy bóng, gieo xúc xắc,...), ta dùng bảng kiểm đếm để ghi lại số lần xuất hiện của mỗi sự kiện rồi so sánh.",
    questions: [
      num("Hai bạn quay vòng quay 20 lần, mũi tên dừng lại ở phần màu đỏ 9 lần. Hỏi mũi tên dừng ở phần màu vàng bao nhiêu lần?", 20 - 9, undefined, "lần"),
      mc("Vòng quay: mũi tên dừng ở phần màu đỏ 9 lần, ở phần màu vàng 11 lần. Sự kiện nào xuất hiện nhiều lần hơn?", "mũi tên dừng ở phần màu vàng", ["mũi tên dừng ở phần màu đỏ", "hai sự kiện xuất hiện bằng nhau", "mũi tên không dừng lại"]),
      mc("Trong hộp có 3 quả bóng xanh và 1 quả bóng vàng. Lấy 1 quả bóng từ hộp thì các sự kiện có thể xảy ra là:", "lấy được bóng xanh hoặc lấy được bóng vàng", ["chỉ lấy được bóng xanh", "chỉ lấy được bóng vàng", "lấy được bóng đỏ"]),
      mc("Trong hộp có 3 quả bóng xanh và 1 quả bóng vàng. Lấy 1 quả, ghi màu rồi trả lại; làm nhiều lần như vậy. Sự kiện nào có khả năng xuất hiện nhiều lần hơn?", "lấy được bóng xanh", ["lấy được bóng vàng", "hai sự kiện chắc chắn bằng nhau", "không thể biết trước"]),
      mc("Trong túi có 2 chiếc bút xanh và 1 chiếc bút vàng. Lấy 2 chiếc bút ra khỏi túi thì các sự kiện có thể xảy ra là:", "lấy được 1 bút xanh và 1 bút vàng; hoặc lấy được 2 bút xanh", ["chỉ lấy được 2 bút vàng", "lấy được 3 bút xanh", "lấy được 2 bút vàng hoặc 2 bút xanh"]),
      num("Nam gieo một xúc xắc nhiều lần. Trong bảng kiểm đếm, ô của mặt 5 chấm có một ô vuông gạch chéo (5 lần) và thêm hai vạch. Mặt 5 chấm đã xuất hiện bao nhiêu lần?", 7, undefined, "lần"),
      num("Gieo hai xúc xắc và cộng số chấm ở các mặt trên. Tổng bé nhất có thể là bao nhiêu?", 2),
      num("Gieo hai xúc xắc và cộng số chấm ở các mặt trên. Tổng lớn nhất có thể là bao nhiêu?", 12),
      mc("Gieo hai xúc xắc nhiều lần và cộng số chấm ở các mặt trên. Tổng nào có khả năng xuất hiện nhiều lần nhất?", 7, [2, 12, 3], "Có 6 cách để được tổng 7, nhiều hơn các tổng khác."),
      mc("Gieo hai xúc xắc rồi nhân số chấm ở hai mặt trên. Tích là số lẻ khi nào?", "khi cả hai mặt đều có số chấm lẻ", ["khi có ít nhất một mặt có số chấm lẻ", "khi cả hai mặt đều có số chấm chẵn", "khi tổng số chấm bằng 7"]),
      num("Một bảng kiểm đếm ghi: Phần màu xanh: 7 lần; phần màu đỏ: 13 lần. Tổng số lần quay là bao nhiêu?", 20, undefined, "lần"),
      tf("Nếu thực hiện cùng một hoạt động nhiều lần thì kết quả các lần luôn giống nhau.", false, "Mỗi lần thực hiện có thể cho kết quả khác nhau."),
    ],
  },

  // Bài 52. Luyện tập chung
  52: {
    intro: "Ôn lại: dãy số liệu thống kê, biểu đồ cột, số trung bình cộng và số lần xuất hiện của một sự kiện.",
    questions: [
      num("Số tiền thu được mỗi ngày: 180 000, 70 000, 125 000, 80 000, 100 000 (đồng). Có bao nhiêu ngày thu được nhiều hơn 100 000 đồng?", 2, undefined, "ngày"),
      mc("[[bar:Số câu đố mỗi bạn giải được|Lan=7,Rô-bốt=6,Việt=3,Nam=6,Mai=9,Lâm=5|câu]]\nBạn nào giải được nhiều câu đố nhất?", "Mai", ["Lan", "Nam", "Việt"]),
      mc("[[bar:Số câu đố mỗi bạn giải được|Lan=7,Rô-bốt=6,Việt=3,Nam=6,Mai=9,Lâm=5|câu]]\nBạn nào giải được ít câu đố nhất?", "Việt", ["Lâm", "Lan", "Rô-bốt"]),
      num("[[bar:Số câu đố mỗi bạn giải được|Lan=7,Rô-bốt=6,Việt=3,Nam=6,Mai=9,Lâm=5|câu]]\n6 bạn đã giải được tất cả bao nhiêu câu đố?", 7 + 6 + 3 + 6 + 9 + 5, undefined, "câu"),
      num("[[bar:Số câu đố mỗi bạn giải được|Lan=7,Rô-bốt=6,Việt=3,Nam=6,Mai=9,Lâm=5|câu]]\nTrung bình mỗi bạn giải được bao nhiêu câu đố?", (7 + 6 + 3 + 6 + 9 + 5) / 6, undefined, "câu"),
      num("Số chậu cây Mai và Mi làm được mỗi ngày: 2, 3, 5, 5, 5, 8, 8, 10, 12, 12. Trong một ngày, hai chị em làm được nhiều nhất bao nhiêu chậu cây?", 12),
      num("Số chậu cây Mai và Mi làm được mỗi ngày: 2, 3, 5, 5, 5, 8, 8, 10, 12, 12. Trung bình mỗi ngày hai chị em làm được bao nhiêu chậu cây?", (2 + 3 + 5 + 5 + 5 + 8 + 8 + 10 + 12 + 12) / 10, undefined, "chậu"),
      mc("Việt có 4 chiếc hộp, trong đó 1 hộp đựng kẹo và 3 hộp đựng tẩy bút chì. Chọn 1 hộp bất kì, mở ra rồi đóng lại; làm nhiều lần. Sự kiện nào có khả năng xuất hiện nhiều lần hơn?", "chọn được hộp đựng tẩy bút chì", ["chọn được hộp đựng kẹo", "hai sự kiện luôn bằng nhau", "không chọn được hộp nào"]),
      num("Một dãy số liệu có các số 12, 18, 15 và 15. Số trung bình cộng của dãy là bao nhiêu?", (12 + 18 + 15 + 15) / 4),
      mc("Dãy số liệu 4, 9, 6, 6, 2 có số lớn nhất là:", 9, [6, 4, 2]),
      mc("[[bar:Số bạn yêu thích mỗi môn thể thao|Bóng đá=4,Bóng rổ=6,Bơi=2|bạn]]\nSố bạn yêu thích Bơi so với Bóng đá thì:", "ít hơn 2 bạn", ["nhiều hơn 2 bạn", "bằng nhau", "ít hơn 4 bạn"]),
    ],
  },
};
