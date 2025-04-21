function copyCode(id) {
    const codeElement = document.getElementById(id);
    const copyIcon = document.getElementById(id + '-copy-icon');
    const checkIcon = document.getElementById(id + '-check-icon');
    
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
      // Show success state
      copyIcon.classList.add('hidden');
      checkIcon.classList.remove('hidden');
      
      // Add glitch animation to code block
      codeElement.classList.add('copied');
      
      // Reset after 2 seconds
      setTimeout(() => {
        copyIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        codeElement.classList.remove('copied');
      }, 2000);
    });
  }
  
// Initialize syntax highlighting if Prism is available
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Prism !== 'undefined') {
        // Set the path before any highlighting occurs
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        window.Prism.plugins = window.Prism.plugins || {};
        window.Prism.plugins.autoloader = window.Prism.plugins.autoloader || {};
        window.Prism.plugins.autoloader.languages_path = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/';
        
        // Now initialize highlighting
        Prism.highlightAll();
    }
});
  