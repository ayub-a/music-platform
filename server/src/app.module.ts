import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrackModule } from './track/track.module'

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo-music:AidJfpFiHESAQzUU@cluster0.xbebmoq.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
