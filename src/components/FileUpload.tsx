import { useState } from "react";
import { UploadZone } from "./FileUpload/UploadZone";
import { ProcessingView } from "./FileUpload/ProcessingView";
import { ResultView } from "./FileUpload/ResultView";

export const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedText, setProcessedText] = useState<string>("");

  const handleFileChange = async (newFile: File) => {
    setFile(newFile);
    setIsProcessing(true);

    try {
      const formData = new FormData();
      formData.append("file", newFile);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setProcessedText(data.text || "");
    } catch (error) {
      console.error("Błąd przetwarzania OCR:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setProcessedText("");
    setIsProcessing(false);
  };

  return (
    <div className="w-full p-10">
      {!file ? (
        <UploadZone onFileSelect={handleFileChange} />
      ) : isProcessing ? (
        <ProcessingView />
      ) : (
        <ResultView
          fileName={file.name}
          processedText={processedText}
          onReset={handleReset}
        />
      )}
    </div>
  );
};
