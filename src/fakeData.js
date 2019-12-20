export default function data() {
  return {
    titles: ["title1", "title2"],
    todos: [
      {
        title: "title1",
        text: "text1",
        index: 0,
        completed: false
      },
      {
        title: "title1",
        text: "text2\nline2",
        index: 1,
        completed: false
      },
      {
        title: "title2",
        text: "text3",
        index: 2,
        completed: false
      }
    ],
    indexOfTodos: 3
  };
}
