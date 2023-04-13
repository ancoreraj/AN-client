import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

const Check = () => {
    const { getRootProps, getInputProps,acceptedFiles } = useDropzone()
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} accept=".pdf"/>
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

export default Check;