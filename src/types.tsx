
export type CommentObject = {
    id: number;
    name: string;
    email: string;
    rating: number;
    comment: string;
    dateObject: {
      day: number,
      month: number,
      year: number
    }
  };