"use client";

import Reply from "./Reply";
import { ReplyProps } from "@/libs/types";

interface Commentcomp {
  userImagePath : string ;
  username : string ;
  commentText : string ;
  likeNum : number ;
  replies : ReplyProps[] ;
}
export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
} : Commentcomp ) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
            <img
              src={userImagePath}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <div
              className="rounded rounded-3 p-2"
              style={{ backgroundColor: "#3A3B3C" }}
            >
              <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
                {username}
              </span>
              <br />
              <span style={{ color: "#E4E6EB" }}>{commentText}</span>
              <div className="d-flex align-items-center gap-1">
                <img src="/like.svg" width={20}></img>
                <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
              </div>
              </div>
              </div>

      { replies.map ( ( reply : any ) => (
        <Reply
          key = { reply.username }
          userImage={ reply.userImagePath }
          username = { reply.username }
          reply = { reply.replyText }
          like = { reply.likeNum }
        ></Reply>
      ))}
    </div>
  );
}
