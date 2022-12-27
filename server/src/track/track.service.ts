import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
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
    const track = await this.trackModel.create({ ...dto, listens: 0 })
    return track
  }

  async getAll(): Promise<Track[]> {
    return await this.trackModel.find()
  }

  async getOne(id: ObjectId): Promise<Track> {
    return await this.trackModel.findById(id)
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id)
    return track.id
  }
}
