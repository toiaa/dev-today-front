interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  size?: number;
  theme?: "light" | "dark";
  isSelected?: boolean;
  onClick?: () => void;
  pending?: boolean;
}

interface NavIconProps {
  id: SelectedIcon;
  pending?: boolean;
}
interface UserProfileProps {
  user: UserProfile;
  isOwner: boolean;
}
interface EditProfileProps {
  user: UserProfile;
}
interface StandardCardProps {
  user: UserProfile;
  key: string;
  post: Post;
}

interface GroupCardProps {
  user: UserProfile;
  key: string;
  group: Group;
}

interface ProfilePageProps {
  user: UserProfile;
  posts: Post[] | null;
  type: string;
  isOwner: boolean;
}

interface RecentPostsProps {
  user: UserProfile;
}
interface PerformancesCardProps {
  posts: Post[];
}
interface InfiniteScrollProps {
  user: UserProfile;
  type: string;
  initialContent: Post[] | Group[];
}

interface GroupCard {
  group: Group;
}

type TagProps = {
  key?: string;
  label: string;
};
