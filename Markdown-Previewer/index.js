const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
 const firstLoad = `
  # Header 1 Preview
  ## Header 2 Preview
  [Link Preview](https://www.google.com)
  Some inline code \`hello world\` for your enjoyment
  A code block
  \`\`\`
  const helloMarkdown = () => {
      return 'Hello, Markdown'
  }
  \`\`\`
  Some list items:
  - Item 1
  - Item 2
  - Item 3
  Block Quote
  > This is
  > a blockquote
  > for your enjoyment
  Some **bold** and *italicized* text
  Images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

    const [text, setText] = React.useState(firstLoad);
    const handleText = (e) => {
        setText(e.target.value);
    }
    
  return (
    <div className="container" style={{marginTop: 15}}>
      <div id="markdown" className="card mb-3 shadow">
        <div className="card-header bg-primary shadow"><b>Editor</b></div>
        <textarea className="card-body bg-primary-subtle shadow"style={{minHeight: 200}} onChange={handleText} type="text"id="editor" value={text}></textarea>
      </div>
      <div className="card shadow">
      <div className="card-header shadow bg-primary"><b>Previewer</b></div>
        <div className="card-body shadow bg-primary-subtle" style={{minHeight: 200}}>
        <p id="preview" style={{padding: 20}} dangerouslySetInnerHTML={{ __html: marked.marked(text) }} />
        </div>
      </div>
    </div>
  );
};

root.render(<App />);
