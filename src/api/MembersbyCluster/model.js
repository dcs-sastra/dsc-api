import mongoose, { Schema } from 'mongoose'

const member = new Schema({
  name:{
    type: String
  },
  imgUrl:{
    type: String
  },
  role:{
    type: String
  },
  batch: {
    type: Number // Intended to store the last year that the person was in DSC
  },
  linkedin: {
  	type: String,
  	default: ""
  },
  github: {
  	type: String,
  	default: ""
  },
  twitter: {
  	type: String,
  	default: ""
  }
}) 

const membersbyClusterSchema = new Schema({
  lead: {
    type: member
  },
  app: {
    type: [member]
  },
  flutter: {
    type: [member]
  },
  web: {
    type: [member]
  },
  ml: {
    type: [member]
  },
  cloud: {
    type: [member]
  },
  arvr: {
    type: [member]
  },
  graphic: {
    type: [member]
  },
  content: {
    type: [member]
  },
  marketing: {
    type: [member]
  },
  eventcoverage: {
    type: [member]
  }

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

membersbyClusterSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      lead: this.lead,
      app: this.app,
      flutter: this.flutter,
      web: this.web,
      ml: this.ml,
      cloud: this.cloud,
      arvr: this.arvr,
      eventcoverage: this.eventcoverage,
      graphic: this.graphic,
      content: this.content,
      marketing: this.marketing,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('MembersbyCluster', membersbyClusterSchema)

export const schema = model.schema
export default model
