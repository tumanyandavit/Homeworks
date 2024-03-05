function buildTree(nodes, parentId = null) {
    const tree = {
        id: parentId,
        children: []
    }

    nodes
        .filter(node => node.parentId === parentId)
        .forEach(childNode => {
            const childTree = buildTree(nodes, childNode.id);
            tree.children.push(childTree);
        });

    return tree;
}