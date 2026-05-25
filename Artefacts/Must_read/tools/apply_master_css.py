import os
import re

with open('/Users/galahassa/Dev/ai_architect_course/docs/design_system/marp_theme.css', 'r') as f:
    master_css = f.read()

# Strip the comment block at the top to only inject the actual CSS
master_css = re.sub(r'/\*.*?\*/\s*', '', master_css, flags=re.DOTALL)

new_style_block = "style: |\n"
for line in master_css.split('\n'):
    if line.strip():
        new_style_block += f"  {line}\n"
    else:
        new_style_block += "\n"

def update_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Replace the entire style block
    pattern = re.compile(r'style: \|.*?---\n', re.DOTALL)
    new_content = pattern.sub(new_style_block + "---\n", content)

    # Convert old inline styles in lesson 1.1 to use the new classes
    if 'lecon_1.1_bienvenue' in path:
        new_content = new_content.replace('<div class="grid-2" style="gap: 15px; margin-top: 10px;">', '<div class="grid-2 grid-compact">')
        new_content = new_content.replace('<div class="card card-highlight" style="padding: 15px 20px;">', '<div class="card card-highlight card-compact">')

    with open(path, 'w') as f:
        f.write(new_content)
    print(f"Updated {path}")

base_dir = '/Users/galahassa/Dev/ai_architect_course/content'
for root, dirs, files in os.walk(base_dir):
    for name in files:
        if name == 'slides_marp.md':
            file_path = os.path.join(root, name)
            update_file(file_path)

