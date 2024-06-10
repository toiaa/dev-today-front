interface NavIconsState {
  [key: string]: boolean;
}

interface NavIcon {
  id: SelectedIcon;
  href: string;
  icon: ReactElement;
  exact?: boolean;
}

interface ModalIcon {
  id: string;
  icon: ReactElement;
}
interface SortFiltersCard {
  id: string;
  label: string;
}

interface Post {
  id: string;
  key: string;
  bio?: string;

  title: string;
  content: string;
  tags: Tag[];
  createdAt: string;
  image: string;
  coverImage?: string;
  comments: any; // need to create a comment type
  views: number;
  createdAt: string;
  authorId: string;
  author: UserProfile;
  meetDate?: string;
  podcastLength?: string;
  likes: Like[];

  _count?: {
    groupUser: number;
  };
}

interface Group {
  id: string;
  name: string;
  profileImage: string;
  coverImage: string;
  bio: string;
  posts: Post[];
  createdAt: string;
  groupUser: GroupUser[];
  creatorId: string;
  creator: UserProfile;
  members?: GroupUser[];
  _count?: {
    post: number;
    groupUser: number;
  };
}
