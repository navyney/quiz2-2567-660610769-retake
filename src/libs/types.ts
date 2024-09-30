// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string ,
    username : string ,
    replyText : string ,
    likeNum : number,
}

export type { ReplyProps };

interface Commentcomp {
    ImagePath : string;
    username : string;
    commentTitle : string;
    likes : number;
    replies : ReplyProps[] | any;
}

export type { Commentcomp } ;