import Posts from '../models/Post.js';
import Comments from '../models/Comment.js';
import { StatusCodes } from 'http-status-codes';
import NotFoundError from '../../../errors/not-found.js'
import BadRequestError from '../../../errors/bad-request.js';
import Posts from '../models/Post.js';

export const createComment = async (req,res,next)=>{
  try {
    const {user:{userID},body:{postID}} = req;
    const post = await Posts.findbyID(postID);
    if(!post){
        throw new NotFoundError('no post with the provided ID');
    }
    if(post.commentDisabled){
        throw new BadRequestError('comments are disabled in this post!!! '); 
    }
    if(post.limitCommentUsers){
       if(!post.usersAllowedToComment.includes(userID)){
           throw new BadRequestError('you are not allowed to comment on this post!!! ');
       }
    }
    const comment = await Comments.create({...req.body,user:userID});
    return res.status(StatusCodes.OK).json({success:true,comment});
  } catch (error) {
    next(error);
  }
}
export const getSinglePostComments = async (req,res,next)=>{
  try {
    const {params:{id:postID}} = req;
    const comments = await Comments.find({postID}).populate({path:'user', select:'username profilePic'});
    return res.status(StatusCodes.OK).json({success:true,nbHits:comments.length,comments});
  } catch (error) {
   next(error);
  }
}
