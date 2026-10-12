import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch2: Record<number, L> = {
  // Bài 7. Đo góc, đơn vị đo góc
  7: {
    intro:
      "Độ là đơn vị đo góc, kí hiệu là °. Góc vuông bằng 90°, góc bẹt bằng 180°. Dùng thước đo góc: đặt tâm thước trùng với đỉnh góc, một cạnh nằm trên vạch 0.",
    questions: [
      mc("Đơn vị đo góc là:", "độ (kí hiệu °)", ["mét (m)", "ki-lô-gam (kg)", "giây (s)"]),
      mc("Muốn đo góc bằng thước đo góc, ta đặt tâm của thước trùng với:", "đỉnh của góc", ["một điểm bất kì trên cạnh", "trung điểm của một cạnh", "điểm nằm ngoài góc"]),
      num("[[angle:60]]\nSố đo của góc trong hình là bao nhiêu độ?", 60, undefined, "độ"),
      num("[[angle:90]]\nSố đo của góc trong hình là bao nhiêu độ?", 90, undefined, "độ"),
      num("[[angle:120]]\nSố đo của góc trong hình là bao nhiêu độ?", 120, undefined, "độ"),
      num("[[angle:180]]\nSố đo của góc trong hình là bao nhiêu độ?", 180, undefined, "độ"),
      num("[[clock:3:00]]\nKhi đồng hồ chỉ 3 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 90, undefined, "độ"),
      num("[[clock:6:00]]\nKhi đồng hồ chỉ 6 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 180, undefined, "độ"),
      num("[[clock:4:00]]\nKhi đồng hồ chỉ 4 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 120, undefined, "độ"),
      num("[[clock:2:00]]\nKhi đồng hồ chỉ 2 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 60, undefined, "độ"),
      mc(
        "Hình tứ giác ABCD có góc đỉnh A bằng 90°, góc đỉnh B bằng 60°, góc đỉnh C bằng 90°, góc đỉnh D bằng 120°. Góc nào có số đo lớn nhất?",
        "Góc đỉnh D",
        ["Góc đỉnh A", "Góc đỉnh B", "Góc đỉnh C"],
      ),
    ],
  },

  // Bài 8. Góc nhọn, góc tù, góc bẹt
  8: {
    intro:
      "Góc nhọn bé hơn góc vuông (bé hơn 90°). Góc tù lớn hơn góc vuông (lớn hơn 90° và bé hơn 180°). Góc bẹt bằng hai góc vuông (180°).",
    questions: [
      mc("[[angle:60]]\nĐây là góc gì?", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      mc("[[angle:120]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[angle:180]]\nĐây là góc gì?", "góc bẹt", ["góc nhọn", "góc vuông", "góc tù"]),
      mc("[[angle:90]]\nĐây là góc gì?", "góc vuông", ["góc nhọn", "góc tù", "góc bẹt"]),
      tf("Góc nhọn bé hơn góc vuông.", true),
      tf("Góc tù bé hơn góc vuông.", false, "Góc tù lớn hơn góc vuông."),
      mc("Góc bẹt bằng bao nhiêu góc vuông?", "2 góc vuông", ["1 góc vuông", "3 góc vuông", "4 góc vuông"]),
      mc("[[clock:2:00]]\nLúc 2 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      mc("[[clock:4:00]]\nLúc 4 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[clock:9:00]]\nLúc 9 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc vuông", ["góc nhọn", "góc tù", "góc bẹt"]),
      mc("[[clock:6:00]]\nLúc 6 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc bẹt", ["góc nhọn", "góc vuông", "góc tù"]),
    ],
  },

  // Bài 9. Luyện tập chung
  9: {
    intro: "Ôn lại cách đo góc và phân biệt góc nhọn, góc vuông, góc tù, góc bẹt.",
    questions: [
      num("[[angle:60]]\nĐo góc rồi nêu số đo của góc trong hình.", 60, undefined, "độ"),
      num("[[angle:120]]\nĐo góc rồi nêu số đo của góc trong hình.", 120, undefined, "độ"),
      mc("Số đo nào dưới đây có thể là số đo của một góc tù?", "120°", ["90°", "45°", "180°"]),
      mc("Số đo nào dưới đây có thể là số đo của một góc nhọn?", "30°", ["90°", "120°", "180°"]),
      mc("Hai góc vuông ghép lại với nhau tạo thành:", "góc bẹt", ["góc nhọn", "góc tù", "góc vuông"]),
      mc("Vào lúc nào kim giờ và kim phút của đồng hồ tạo thành góc vuông?", "3 giờ", ["6 giờ", "4 giờ", "2 giờ"]),
      tf("Có thể dùng ê ke để kiểm tra một góc có phải là góc vuông hay không.", true),
      num(
        "Rô-bốt vẽ góc đỉnh O; cạnh OM, ON có số đo 60° và góc đỉnh O; cạnh ON, OP có số đo 90° (tia ON nằm giữa hai tia OM và OP). Góc đỉnh O; cạnh OM, OP có số đo bao nhiêu độ?",
        60 + 90,
        "60° + 90° = 150°.",
        "độ",
      ),
      num("Một góc bẹt được chia thành hai góc, một góc có số đo 120°. Góc còn lại có số đo bao nhiêu độ?", 180 - 120, "180° – 120° = 60°.", "độ"),
      mc("[[angle:150]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
    ],
  },
};
