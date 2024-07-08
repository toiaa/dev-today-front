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
interface Tag {
  key?: string;
  name: string;
  id: string;
}

interface Post {
  id: string;
  key: string;
  bio?: string;
  title: string;
  tinyContent: string;
  interestTechTags: Tag[];
  createdAt: string;
  coverImage: string;
  comments: any;
  views: number;
  createdAt: string;
  meetupDate?: string;
  author: UserProfile;
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
