// Transformer uniquement les clôtures mermaid avant la coloration syntaxique.
export default function mermaidBlocks() {
  return (tree, file) => {
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    function walk(parent) {
      if (!parent.children) return;
      parent.children = parent.children.map((node) => {
        if (node.type === 'code' && node.lang === 'mermaid') {
          if (String(file.path || '').endsWith('.mdx')) return {
            type: 'mdxJsxFlowElement', name: 'pre',
            attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: 'mermaid' }],
            children: [{ type: 'text', value: node.value }],
          };
          return { type: 'html', value: '<pre class="mermaid">' + escape(node.value) + '</pre>' };
        }
        walk(node);
        return node;
      });
    }
    walk(tree);
  };
}
