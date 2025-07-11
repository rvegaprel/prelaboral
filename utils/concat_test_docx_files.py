import glob
from docx import Document

# Directorio que contiene los archivos DOCX
docx_files = glob.glob("./Tests/*.docx")

output_file_path = "./combined_tests.txt"
combined_text = ""

# Recorrer cada archivo DOCX en la carpeta "Tests"
for file_name in docx_files:
    combined_text += f"==== {file_name} ====\n\n"
    doc = Document(file_name)
    # Extraer cada párrafo del documento
    for para in doc.paragraphs:
        combined_text += para.text + "\n"
    combined_text += "\n\n"

# Escribir el contenido combinado en un archivo de texto plano
with open(output_file_path, 'w', encoding='utf-8') as f:
    f.write(combined_text)

print(f"Archivo generado exitosamente: {output_file_path}")
