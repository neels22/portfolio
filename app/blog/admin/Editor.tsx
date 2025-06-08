'use client';

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

// Use type assertion to handle ReactQuill typing issues
const QuillEditor = ReactQuill as any;

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <QuillEditor
      theme="snow"
      value={value}
      onChange={onChange}
      className="h-96 mb-12"
    />
  );
} 