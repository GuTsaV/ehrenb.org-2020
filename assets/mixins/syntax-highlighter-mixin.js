import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import ruby from 'highlight.js/lib/languages/ruby';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('ruby', ruby);

export default {
  mounted() {
    this.$nextTick(this.highlight);
  },
  methods: {
    highlight() {
      document.querySelectorAll('pre').forEach(block => {
        hljs.highlightBlock(block);
      });
    },
  },
};
