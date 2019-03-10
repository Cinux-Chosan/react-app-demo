function* treeIterator(treeNode) {
  yield treeNode;
  const { children } = treeNode;
  if (children) {
    for (const node of children) {
      yield* treeIterator(node);
    }
  }
}

export function findTreeNode(tree, id, field = '_id') {
  for (const node of treeIterator(tree)) {
    if (node[field] === id) {
      return node;
    }
  }
}

export function timeFormat(timeStamp) {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}
