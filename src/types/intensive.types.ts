export interface IIntensive {
  name: string;
  description: string;
  video: IVideo[];
  previewImage: string;
}

export interface IVideo {
  name: string;
  description: string;
  videoUrl: string;
}

export interface IFile {
  name: string;
  fileUrl: string;
}
