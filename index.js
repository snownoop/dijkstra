export default function shortestPathSearch(
  data,
  startId,
  bigValue,
  endId = null
) {
  const usedVertices = [];
  const shortestPathes = {};
  data.forEach(item => {
    shortestPathes[item.id] = item.id === startId ? 0 : bigValue;
  });

  Object.keys(shortestPathes).forEach(itemId => {
    const currentItem = Object.keys(shortestPathes)
      .map(vertexId => ({ id: vertexId, value: shortestPathes[vertexId] }))
      .filter(vertex => !usedVertices.includes(vertex.id))
      .reduce((prev, curr) => {
        return prev.value < curr.value ? prev : curr;
      });

    const pathes = data.find(item => item.id === currentItem.id).pathes;
    pathes.forEach(path => {
      const newValue = currentItem.value + path.value;
      if (newValue < shortestPathes[path.toId]) {
        shortestPathes[path.toId] = newValue;
      }
    });
    usedVertices.push(currentItem.id);
  });

  return endId ? shortestPathes[endId] : shortestPathes;
}
