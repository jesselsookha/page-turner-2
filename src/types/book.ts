export type ReadingStatus = 'Completed' | 'Currently Reading';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  status: ReadingStatus;
  rating: number; // 1 to 5 stars
  isFavorite: boolean;
  dateAdded: string;
}

export interface GenreOption {
  id: string;
  name: string;
  category: 'Fiction' | 'Nonfiction';
}

export interface ReadingStats {
  totalPagesRead: number;
  averagePages: number;
  totalBooksRead: number;
  pageGoal: number;
}
