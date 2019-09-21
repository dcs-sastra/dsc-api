import mongoose, { Schema } from 'mongoose'

const eventsSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  description: {
    type: String
  },
  main: {
    type: String
  },
  venue: {
    type: String
  },
  speakers: {
    type: String
  },
  poster: {
    type: String
  },
  register_link: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

eventsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      date: this.date,
      description: this.description,
      main: this.main,
      venue: this.venue,
      speakers: this.speakers,
      poster: this.poster,
      register_link: this.register_link,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Events', eventsSchema)

export const schema = model.schema
export default model
