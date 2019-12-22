export default function data() {
  return {
    titles: ["오늘", "내일"],
    todos: [
      {
        title: "오늘",
        text: "운동하기",
        index: 0,
        completed: false
      },
      {
        title: "오늘",
        text: "냉장고 파먹기\n- 토마토\n- 계란",
        index: 1,
        completed: false
      },
      {
        title: "내일",
        text: "일찍 자기",
        index: 2,
        completed: false
      }
    ],
    indexOfTodos: 3
  };
}
