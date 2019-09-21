import mongoose, { Schema } from 'mongoose'

const clustersSchema = new Schema({
  name: {
    type: String
  },
  img: {
    type: String
  },
  backgroundColor: {
    type: String
  },
  link: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

clustersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      img: this.img,
      backgroundColor: this.backgroundColor,
      link: this.link,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Clusters', clustersSchema)

export const schema = model.schema
export default model
