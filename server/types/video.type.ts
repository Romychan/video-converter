export interface VideoSettings {
  format: string;
  quality: string;
  fps: string;
  start: string;
  end: string;
  audio: string;
}

export interface VideoFiles {
  outputFile: string;
}

export type DestinationCallback = (error: Error | null, destination: string) => void;
export type FileNameCallback = (error: Error | null, filename: string) => void;
