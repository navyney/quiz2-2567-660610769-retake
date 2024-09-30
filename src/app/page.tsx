"use client";
import PostOwnner from "@/components/PostOwnner";
import Image from "next/image";
import styles from "./page.module.css";
import { ReplyProps } from "@/libs/types";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { Commentcomp } from "@/libs/types";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner
          profilepic="/profileImages/IMG_7756.jpg"
          title="Boontharika Korkitrotjana 660610769"
          content="ทำหน้าเว็บไม่ใช่ทางสุด ๆ เลยครับ"
          likenum={0} >
        </PostOwnner>
          

        {/* Comment Example */}
        

        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
        { comments.map ( ( comment : Commentcomp ) => (
          <Comment
            key = { comment.username }
            userImagePath = { comment.userImagePath }
            username = { comment.username }
            commentText = { comment.commentText }
            likeNum = { comment.likeNum }
            replies = { comment.replies }
          />
        ))}
      </div>
    </div>
  );
}
