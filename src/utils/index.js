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
