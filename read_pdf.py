import sys
import PyPDF2

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            # Extract text from the first few pages to get the gist
            for i in range(min(5, len(reader.pages))):
                text += reader.pages[i].extract_text() + "\n"
            print(text)
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    read_pdf(sys.argv[1])
