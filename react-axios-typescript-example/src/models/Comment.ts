export interface Comment{
  id: number,
  writtenText: string,
  profileId: number,
  postId: number
}

export interface CommentArray{
  Comments:Comment[]
}