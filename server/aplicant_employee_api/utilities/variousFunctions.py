from io import BytesIO
import zipfile
from django.conf import settings

def zipFiles(files):
    outfile = BytesIO() 
    with zipfile.ZipFile(outfile, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
        for file in files:
            # print(file.name, file.file)
            zf.write(settings.MEDIA_ROOT+file.name)
    zf.close
    # zipFileContent = outfile.getvalue()
    # outfile.close()
    return outfile