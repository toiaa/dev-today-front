"use client";
import { User } from "next-auth";
import { useEffect, useRef, useState } from "react";

import GroupCard from "../shared/cards/GroupCard";
import MeetUpCard from "../shared/cards/MeetupCard";
import PodcastCard from "../shared/cards/PodcastCard";
import StandardPostCard from "../shared/cards/StandardPostCard";

const InfiniteScroll = ({
  user,
  type,
  initialContent,
}: InfiniteScrollProps) => {
  const [posts, setPosts] = useState(initialContent);
  const [currentPage, setCurrentPage] = useState(2);
  const observerRef = useRef(null);

  const fetchMorePosts = async () => {
    const response = await fetch(
      `http://localhost:3005/api/user/${user.id}/posts?postType=${type.toUpperCase()}&page=${currentPage}&size=3`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    if (response.ok && data.length > 0) {
      setPosts([...posts, ...data]);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setPosts(initialContent);
  }, [initialContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMorePosts();
        }
      },
      {
        threshold: 1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [posts, observerRef.current]);
  if (!posts.length)
    return (
      <div className="w-full items-center justify-center">
        <p className="paragraph-2-bold text-center  text-dark-800 dark:text-white-100 ">
          No posts found
        </p>
      </div>
    );
  if (posts.length && type !== "group") {
    if (!(posts as Post[])[0].likes) return null;
  }
  return (
    <div>
      {type === "standard" && (
        <div className="grid grid-cols-1 gap-3.5">
          {(posts as Post[]).map((post: Post) => {
            return <StandardPostCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}

      {type === "meetup" && (
        <div className="grid grid-cols-1 gap-3.5">
          {(posts as Post[] as Post[]).map((post: Post) => {
            return <MeetUpCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}
      {type === "podcast" && (
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {(posts as Post[]).map((post: Post) => {
            return <PodcastCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}
      {type === "group" && (
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {(posts as Group[]).map((group: Group) => {
            console.log(group);
            return <GroupCard user={user} group={group} key={group.id} />;
          })}
        </div>
      )}
      {type === "members" && (
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {(posts as User[]).map((member: User) => {
            return (
              <div key={member.id}>
                <p>{member.name}</p>
                <p>{member.email}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className="h-1 bg-transparent" ref={observerRef}></div>
    </div>
  );
};

export default InfiniteScroll;
