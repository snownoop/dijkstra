import shortestPathSearch from "./dijkstra.js";
const data = [
  {
    id: "a",
    pathes: [
      {
        toId: "b",
        value: 5
      },
      {
        toId: "c",
        value: 2
      }
    ]
  },
  {
    id: "b",
    pathes: [
      {
        toId: "a",
        value: 5
      },
      {
        toId: "e",
        value: 7
      },
      {
        toId: "c",
        value: 2
      }
    ]
  },
  {
    id: "c",
    pathes: [
      {
        toId: "a",
        value: 2
      },
      {
        toId: "b",
        value: 2
      },
      {
        toId: "d",
        value: 8
      }
    ]
  },
  {
    id: "d",
    pathes: [
      {
        toId: "e",
        value: 10
      },
      {
        toId: "c",
        value: 8
      }
    ]
  },
  {
    id: "e",
    pathes: [
      {
        toId: "d",
        value: 10
      },
      {
        toId: "b",
        value: 7
      }
    ]
  }
];
const startId = "a";
const bigValue = 1000000;
const result = shortestPathSearch(tree, startPoint, infiniteValue);
console.log("result is: ", result);
