export interface IIntensive {
  title: string;
  slug: string;
  price: number;
  previewImage: string;
  videoPresentationUrl: string;
  lessonsAmount: number;
  exercisesAmount: number;
  hoursAmount: number;
  videos?: IVideo[];
  additionalInfo: {
    lessonsAmount: number;
    hoursAmount: number;
    exerciseAmount: number;
  };
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
