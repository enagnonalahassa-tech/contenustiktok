import os
import glob
import re

new_style = """style: |
  :root {
    --brand-primary: #00D4FF;
    --brand-accent: #7C3AED;
    --brand-glow: rgba(0, 212, 255, 0.15);
  }
  section {
    font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
    font-size: 28px;
    padding: 50px;
    justify-content: center;
    line-height: 1.7;
  }
  section::before {
    content: 'GENEREUX ALAHASSA • ARCHITECTE IA';
    position: absolute;
    bottom: 18px;
    left: 50px;
    font-size: 10px;
    letter-spacing: 3px;
    color: rgba(148, 163, 184, 0.35);
    font-weight: 500;
    text-transform: uppercase;
  }
  section::after {
    color: rgba(255,255,255,0.2);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 3px;
  }
  section.cover::before {
    content: '';
    position: absolute;
    top: -100px; left: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.3), transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  h1 {
    background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 55px;
    margin-bottom: 25px;
    font-weight: 800;
    letter-spacing: -1px;
  }
  section.cover h1 {
    font-size: 72px;
    letter-spacing: -2px;
  }
  h2 {
    color: #F8FAFC;
    font-size: 42px;
    font-weight: 700;
  }
  h2::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent));
    border-radius: 2px;
    margin-top: 10px;
  }
  h3 {
    font-size: 30px;
    margin-top: 0;
  }
  .accent {
    color: var(--brand-primary);
    font-weight: bold;
  }
  .warning {
    color: #FB923C;
    font-weight: 700;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 20px;
  }
  .card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 
      0 4px 6px -1px rgba(0,0,0,0.4),
      0 0 0 1px rgba(255,255,255,0.05) inset;
    padding: 30px;
    transition: border-color 0.2s ease;
  }
  .card-highlight {
    border: 1px solid rgba(0, 212, 255, 0.4);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.08);
  }
  ul {
    margin-top: 15px;
    padding-left: 25px;
  }
  li {
    margin-bottom: 10px;
  }
  .code-block {
    background: #0D1117;
    padding: 15px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 28px;
    color: #A5D6FF;
    border: 1px solid #30363D;
    display: inline-block;
  }
  .pipeline-flow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 30px;
    border-radius: 16px;
    margin-top: 40px;
  }
  .pipeline-step {
    text-align: center;
    width: 30%;
  }
  .arrow {
    color: var(--brand-primary);
    font-size: 40px;
    font-weight: bold;
  }
"""

def update_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Replace the entire style block
    # It starts at 'style: |' and goes until the end of the frontmatter '---'
    pattern = re.compile(r'style: \|.*?---\n', re.DOTALL)
    new_content = pattern.sub(new_style + "---\n", content)

    # Change the first _class: invert center to add cover
    new_content = new_content.replace('<!-- _class: invert center -->', '<!-- _class: invert center cover -->', 1)

    with open(path, 'w') as f:
        f.write(new_content)
    print(f"Updated {path}")

base_dir = '/Users/galahassa/Dev/ai_architect_course/content'
for root, dirs, files in os.walk(base_dir):
    for name in files:
        if name == 'slides_marp.md':
            file_path = os.path.join(root, name)
            update_file(file_path)

