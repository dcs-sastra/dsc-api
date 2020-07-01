import mongoose, { Schema } from 'mongoose'

const resourceSchema = new Schema({
  name: {
    type: String
  },
  description: {
      type: String
  },
  resource_url: {
    type: String
  },
  image_url: {
      type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

resourceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      resource_url: this.resource_url,
      image_url: this.image_url,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Resources', resourceSchema)

export const schema = model.schema
export default model
