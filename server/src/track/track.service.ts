import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { CreateCommentDto } from './dto/create-comment.dto'
import { CreateTrackDto } from './dto/create-track.dto'
import { Comment, CommentDocument } from './shemas/comment.schema'
import { Track, TrackDocument } from './shemas/track.schema'

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    return await this.trackModel.create({ ...dto, listens: 0 })
  }

  async getAll(): Promise<Track[]> {
    return await this.trackModel.find()
  }

  async getOne(id: ObjectId): Promise<Track> {
    return await (await this.trackModel.findById(id)).populate('comments')
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id)
    return track.id
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId)
    const comment = await this.commentModel.create({ ...dto })
    track.comments.push(comment.id)
    await track.save()
    return comment
  }
}
